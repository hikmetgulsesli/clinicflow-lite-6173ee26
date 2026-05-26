import type { ClinicflowLitePersistedState } from '../features/clinicflow-lite/clinicflow-lite.store';

export const clinicflowLiteFixture: ClinicflowLitePersistedState = {
  version: 1,
  route: 'patient-operations',
  activePanel: 'patients',
  selectedRecordId: 'patient-emily-davis',
  patients: [
    {
      id: 'patient-emily-davis',
      name: 'Emily Davis',
      status: 'In room',
      priority: 'Routine',
      appointmentTime: '09:30',
      lastVisit: '2026-05-21',
    },
    {
      id: 'patient-marcus-lee',
      name: 'Marcus Lee',
      status: 'Queued',
      priority: 'Follow-up',
      appointmentTime: '10:15',
      lastVisit: '2026-05-12',
    },
    {
      id: 'patient-ana-martinez',
      name: 'Ana Martinez',
      status: 'Triage',
      priority: 'Urgent',
      appointmentTime: '10:45',
      lastVisit: '2026-05-03',
    },
  ],
  queue: [
    {
      id: 'queue-1',
      patientId: 'patient-ana-martinez',
      stage: 'triage',
    },
    {
      id: 'queue-2',
      patientId: 'patient-marcus-lee',
      stage: 'waiting',
    },
    {
      id: 'queue-3',
      patientId: 'patient-emily-davis',
      stage: 'room',
    },
  ],
  preferences: {
    density: 'comfortable',
    notificationsEnabled: true,
    defaultPanel: 'patients',
  },
};
