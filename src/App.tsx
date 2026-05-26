import { useEffect, useMemo, useReducer } from 'react';
import {
  EmptyAndErrorRecoveryClinicflowLite,
  InsightsClinicflowLite,
  PatientEditorClinicflowLite,
  PatientOperationsClinicflowLite,
  QueueAndStatusManagementClinicflowLite,
  SettingsAndPreferencesClinicflowLite,
} from './screens';
import {
  createClinicflowLiteState,
  clinicflowLiteReducer,
  getClinicflowLiteSnapshot,
  toClinicflowLitePersistedState,
  type ClinicflowLiteRoute,
} from './features/clinicflow-lite/clinicflow-lite.store';
import {
  loadClinicflowLiteState,
  resetClinicflowLiteState,
  saveClinicflowLiteState,
} from './features/clinicflow-lite/clinicflow-lite.repo';
import './test/bridge';

function getBrowserStorage(): Storage | null {
  return typeof window === 'undefined' ? null : window.localStorage;
}

function initializeClinicflowLiteState() {
  const loadResult = loadClinicflowLiteState(getBrowserStorage());
  const route = loadResult.status === 'corrupt' ? 'recovery' : loadResult.data.route;

  return createClinicflowLiteState(
    {
      ...loadResult.data,
      route,
    },
    loadResult.status,
    loadResult.error,
  );
}

