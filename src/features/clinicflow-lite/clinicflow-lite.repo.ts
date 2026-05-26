import { clinicflowLiteFixture } from '../../__fixtures__/clinicflow-lite.fixture';
import type { ClinicflowLitePersistedState } from './clinicflow-lite.store';

export type ClinicflowLiteStorageStatus = 'ready' | 'restored' | 'unavailable' | 'corrupt' | 'saved';

export interface ClinicflowLiteLoadResult {
  data: ClinicflowLitePersistedState;
  status: ClinicflowLiteStorageStatus;
  error: string | null;
}

const STORAGE_KEY = 'clinicflow-lite:v1';

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

export function cloneClinicflowLiteFixture(): ClinicflowLitePersistedState {
  return structuredClone(clinicflowLiteFixture);
}

export function isClinicflowLiteState(value: unknown): value is ClinicflowLitePersistedState {
  if (!isRecord(value)) {
    return false;
  }

  return (
    value.version === 1 &&
    typeof value.route === 'string' &&
    typeof value.activePanel === 'string' &&
    Array.isArray(value.patients) &&
    Array.isArray(value.queue) &&
    isRecord(value.preferences)
  );
}

export function loadClinicflowLiteState(storage: Storage | null | undefined): ClinicflowLiteLoadResult {
  if (!storage) {
    return {
      data: cloneClinicflowLiteFixture(),
      status: 'unavailable',
      error: 'Local storage is unavailable; using the clinic fixture.',
    };
  }

  try {
    const raw = storage.getItem(STORAGE_KEY);

    if (!raw) {
      return {
        data: cloneClinicflowLiteFixture(),
        status: 'ready',
        error: null,
      };
    }

    const parsed = JSON.parse(raw) as unknown;

    if (!isClinicflowLiteState(parsed)) {
      return {
        data: cloneClinicflowLiteFixture(),
        status: 'corrupt',
        error: 'Saved clinic workspace data could not be recovered.',
      };
    }

    return {
      data: parsed,
      status: 'restored',
      error: null,
    };
  } catch {
    return {
      data: cloneClinicflowLiteFixture(),
      status: 'corrupt',
      error: 'Saved clinic workspace data could not be recovered.',
    };
  }
}

export function saveClinicflowLiteState(
  storage: Storage | null | undefined,
  state: ClinicflowLitePersistedState,
): ClinicflowLiteStorageStatus {
  if (!storage) {
    return 'unavailable';
  }

  try {
    storage.setItem(STORAGE_KEY, JSON.stringify(state));
    return 'saved';
  } catch {
    return 'unavailable';
  }
}

export function resetClinicflowLiteState(storage: Storage | null | undefined): ClinicflowLitePersistedState {
  if (storage) {
    storage.removeItem(STORAGE_KEY);
  }

  return cloneClinicflowLiteFixture();
}
