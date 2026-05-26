import type { ClinicflowLiteSnapshot } from '../features/clinicflow-lite/clinicflow-lite.store';

declare global {
  interface Window {
    app?: ClinicflowLiteSnapshot;
  }
}

export function readClinicflowLiteBridge(): ClinicflowLiteSnapshot | undefined {
  return window.app;
}

export {};
