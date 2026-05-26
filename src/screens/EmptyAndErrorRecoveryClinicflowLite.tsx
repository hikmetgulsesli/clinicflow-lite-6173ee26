// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Empty and Error Recovery - ClinicFlow Lite
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { BarChart3, CloudOff, ListOrdered, Plus, RefreshCw, SearchX, Settings, UserPlus, UserSearch } from "lucide-react";


export type EmptyAndErrorRecoveryClinicflowLiteActionId = "create-appointment-1" | "empty-state-2" | "error-state-3" | "clear-filters-4" | "create-patient-5" | "retry-connection-6" | "patient-operations-1" | "queue-2" | "insights-3" | "settings-4";

export interface EmptyAndErrorRecoveryClinicflowLiteProps {
  actions?: Partial<Record<EmptyAndErrorRecoveryClinicflowLiteActionId, () => void>>;
}

export function EmptyAndErrorRecoveryClinicflowLite({ actions }: EmptyAndErrorRecoveryClinicflowLiteProps) {
  return (
    <>
      {/* SideNavBar (Shared Component) */}
      <nav className="fixed left-0 top-0 h-full flex flex-col p-md gap-sm bg-surface-container-low dark:bg-surface-dim border-r border-outline-variant dark:border-outline docked left-0 h-full w-64 z-50">
      <div className="mb-xl">
      <h1 className="font-headline-sm text-headline-sm font-bold text-primary dark:text-primary-fixed-dim">ClinicFlow Lite</h1>
      <p className="font-body-sm text-body-sm text-on-surface-variant">City Central Branch</p>
      </div>
      <ul className="flex flex-col gap-xs flex-grow">
      {/* Patient Operations (Active for this context) */}
      <li>
      <a className="flex items-center gap-sm px-sm py-sm bg-primary-container dark:bg-primary-container text-on-primary-container dark:text-on-primary-container font-semibold rounded-lg" href="#" data-action-id="patient-operations-1" onClick={actions?.["patient-operations-1"]}>
      <UserSearch aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Patient Operations</span>
      </a>
      </li>
      <li>
      <a className="flex items-center gap-sm px-sm py-sm text-on-surface-variant dark:text-outline-variant hover:bg-surface-container-high dark:hover:bg-surface-variant transition-colors rounded-lg" href="#" data-action-id="queue-2" onClick={actions?.["queue-2"]}>
      <ListOrdered aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Queue</span>
      </a>
      </li>
      <li>
      <a className="flex items-center gap-sm px-sm py-sm text-on-surface-variant dark:text-outline-variant hover:bg-surface-container-high dark:hover:bg-surface-variant transition-colors rounded-lg" href="#" data-action-id="insights-3" onClick={actions?.["insights-3"]}>
      <BarChart3 aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Insights</span>
      </a>
      </li>
      <li>
      <a className="flex items-center gap-sm px-sm py-sm text-on-surface-variant dark:text-outline-variant hover:bg-surface-container-high dark:hover:bg-surface-variant transition-colors rounded-lg" href="#" data-action-id="settings-4" onClick={actions?.["settings-4"]}>
      <Settings aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Settings</span>
      </a>
      </li>
      </ul>
      <div className="mt-auto">
      <button className="w-full flex justify-center items-center gap-sm bg-primary text-on-primary px-md py-sm rounded font-label-md text-label-md hover:opacity-90 transition-opacity" type="button" data-action-id="create-appointment-1" onClick={actions?.["create-appointment-1"]}>
      <Plus className="text-[18px]" aria-hidden={true} focusable="false" />
                      Create Appointment
                  </button>
      </div>
      </nav>
      {/* Main Content Area */}
      <main className="ml-64 flex-1 p-xl">
      <header className="mb-xl flex justify-between items-center">
      <h2 className="font-headline-lg text-headline-lg text-on-surface">Patient Records</h2>
      {/* State Toggle for Demonstration */}
      <div className="flex bg-surface-container rounded-lg p-1 border border-outline-variant">
      <button className="px-md py-xs rounded bg-surface text-on-surface shadow-sm font-label-md text-label-md" id="btn-empty" type="button" data-action-id="empty-state-2" onClick={actions?.["empty-state-2"]}>Empty State</button>
      <button className="px-md py-xs rounded text-on-surface-variant hover:text-on-surface font-label-md text-label-md" id="btn-error" type="button" data-action-id="error-state-3" onClick={actions?.["error-state-3"]}>Error State</button>
      </div>
      </header>
      {/* Empty State Section */}
      <section className="h-[calc(100vh-160px)] flex flex-col items-center justify-center bg-surface-container-lowest border border-outline-variant rounded-lg" id="state-empty">
      <div className="flex flex-col items-center text-center max-w-md">
      <div className="w-24 h-24 mb-md rounded-full bg-surface-container flex items-center justify-center">
      <SearchX  style={{fontVariationSettings: "'wght' 300"}} className="text-[48px] text-outline" aria-hidden={true} focusable="false" />
      </div>
      <h3 className="font-headline-md text-headline-md text-on-surface mb-xs">No Patients Found</h3>
      <p className="font-body-md text-body-md text-on-surface-variant mb-lg">We couldn't find any patient records matching your current filter criteria. Try adjusting your filters or add a new patient.</p>
      <div className="flex gap-md">
      <button className="px-md py-sm bg-transparent border border-primary text-primary font-label-md text-label-md rounded hover:bg-primary-container hover:text-on-primary-container transition-colors" type="button" data-action-id="clear-filters-4" onClick={actions?.["clear-filters-4"]}>
                              Clear Filters
                          </button>
      <button className="px-md py-sm bg-primary text-on-primary font-label-md text-label-md rounded hover:opacity-90 transition-opacity flex items-center gap-xs" type="button" data-action-id="create-patient-5" onClick={actions?.["create-patient-5"]}>
      <UserPlus className="text-[16px]" aria-hidden={true} focusable="false" />
                              Create Patient
                          </button>
      </div>
      </div>
      </section>
      {/* Error State Section (Hidden by default) */}
      <section className="h-[calc(100vh-160px)] hidden flex-col items-center justify-center bg-surface-container-lowest border border-error-container rounded-lg relative overflow-hidden" id="state-error">
      {/* Subtle error pattern background */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-error to-transparent"></div>
      <div className="flex flex-col items-center text-center max-w-md relative z-10">
      <div className="w-24 h-24 mb-md rounded-full bg-error-container flex items-center justify-center">
      <CloudOff  style={{fontVariationSettings: "'wght' 300"}} className="text-[48px] text-error" aria-hidden={true} focusable="false" />
      </div>
      <h3 className="font-headline-md text-headline-md text-on-surface mb-xs">Connection Error</h3>
      <p className="font-body-md text-body-md text-on-surface-variant mb-lg">Unable to load patient data from the central server. Please check your network connection and try again.</p>
      <div className="bg-surface-container-low border border-outline-variant rounded p-sm w-full mb-lg text-left">
      <p className="font-data-mono text-data-mono text-xs text-outline font-mono">ERR_TIMEOUT: 504 Gateway Timeout</p>
      </div>
      <button className="px-lg py-sm bg-primary text-on-primary font-label-md text-label-md rounded hover:opacity-90 transition-opacity flex items-center gap-xs" type="button" data-action-id="retry-connection-6" onClick={actions?.["retry-connection-6"]}>
      <RefreshCw className="text-[16px]" aria-hidden={true} focusable="false" />
                          Retry Connection
                      </button>
      </div>
      </section>
      </main>
      
    </>
  );
}
