// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Queue and Status Management - ClinicFlow Lite
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { useEffect, useMemo, useState } from "react";
import { BarChart3, Bell, CheckCircle2, CircleUserRound, Clock, DoorOpen, HeartPulse, ListFilter, ListOrdered, Menu, Plus, Search, Settings, TriangleAlert, User, UserSearch } from "lucide-react";
import type { ClinicflowLitePatient, ClinicflowLiteQueueItem } from "../features/clinicflow-lite/clinicflow-lite.store";


export type QueueAndStatusManagementClinicflowLiteActionId = "create-appointment-1" | "filter-2" | "move-to-triage-3" | "move-to-triage-4" | "move-to-triage-5" | "move-to-room-6" | "move-to-room-7" | "post-visit-8" | "patient-operations-1" | "queue-2" | "insights-3" | "settings-4";

export interface QueueAndStatusManagementClinicflowLiteProps {
  actions?: Partial<Record<QueueAndStatusManagementClinicflowLiteActionId, () => void>>;
  patients?: ClinicflowLitePatient[];
  queue?: ClinicflowLiteQueueItem[];
}

export function QueueAndStatusManagementClinicflowLite({ actions, patients = [], queue = [] }: QueueAndStatusManagementClinicflowLiteProps) {
  const patientById = useMemo(
    () => Object.fromEntries(patients.map((patient) => [patient.id, patient])),
    [patients],
  );
  const initialRecordStages = useMemo(
    () => Object.fromEntries(queue.map((item) => [item.patientId, item.stage])) as Record<string, ClinicflowLiteQueueItem["stage"]>,
    [queue],
  );
  const [recordStages, setRecordStages] = useState<Record<string, ClinicflowLiteQueueItem["stage"]>>(initialRecordStages);
  const [queueSearch, setQueueSearch] = useState("");
  const [queueUpdate, setQueueUpdate] = useState("Queue ready for status updates.");
  useEffect(() => {
    setRecordStages(initialRecordStages);
  }, [initialRecordStages]);
  const laneCounts = useMemo(
    () => ({
      waiting: Object.values(recordStages).filter((stage) => stage === "waiting").length,
      triage: Object.values(recordStages).filter((stage) => stage === "triage").length,
      room: Object.values(recordStages).filter((stage) => stage === "room").length,
      postVisit: Object.values(recordStages).filter((stage) => stage === "post-visit").length,
    }),
    [recordStages],
  );
  const recordsByStage = useMemo(
    () => ({
      waiting: Object.entries(recordStages).filter((entry) => entry[1] === "waiting").map(([patientId]) => patientById[patientId]).filter(Boolean),
      triage: Object.entries(recordStages).filter((entry) => entry[1] === "triage").map(([patientId]) => patientById[patientId]).filter(Boolean),
      room: Object.entries(recordStages).filter((entry) => entry[1] === "room").map(([patientId]) => patientById[patientId]).filter(Boolean),
    }),
    [patientById, recordStages],
  );
  const waitingPatients = recordsByStage.waiting;
  const triagePatients = recordsByStage.triage;
  const roomPatients = recordsByStage.room;
  const firstWaiting = waitingPatients[0] ?? patients[0];
  const secondWaiting = waitingPatients[1] ?? patients[1] ?? firstWaiting;
  const thirdWaiting = waitingPatients[2] ?? patients[2] ?? secondWaiting;
  const firstTriage = triagePatients[0] ?? patients.find((patient) => patient.priority === "Urgent") ?? patients[0];
  const secondTriage = triagePatients[1] ?? patients[1] ?? firstTriage;
  const firstRoom = roomPatients[0] ?? patients.find((patient) => patient.status.toLowerCase().includes("room")) ?? patients[0];
  const updateRecordStage = (
    recordId: string | undefined,
    stage: ClinicflowLiteQueueItem["stage"],
    message: string,
    actionId: QueueAndStatusManagementClinicflowLiteActionId,
  ) => {
    if (!recordId) {
      setQueueUpdate("No queue record is available for this status update.");
      return;
    }
    setRecordStages((current) => ({ ...current, [recordId]: stage }));
    setQueueUpdate(message);
    actions?.[actionId]?.();
  };

  return (
    <>
      {/* SideNavBar (Desktop) */}
      <nav className="hidden md:flex flex-col bg-surface-container-low dark:bg-surface-dim border-r border-outline-variant dark:border-outline fixed left-0 top-0 h-full w-64 p-md gap-sm z-20">
      <div className="mb-lg">
      <h1 className="font-headline-sm text-headline-sm font-bold text-primary dark:text-primary-fixed-dim">ClinicFlow Lite</h1>
      <p className="font-label-md text-label-md text-on-surface-variant">City Central Branch</p>
      </div>
      <button className="bg-primary text-on-primary font-label-md text-label-md py-sm px-md rounded-lg w-full flex items-center justify-center gap-sm mb-md hover:opacity-90 transition-opacity" type="button" data-action-id="create-appointment-1" onClick={actions?.["create-appointment-1"]}>
      <Plus  style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
                  Create Appointment
              </button>
      <ul className="flex flex-col gap-xs flex-1">
      <li className="rounded-lg text-on-surface-variant dark:text-outline-variant hover:bg-surface-container-high dark:hover:bg-surface-variant transition-colors cursor-pointer">
      <a className="flex items-center gap-sm px-md py-sm font-label-md text-label-md" href="#/patient-operations" data-action-id="patient-operations-1" onClick={actions?.["patient-operations-1"]}>
      <UserSearch aria-hidden={true} focusable="false" />
                          Patient Operations
                      </a>
      </li>
      <li className="bg-primary-container dark:bg-primary-container text-on-primary-container dark:text-on-primary-container font-semibold rounded-lg transition-colors cursor-pointer">
      <a className="flex items-center gap-sm px-md py-sm font-label-md text-label-md" href="#/queue" data-action-id="queue-2" onClick={actions?.["queue-2"]}>
      <ListOrdered  style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
                          Queue
                      </a>
      </li>
      <li className="rounded-lg text-on-surface-variant dark:text-outline-variant hover:bg-surface-container-high dark:hover:bg-surface-variant transition-colors cursor-pointer">
      <a className="flex items-center gap-sm px-md py-sm font-label-md text-label-md" href="#/insights" data-action-id="insights-3" onClick={actions?.["insights-3"]}>
      <BarChart3 aria-hidden={true} focusable="false" />
                          Insights
                      </a>
      </li>
      <li className="rounded-lg text-on-surface-variant dark:text-outline-variant hover:bg-surface-container-high dark:hover:bg-surface-variant transition-colors cursor-pointer mt-auto">
      <a className="flex items-center gap-sm px-md py-sm font-label-md text-label-md" href="#/settings" data-action-id="settings-4" onClick={actions?.["settings-4"]}>
      <Settings aria-hidden={true} focusable="false" />
                          Settings
                      </a>
      </li>
      </ul>
      <div className="mt-auto flex items-center gap-sm pt-md border-t border-outline-variant">
      <div className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center overflow-hidden">
      <User className="text-outline" aria-hidden={true} focusable="false" />
      </div>
      <div>
      <p className="font-label-sm text-label-sm text-on-surface">Clinic Administrator</p>
      </div>
      </div>
      </nav>
      {/* Main Content Area */}
      <main className="flex-1 flex flex-col md:ml-64 h-full relative">
      {/* TopNavBar (Mobile) */}
      <header className="md:hidden flex justify-between items-center w-full px-lg py-sm h-14 bg-surface border-b border-outline-variant z-20">
      <div className="flex items-center gap-sm">
      <Menu className="cursor-pointer text-on-surface" aria-hidden={true} focusable="false" />
      <h1 className="font-headline-sm text-headline-sm text-primary font-bold">ClinicFlow Lite</h1>
      </div>
      <div className="flex items-center gap-sm">
      <Bell className="cursor-pointer text-on-surface-variant" aria-hidden={true} focusable="false" />
      <CircleUserRound className="cursor-pointer text-on-surface-variant" aria-hidden={true} focusable="false" />
      </div>
      </header>
      {/* Page Header */}
      <div className="px-lg py-md bg-surface border-b border-outline-variant flex justify-between items-center z-10 shrink-0">
      <div>
      <h2 className="font-headline-md text-headline-md text-on-surface">Queue Management</h2>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-xs">Real-time patient flow and status.</p>
      <p className="font-label-sm text-label-sm text-primary mt-xs" aria-live="polite">{queueUpdate}</p>
      </div>
      <div className="flex gap-sm">
      <div className="flex items-center bg-surface-container-low rounded border border-outline-variant px-sm py-xs">
      <Search  style={{fontSize: "16px"}} className="text-outline mr-xs" aria-hidden={true} focusable="false" />
      <input className="bg-transparent border-none focus:ring-0 font-body-sm text-body-sm text-on-surface w-48 p-0" placeholder="Search patient..." type="text" value={queueSearch} onChange={(event) => {
      setQueueSearch(event.target.value);
      setQueueUpdate(event.target.value.trim() ? `Searching queue for ${event.target.value}.` : "Queue search cleared.");
      }} />
      </div>
      <button className="bg-surface-container-low border border-outline-variant text-on-surface font-label-md text-label-md py-xs px-sm rounded flex items-center gap-xs hover:bg-surface-container-highest transition-colors" type="button" data-action-id="filter-2" onClick={actions?.["filter-2"]}>
      <ListFilter  style={{fontSize: "16px"}} aria-hidden={true} focusable="false" />
                          Filter
                       </button>
      </div>
      </div>
      {/* Kanban Board Container */}
      <div className="flex-1 overflow-x-auto p-lg bg-background flex gap-gutter items-start">
      {/* Lane: Check-in */}
      <div className="kanban-column flex flex-col h-full bg-surface-container-lowest border border-outline-variant rounded flex-shrink-0">
      <div className="p-sm bg-surface-container-low border-b border-outline-variant flex justify-between items-center rounded-t">
      <h3 className="font-label-md text-label-md text-on-surface flex items-center gap-xs">
      <span className="w-2 h-2 rounded-full bg-outline"></span>
                              Check-in
                          </h3>
      <span className="bg-surface-variant text-on-surface-variant font-label-sm text-label-sm px-2 py-0.5 rounded-full">{laneCounts.waiting}</span>
      </div>
      <div className="p-sm flex flex-col gap-sm overflow-y-auto lane-scroll flex-1">
      {/* Card 1 */}
      <div className="bg-surface border border-outline-variant rounded p-sm hover:shadow-sm transition-shadow cursor-pointer flex flex-col gap-sm">
      <div className="flex justify-between items-start">
      <div>
      <p className="font-body-md text-body-md text-on-surface font-medium">{firstWaiting?.name ?? "No waiting patient"}</p>
      <p className="font-label-sm text-label-sm text-on-surface-variant">{firstWaiting ? `Last visit: ${firstWaiting.lastVisit}` : "Queue is clear"}</p>
      </div>
      <span className="bg-surface-variant text-on-surface-variant font-label-sm text-label-sm px-2 py-0.5 rounded">{firstWaiting?.appointmentTime ?? "--"}</span>
      </div>
      <div className="flex justify-between items-end">
      <div className="flex items-center gap-xs text-on-surface-variant font-label-sm text-label-sm">
      <Clock  style={{fontSize: "14px"}} aria-hidden={true} focusable="false" />
                                      Wait: {Math.max(5, laneCounts.waiting * 6)}m
                                  </div>
      <button className="text-primary font-label-sm text-label-sm border border-primary px-2 py-1 rounded hover:bg-primary-fixed hover:text-on-primary-fixed transition-colors" type="button" aria-label="Move to Triage" data-action-id="move-to-triage-3" onClick={() => updateRecordStage(firstWaiting?.id, "triage", `${firstWaiting?.name ?? "Patient"} moved to triage.`, "move-to-triage-3")}>
                                      Move to Triage
                                  </button>
      </div>
      </div>
      {/* Card 2 */}
      <div className="bg-surface border border-outline-variant rounded p-sm hover:shadow-sm transition-shadow cursor-pointer flex flex-col gap-sm border-l-2 border-l-error">
      <div className="flex justify-between items-start">
      <div>
      <p className="font-body-md text-body-md text-on-surface font-medium">{secondWaiting?.name ?? "No urgent patient"}</p>
      <p className="font-label-sm text-label-sm text-on-surface-variant">{secondWaiting ? `Priority: ${secondWaiting.priority}` : "No escalation"}</p>
      </div>
      <span className="bg-error-container text-on-error-container font-label-sm text-label-sm px-2 py-0.5 rounded flex items-center gap-xs">
      <TriangleAlert  style={{fontSize: "12px", fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
                                      Urgent
                                  </span>
      </div>
      <div className="flex justify-between items-end">
      <div className="flex items-center gap-xs text-error font-label-sm text-label-sm">
      <Clock  style={{fontSize: "14px"}} aria-hidden={true} focusable="false" />
                                      Wait: {Math.max(10, laneCounts.waiting * 11)}m
                                  </div>
      <button className="text-primary font-label-sm text-label-sm border border-primary px-2 py-1 rounded hover:bg-primary-fixed transition-colors" type="button" aria-label="Move to Triage" data-action-id="move-to-triage-4" onClick={() => updateRecordStage(secondWaiting?.id, "triage", `${secondWaiting?.name ?? "Patient"} moved to triage.`, "move-to-triage-4")}>
                                      Move to Triage
                                  </button>
      </div>
      </div>
      {/* Card 3 */}
      <div className="bg-surface border border-outline-variant rounded p-sm hover:shadow-sm transition-shadow cursor-pointer flex flex-col gap-sm">
      <div className="flex justify-between items-start">
      <div>
      <p className="font-body-md text-body-md text-on-surface font-medium">{thirdWaiting?.name ?? "No additional patient"}</p>
      <p className="font-label-sm text-label-sm text-on-surface-variant">{thirdWaiting ? `Status: ${thirdWaiting.status}` : "No record"}</p>
      </div>
      <span className="bg-surface-variant text-on-surface-variant font-label-sm text-label-sm px-2 py-0.5 rounded">{thirdWaiting?.appointmentTime ?? "--"}</span>
      </div>
      <div className="flex justify-between items-end">
      <div className="flex items-center gap-xs text-on-surface-variant font-label-sm text-label-sm">
      <Clock  style={{fontSize: "14px"}} aria-hidden={true} focusable="false" />
                                      Wait: {Math.max(3, laneCounts.waiting * 4)}m
                                  </div>
      <button className="text-primary font-label-sm text-label-sm border border-primary px-2 py-1 rounded hover:bg-primary-fixed transition-colors" type="button" aria-label="Move to Triage" data-action-id="move-to-triage-5" onClick={() => updateRecordStage(thirdWaiting?.id, "triage", `${thirdWaiting?.name ?? "Patient"} moved to triage.`, "move-to-triage-5")}>
                                      Move to Triage
                                  </button>
      </div>
      </div>
      </div>
      </div>
      {/* Lane: Triage */}
      <div className="kanban-column flex flex-col h-full bg-surface-container-lowest border border-outline-variant rounded flex-shrink-0">
      <div className="p-sm bg-surface-container-low border-b border-outline-variant flex justify-between items-center rounded-t">
      <h3 className="font-label-md text-label-md text-on-surface flex items-center gap-xs">
      <span className="w-2 h-2 rounded-full bg-tertiary-container"></span>
                              Triage
                          </h3>
      <span className="bg-surface-variant text-on-surface-variant font-label-sm text-label-sm px-2 py-0.5 rounded-full">{laneCounts.triage}</span>
      </div>
      <div className="p-sm flex flex-col gap-sm overflow-y-auto lane-scroll flex-1">
      {/* Card */}
      <div className="bg-surface border border-outline-variant rounded p-sm hover:shadow-sm transition-shadow cursor-pointer flex flex-col gap-sm">
      <div className="flex justify-between items-start">
      <div>
      <p className="font-body-md text-body-md text-on-surface font-medium">{firstTriage?.name ?? "No triage patient"}</p>
      <p className="font-label-sm text-label-sm text-on-surface-variant">{firstTriage ? firstTriage.status : "Vitals complete"}</p>
      </div>
      <span className="bg-surface-variant text-on-surface-variant font-label-sm text-label-sm px-2 py-0.5 rounded">{firstTriage?.appointmentTime ?? "--"}</span>
      </div>
      <div className="flex justify-between items-end">
      <div className="flex items-center gap-xs text-on-surface-variant font-label-sm text-label-sm">
      <HeartPulse  style={{fontSize: "14px"}} aria-hidden={true} focusable="false" />
                                      Nurse Joy
                                  </div>
      <button className="bg-primary text-on-primary font-label-sm text-label-sm px-2 py-1 rounded hover:opacity-90 transition-opacity" type="button" aria-label="Move to Room" data-action-id="move-to-room-6" onClick={() => updateRecordStage(firstTriage?.id, "room", `${firstTriage?.name ?? "Patient"} moved to room.`, "move-to-room-6")}>
                                      Move to Room
                                  </button>
      </div>
      </div>
      {/* Card */}
      <div className="bg-surface border border-outline-variant rounded p-sm hover:shadow-sm transition-shadow cursor-pointer flex flex-col gap-sm">
      <div className="flex justify-between items-start">
      <div>
      <p className="font-body-md text-body-md text-on-surface font-medium">{secondTriage?.name ?? "No secondary triage"}</p>
      <p className="font-label-sm text-label-sm text-on-surface-variant">{secondTriage ? `Priority: ${secondTriage.priority}` : "No record"}</p>
      </div>
      <span className="bg-surface-variant text-on-surface-variant font-label-sm text-label-sm px-2 py-0.5 rounded">{secondTriage?.appointmentTime ?? "--"}</span>
      </div>
      <div className="flex justify-between items-end">
      <div className="flex items-center gap-xs text-on-surface-variant font-label-sm text-label-sm">
      <HeartPulse  style={{fontSize: "14px"}} aria-hidden={true} focusable="false" />
                                      Nurse Sam
                                  </div>
      <button className="bg-primary text-on-primary font-label-sm text-label-sm px-2 py-1 rounded hover:opacity-90 transition-opacity" type="button" aria-label="Move to Room" data-action-id="move-to-room-7" onClick={() => updateRecordStage(secondTriage?.id, "room", `${secondTriage?.name ?? "Patient"} moved to room.`, "move-to-room-7")}>
                                      Move to Room
                                  </button>
      </div>
      </div>
      </div>
      </div>
      {/* Lane: In-Room */}
      <div className="kanban-column flex flex-col h-full bg-surface-container-lowest border border-outline-variant rounded flex-shrink-0">
      <div className="p-sm bg-surface-container-low border-b border-outline-variant flex justify-between items-center rounded-t">
      <h3 className="font-label-md text-label-md text-on-surface flex items-center gap-xs">
      <span className="w-2 h-2 rounded-full bg-primary"></span>
                              In-Room
                          </h3>
      <span className="bg-surface-variant text-on-surface-variant font-label-sm text-label-sm px-2 py-0.5 rounded-full">{laneCounts.room}</span>
      </div>
      <div className="p-sm flex flex-col gap-sm overflow-y-auto lane-scroll flex-1">
      {/* Card */}
      <div className="bg-surface border border-outline-variant rounded p-sm hover:shadow-sm transition-shadow cursor-pointer flex flex-col gap-sm border-l-2 border-l-primary">
      <div className="flex justify-between items-start">
      <div>
      <p className="font-body-md text-body-md text-on-surface font-medium">{firstRoom?.name ?? "No room patient"}</p>
      <p className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-xs mt-xs">
      <DoorOpen  style={{fontSize: "14px"}} aria-hidden={true} focusable="false" /> Room 3
                                      </p>
      </div>
      <span className="bg-primary-container text-on-primary-container font-label-sm text-label-sm px-2 py-0.5 rounded">{firstRoom?.priority ?? "Routine"}</span>
      </div>
      <div className="flex justify-between items-end mt-xs">
      <div className="flex items-center gap-xs text-on-surface-variant font-label-sm text-label-sm">
      <Clock  style={{fontSize: "14px"}} aria-hidden={true} focusable="false" />
                                      In Session: 18m
                                  </div>
      <button className="text-primary font-label-sm text-label-sm border border-primary px-2 py-1 rounded hover:bg-primary-fixed transition-colors" type="button" aria-label="Post-Visit" data-action-id="post-visit-8" onClick={() => updateRecordStage(firstRoom?.id, "post-visit", `${firstRoom?.name ?? "Patient"} moved to post-visit.`, "post-visit-8")}>
                                      Post-Visit
                                  </button>
      </div>
      </div>
      </div>
      </div>
      {/* Lane: Post-Visit */}
      <div className="kanban-column flex flex-col h-full bg-surface-container-lowest border border-outline-variant rounded flex-shrink-0">
      <div className="p-sm bg-surface-container-low border-b border-outline-variant flex justify-between items-center rounded-t">
      <h3 className="font-label-md text-label-md text-on-surface flex items-center gap-xs">
      <span className="w-2 h-2 rounded-full bg-secondary"></span>
                              Post-Visit
                          </h3>
      <span className="bg-surface-variant text-on-surface-variant font-label-sm text-label-sm px-2 py-0.5 rounded-full">{laneCounts.postVisit}</span>
      </div>
      <div className="p-sm flex flex-col gap-sm overflow-y-auto lane-scroll flex-1 items-center justify-center text-center">
      <CheckCircle2  style={{fontSize: "32px"}} className="text-outline-variant" aria-hidden={true} focusable="false" />
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-sm">{laneCounts.postVisit === 0 ? "No patients awaiting discharge." : `${laneCounts.postVisit} patient${laneCounts.postVisit === 1 ? "" : "s"} awaiting discharge.`}</p>
      </div>
      </div>
      </div>
      </main>
    </>
  );
}
