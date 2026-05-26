import type { ClinicflowLiteStorageStatus } from './clinicflow-lite.repo';

export type ClinicflowLiteRoute =
  | 'patient-operations'
  | 'queue'
  | 'insights'
  | 'settings'
  | 'patient-editor'
  | 'recovery';

export type ClinicflowLitePanel = 'patients' | 'queue' | 'insights' | 'settings' | 'editor' | 'recovery';

export interface ClinicflowLitePatient {
  id: string;
  name: string;
  status: string;
  priority: string;
  appointmentTime: string;
  lastVisit: string;
}

export interface ClinicflowLiteQueueItem {
  id: string;
  patientId: string;
  stage: 'waiting' | 'triage' | 'room' | 'post-visit';
}

export interface ClinicflowLitePreferences {
  density: 'compact' | 'comfortable';
  notificationsEnabled: boolean;
  defaultPanel: ClinicflowLitePanel;
}

export interface ClinicflowLitePersistedState {
  version: 1;
  route: ClinicflowLiteRoute;
  activePanel: ClinicflowLitePanel;
  selectedRecordId: string | null;
  patients: ClinicflowLitePatient[];
  queue: ClinicflowLiteQueueItem[];
  preferences: ClinicflowLitePreferences;
}

export interface ClinicflowLiteState extends ClinicflowLitePersistedState {
  storageStatus: ClinicflowLiteStorageStatus;
  lastError: string | null;
}

export interface ClinicflowLiteSnapshot {
  activeScreen: ClinicflowLiteRoute;
  route: ClinicflowLiteRoute;
  selectedRecord: ClinicflowLitePatient | null;
  counts: {
    patients: number;
    queue: number;
    waiting: number;
    triage: number;
    room: number;
    postVisit: number;
  };
  storageStatus: ClinicflowLiteStorageStatus;
  lastError: string | null;
  activePanel: ClinicflowLitePanel;
}

export type ClinicflowLiteAction =
  | { type: 'navigate'; route: ClinicflowLiteRoute }
  | { type: 'select-record'; id: string | null }
  | { type: 'set-storage-status'; status: ClinicflowLiteStorageStatus }
  | { type: 'clear-error' }
  | { type: 'recover'; state: ClinicflowLitePersistedState }
  | { type: 'advance-queue'; stage: ClinicflowLiteQueueItem['stage'] };

const panelsByRoute: Record<ClinicflowLiteRoute, ClinicflowLitePanel> = {
  'patient-operations': 'patients',
  queue: 'queue',
  insights: 'insights',
  settings: 'settings',
  'patient-editor': 'editor',
  recovery: 'recovery',
};

export function createClinicflowLiteState(
  persisted: ClinicflowLitePersistedState,
  storageStatus: ClinicflowLiteStorageStatus,
  lastError: string | null,
): ClinicflowLiteState {
  return {
    ...persisted,
    activePanel: panelsByRoute[persisted.route] ?? persisted.activePanel,
    storageStatus,
    lastError,
  };
}

export function toClinicflowLitePersistedState(state: ClinicflowLiteState): ClinicflowLitePersistedState {
  const { storageStatus: _storageStatus, lastError: _lastError, ...persisted } = state;
  return persisted;
}

export function getClinicflowLiteSnapshot(state: ClinicflowLiteState): ClinicflowLiteSnapshot {
  const selectedRecord = state.patients.find((patient) => patient.id === state.selectedRecordId) ?? null;

  return {
    activeScreen: state.route,
    route: state.route,
    selectedRecord,
    counts: {
      patients: state.patients.length,
      queue: state.queue.length,
      waiting: state.queue.filter((item) => item.stage === 'waiting').length,
      triage: state.queue.filter((item) => item.stage === 'triage').length,
      room: state.queue.filter((item) => item.stage === 'room').length,
      postVisit: state.queue.filter((item) => item.stage === 'post-visit').length,
    },
    storageStatus: state.storageStatus,
    lastError: state.lastError,
    activePanel: state.activePanel,
  };
}

export function clinicflowLiteReducer(
  state: ClinicflowLiteState,
  action: ClinicflowLiteAction,
): ClinicflowLiteState {
  switch (action.type) {
    case 'navigate':
      return {
        ...state,
        route: action.route,
        activePanel: panelsByRoute[action.route],
      };
    case 'select-record':
      return {
        ...state,
        selectedRecordId: action.id,
        route: 'patient-editor',
        activePanel: 'editor',
      };
    case 'set-storage-status':
      return {
        ...state,
        storageStatus: action.status,
      };
    case 'clear-error':
      return {
        ...state,
        lastError: null,
        route: state.route === 'recovery' ? 'patient-operations' : state.route,
        activePanel: state.route === 'recovery' ? 'patients' : state.activePanel,
      };
    case 'recover':
      return createClinicflowLiteState(action.state, 'ready', null);
    case 'advance-queue': {
      const selectedRecordId = state.selectedRecordId ?? state.queue[0]?.patientId ?? null;

      if (!selectedRecordId) {
        return state;
      }

      return {
        ...state,
        queue: state.queue.map((item) =>
          item.patientId === selectedRecordId ? { ...item, stage: action.stage } : item,
        ),
        route: 'queue',
        activePanel: 'queue',
      };
    }
    default:
      return state;
  }
}