export default function App() {
  const [state, dispatch] = useReducer(clinicflowLiteReducer, undefined, initializeClinicflowLiteState);
  const snapshot = useMemo(() => getClinicflowLiteSnapshot(state), [state]);

  useEffect(() => {
    window.app = snapshot;
  }, [snapshot]);

  useEffect(() => {
    if (state.storageStatus === 'corrupt') {
      return;
    }

    const status = saveClinicflowLiteState(getBrowserStorage(), toClinicflowLitePersistedState(state));

    if (status !== state.storageStatus) {
      dispatch({ type: 'set-storage-status', status });
    }
  }, [
    state.activePanel,
    state.patients,
    state.preferences,
    state.queue,
    state.route,
    state.selectedRecordId,
    state.storageStatus,
  ]);

  const navigate = (route: ClinicflowLiteRoute) => {
    dispatch({ type: 'navigate', route });
  };

  const openEditor = () => {
    dispatch({ type: 'select-record', id: snapshot.selectedRecord?.id ?? state.patients[0]?.id ?? null });
  };

  const recoverWorkspace = () => {
    dispatch({ type: 'recover', state: resetClinicflowLiteState(getBrowserStorage()) });
  };

  const patientOperationsRecords = state.patients.map((patient) => ({
    ...patient,
    stage: state.queue.find((item) => item.patientId === patient.id)?.stage ?? 'waiting',
  }));

  const patientOperationsActions = {
    'create-appointment-1': () => navigate('queue'),
    'add-patient-2': openEditor,
    'more-vert-3': () => dispatch({ type: 'select-record', id: state.patients[0]?.id ?? null }),
    'more-vert-4': () => dispatch({ type: 'select-record', id: state.patients[1]?.id ?? null }),
    'more-vert-5': () => dispatch({ type: 'select-record', id: state.patients[2]?.id ?? null }),
    'more-vert-6': () => dispatch({ type: 'select-record', id: state.patients[3]?.id ?? null }),
    'chevron-left-7': () => navigate('patient-operations'),
    'chevron-right-8': () => navigate('queue'),
    'patient-operations-1': () => navigate('patient-operations'),
    'queue-2': () => navigate('queue'),
    'insights-3': () => navigate('insights'),
    'settings-4': () => navigate('settings'),
  };

  const queueActions = {
    'create-appointment-1': () => navigate('patient-editor'),
    'filter-2': () => navigate('recovery'),
    'move-to-triage-3': () => dispatch({ type: 'advance-queue', stage: 'triage' }),
    'move-to-triage-4': () => dispatch({ type: 'advance-queue', stage: 'triage' }),
    'move-to-triage-5': () => dispatch({ type: 'advance-queue', stage: 'triage' }),
    'move-to-room-6': () => dispatch({ type: 'advance-queue', stage: 'room' }),
    'move-to-room-7': () => dispatch({ type: 'advance-queue', stage: 'room' }),
    'post-visit-8': () => dispatch({ type: 'advance-queue', stage: 'post-visit' }),
    'patient-operations-1': () => navigate('patient-operations'),
    'queue-2': () => navigate('queue'),
    'insights-3': () => navigate('insights'),
    'settings-4': () => navigate('settings'),
  };

  const insightsActions = {
    'create-appointment-1': () => navigate('queue'),
    'notifications-2': () => navigate('settings'),
    'button-3-3': () => navigate('insights'),
    'export-summary-4': () => dispatch({ type: 'set-storage-status', status: 'saved' }),
    'more-vert-5': () => navigate('patient-operations'),
    'patient-operations-1': () => navigate('patient-operations'),
    'queue-2': () => navigate('queue'),
    'insights-3': () => navigate('insights'),
    'settings-4': () => navigate('settings'),
  };

  const settingsActions = {
    'notifications-1': () => navigate('settings'),
    'account-circle-2': () => navigate('patient-operations'),
    'create-appointment-3': () => navigate('queue'),
    'reset-to-defaults-4': recoverWorkspace,
    'save-preferences-5': () => dispatch({ type: 'set-storage-status', status: 'saved' }),
    'workflow-6': () => navigate('queue'),
    'notifications-7': () => navigate('settings'),
    'display-8': () => navigate('settings'),
    'save-preferences-9': () => dispatch({ type: 'set-storage-status', status: 'saved' }),
    'reset-to-defaults-10': recoverWorkspace,
    'patient-operations-1': () => navigate('patient-operations'),
    'queue-2': () => navigate('queue'),
    'insights-3': () => navigate('insights'),
    'settings-4': () => navigate('settings'),
  };

  const recoveryActions = {
    'create-appointment-1': () => navigate('queue'),
    'empty-state-2': () => navigate('patient-operations'),
    'error-state-3': () => navigate('recovery'),
    'clear-filters-4': () => dispatch({ type: 'clear-error' }),
    'create-patient-5': openEditor,
    'retry-connection-6': recoverWorkspace,
    'patient-operations-1': () => navigate('patient-operations'),
    'queue-2': () => navigate('queue'),
    'insights-3': () => navigate('insights'),
    'settings-4': () => navigate('settings'),
  };

  return (
    <div
      data-setfarm-root="clinicflow-lite"
      data-active-screen={snapshot.activeScreen}
      data-active-panel={snapshot.activePanel}
      data-storage-status={snapshot.storageStatus}
      className="min-h-screen bg-background text-on-surface"
    >
      {state.route === 'patient-operations' ? (
        <PatientOperationsClinicflowLite
          actions={patientOperationsActions}
          patients={patientOperationsRecords}
          queueCounts={snapshot.counts}
          selectedPatientId={state.selectedRecordId}
        />
      ) : null}
      {state.route === 'queue' ? <QueueAndStatusManagementClinicflowLite actions={queueActions} /> : null}
      {state.route === 'insights' ? <InsightsClinicflowLite actions={insightsActions} /> : null}
      {state.route === 'settings' ? <SettingsAndPreferencesClinicflowLite actions={settingsActions} /> : null}
      {state.route === 'patient-editor' ? (
        <PatientEditorClinicflowLite
          patient={snapshot.selectedRecord ?? state.patients[0] ?? null}
          actions={{
            'arrow-back-1': () => navigate('patient-operations'),
            'cancel-2': () => navigate('patient-operations'),
            'save-changes-3': () => navigate('patient-operations'),
          }}
        />
      ) : null}
      {state.route === 'recovery' ? <EmptyAndErrorRecoveryClinicflowLite actions={recoveryActions} /> : null}
    </div>
  );
}
