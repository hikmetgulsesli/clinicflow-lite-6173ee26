// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Settings and Preferences - ClinicFlow Lite
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { BarChart3, Bell, CircleUserRound, Info, ListOrdered, Settings, UserSearch } from "lucide-react";


export type SettingsAndPreferencesClinicflowLiteActionId = "notifications-1" | "account-circle-2" | "create-appointment-3" | "reset-to-defaults-4" | "save-preferences-5" | "workflow-6" | "notifications-7" | "display-8" | "save-preferences-9" | "reset-to-defaults-10" | "patient-operations-1" | "queue-2" | "insights-3" | "settings-4";

export interface SettingsAndPreferencesClinicflowLiteProps {
  actions?: Partial<Record<SettingsAndPreferencesClinicflowLiteActionId, () => void>>;
}

export function SettingsAndPreferencesClinicflowLite({ actions }: SettingsAndPreferencesClinicflowLiteProps) {
  return (
    <>
      {/* Mobile TopNav (Visible only on mobile) */}
      <header className="md:hidden flex justify-between items-center w-full px-lg py-sm h-14 bg-surface dark:bg-on-surface border-b border-outline-variant dark:border-outline">
      <div className="flex items-center gap-sm">
      <span className="font-headline-sm text-headline-sm text-primary dark:text-primary-fixed-dim font-bold">ClinicFlow Lite</span>
      </div>
      <div className="flex items-center gap-sm">
      <button className="p-2 rounded-full hover:bg-surface-container-low dark:hover:bg-surface-variant transition-colors text-on-surface-variant dark:text-outline-variant cursor-pointer active:opacity-80" type="button" aria-label="Notifications" data-action-id="notifications-1" onClick={actions?.["notifications-1"]}>
      <Bell aria-hidden={true} focusable="false" />
      </button>
      <button className="p-2 rounded-full hover:bg-surface-container-low dark:hover:bg-surface-variant transition-colors text-on-surface-variant dark:text-outline-variant cursor-pointer active:opacity-80" type="button" aria-label="Account Circle" data-action-id="account-circle-2" onClick={actions?.["account-circle-2"]}>
      <CircleUserRound aria-hidden={true} focusable="false" />
      </button>
      </div>
      </header>
      {/* Desktop SideNavBar (Hidden on mobile) */}
      <nav className="hidden md:flex fixed left-0 top-0 h-full flex-col p-md gap-sm bg-surface-container-low dark:bg-surface-dim border-r border-outline-variant dark:border-outline docked h-full w-64 z-10">
      <div className="mb-lg px-sm">
      <h1 className="font-headline-sm text-headline-sm font-bold text-primary dark:text-primary-fixed-dim">ClinicFlow Lite</h1>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-xs">City Central Branch</p>
      </div>
      <div className="flex flex-col gap-xs flex-grow">
      <a className="flex items-center gap-md px-sm py-sm rounded-lg text-on-surface-variant dark:text-outline-variant hover:bg-surface-container-high dark:hover:bg-surface-variant transition-colors cursor-pointer active:scale-95 font-label-md text-label-md" href="#" data-action-id="patient-operations-1" onClick={actions?.["patient-operations-1"]}>
      <UserSearch aria-hidden={true} focusable="false" />
                      Patient Operations
                  </a>
      <a className="flex items-center gap-md px-sm py-sm rounded-lg text-on-surface-variant dark:text-outline-variant hover:bg-surface-container-high dark:hover:bg-surface-variant transition-colors cursor-pointer active:scale-95 font-label-md text-label-md" href="#" data-action-id="queue-2" onClick={actions?.["queue-2"]}>
      <ListOrdered aria-hidden={true} focusable="false" />
                      Queue
                  </a>
      <a className="flex items-center gap-md px-sm py-sm rounded-lg text-on-surface-variant dark:text-outline-variant hover:bg-surface-container-high dark:hover:bg-surface-variant transition-colors cursor-pointer active:scale-95 font-label-md text-label-md" href="#" data-action-id="insights-3" onClick={actions?.["insights-3"]}>
      <BarChart3 aria-hidden={true} focusable="false" />
                      Insights
                  </a>
      <a className="flex items-center gap-md px-sm py-sm bg-primary-container dark:bg-primary-container text-on-primary-container dark:text-on-primary-container font-semibold rounded-lg transition-colors cursor-pointer active:scale-95 font-label-md text-label-md" href="#" data-action-id="settings-4" onClick={actions?.["settings-4"]}>
      <Settings className="icon-filled" aria-hidden={true} focusable="false" />
                      Settings
                  </a>
      </div>
      <div className="mt-auto">
      <button className="w-full bg-primary text-on-primary rounded-DEFAULT py-sm px-md font-label-md text-label-md hover:opacity-90 transition-opacity" type="button" data-action-id="create-appointment-3" onClick={actions?.["create-appointment-3"]}>
                      Create Appointment
                  </button>
      </div>
      </nav>
      {/* Main Content Canvas */}
      <main className="flex-grow md:ml-64 p-margin md:p-lg lg:p-xl flex flex-col gap-lg bg-background">
      <header className="border-b border-outline-variant pb-md flex justify-between items-end">
      <div>
      <h2 className="font-headline-lg text-headline-lg text-on-surface">Settings &amp; Preferences</h2>
      <p className="font-body-md text-body-md text-on-surface-variant mt-xs">Manage your workspace configuration and notification thresholds.</p>
      </div>
      <div className="hidden sm:flex gap-sm">
      <button className="px-md py-sm rounded-DEFAULT border border-primary text-primary font-label-md text-label-md hover:bg-surface-container transition-colors" type="button" data-action-id="reset-to-defaults-4" onClick={actions?.["reset-to-defaults-4"]}>
                          Reset to Defaults
                      </button>
      <button className="px-md py-sm rounded-DEFAULT bg-primary text-on-primary font-label-md text-label-md hover:bg-primary/90 transition-colors" type="button" data-action-id="save-preferences-5" onClick={actions?.["save-preferences-5"]}>
                          Save Preferences
                      </button>
      </div>
      </header>
      <div className="flex flex-col lg:flex-row gap-lg">
      {/* Vertical Tabs */}
      <aside className="w-full lg:w-48 shrink-0">
      <nav className="flex flex-row lg:flex-col gap-xs overflow-x-auto lg:overflow-visible pb-sm lg:pb-0 hide-scrollbar border-b lg:border-b-0 border-outline-variant mb-md lg:mb-0">
      <button className="whitespace-nowrap px-md py-sm text-left font-label-md text-label-md bg-surface-container-low text-primary border-l-2 lg:border-l-4 border-primary rounded-r-DEFAULT lg:rounded-none lg:rounded-r-DEFAULT bg-primary-container/10" type="button" data-action-id="workflow-6" onClick={actions?.["workflow-6"]}>
                              Workflow
                          </button>
      <button className="whitespace-nowrap px-md py-sm text-left font-label-md text-label-md text-on-surface-variant hover:bg-surface-container-lowest transition-colors border-l-2 lg:border-l-4 border-transparent hover:border-outline-variant lg:rounded-r-DEFAULT" type="button" data-action-id="notifications-7" onClick={actions?.["notifications-7"]}>
                              Notifications
                          </button>
      <button className="whitespace-nowrap px-md py-sm text-left font-label-md text-label-md text-on-surface-variant hover:bg-surface-container-lowest transition-colors border-l-2 lg:border-l-4 border-transparent hover:border-outline-variant lg:rounded-r-DEFAULT" type="button" data-action-id="display-8" onClick={actions?.["display-8"]}>
                              Display
                          </button>
      </nav>
      </aside>
      {/* Settings Form Area */}
      <div className="flex-grow flex flex-col gap-lg max-w-3xl">
      {/* Section: Dashboard Configuration */}
      <section className="bg-surface border border-outline-variant rounded-DEFAULT p-md lg:p-lg">
      <h3 className="font-headline-md text-headline-md text-on-surface mb-md">Dashboard Configuration</h3>
      <div className="flex flex-col gap-md">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-gutter">
      <div className="flex flex-col gap-xs">
      <label className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider" htmlFor="density">Information Density</label>
      <select className="w-full border border-outline-variant rounded-DEFAULT px-sm py-sm font-body-md text-body-md bg-surface text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none" id="density">
      <option value="compact">Compact (High Density)</option>
      <option selected={true} value="standard">Standard</option>
      <option value="comfortable">Comfortable</option>
      </select>
      </div>
      <div className="flex flex-col gap-xs">
      <label className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider" htmlFor="refresh_rate">Data Refresh Rate</label>
      <select className="w-full border border-outline-variant rounded-DEFAULT px-sm py-sm font-body-md text-body-md bg-surface text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none" id="refresh_rate">
      <option value="realtime">Real-time (WebSocket)</option>
      <option selected={true} value="30s">Every 30 seconds</option>
      <option value="60s">Every 60 seconds</option>
      </select>
      </div>
      </div>
      <div className="mt-sm">
      <label className="flex items-center gap-sm cursor-pointer group">
      <input defaultChecked={true} className="form-checkbox h-4 w-4 text-primary border-outline-variant rounded-sm focus:ring-primary focus:ring-offset-0 bg-surface" type="checkbox" />
      <span className="font-body-md text-body-md text-on-surface group-hover:text-primary transition-colors">Show critical alerts persistently across all tabs</span>
      </label>
      </div>
      </div>
      </section>
      {/* Section: Operational Defaults */}
      <section className="bg-surface border border-outline-variant rounded-DEFAULT p-md lg:p-lg">
      <h3 className="font-headline-md text-headline-md text-on-surface mb-md">Operational Defaults</h3>
      <div className="flex flex-col gap-md">
      <div className="flex flex-col gap-xs">
      <label className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider" htmlFor="default_room">Default Room Assignment</label>
      <div className="flex gap-sm items-center">
      <select className="w-full sm:w-1/2 border border-outline-variant rounded-DEFAULT px-sm py-sm font-body-md text-body-md bg-surface text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none" id="default_room">
      <option selected={true} value="auto">Auto-assign (Next Available)</option>
      <option value="triage">Triage Room 1</option>
      <option value="exam_a">Exam Room A</option>
      <option value="exam_b">Exam Room B</option>
      </select>
      <span className="text-on-surface-variant text-label-sm ml-sm flex items-center gap-xs"><Info className="text-[16px]" aria-hidden={true} focusable="false" /> Used for walk-in patients</span>
      </div>
      </div>
      <div className="border-t border-outline-variant my-sm"></div>
      <div>
      <h4 className="font-label-md text-label-md text-on-surface mb-sm">Wait Time Alert Thresholds</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-lg mt-xs">
      <div>
      <label className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-xs block">Warning Threshold (mins)</label>
      <div className="flex items-center gap-sm">
      <input className="w-24 border border-outline-variant rounded-DEFAULT px-sm py-sm font-data-mono text-data-mono bg-surface text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none" type="number" defaultValue="15" />
      <div className="w-full h-2 bg-surface-container rounded-full overflow-hidden flex">
      <div className="bg-secondary h-full" style={{width: "25%"}}></div>
      </div>
      </div>
      </div>
      <div>
      <label className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-xs block">Urgent Threshold (mins)</label>
      <div className="flex items-center gap-sm">
      <input className="w-24 border border-outline-variant rounded-DEFAULT px-sm py-sm font-data-mono text-data-mono bg-surface text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none" type="number" defaultValue="30" />
      <div className="w-full h-2 bg-surface-container rounded-full overflow-hidden flex">
      <div className="bg-secondary h-full" style={{width: "25%"}}></div>
      <div className="bg-error h-full" style={{width: "25%"}}></div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      </div>
      </div>
      {/* Mobile Action Buttons */}
      <div className="sm:hidden flex flex-col gap-sm mt-lg">
      <button className="w-full px-md py-sm rounded-DEFAULT bg-primary text-on-primary font-label-md text-label-md hover:bg-primary/90 transition-colors" type="button" data-action-id="save-preferences-9" onClick={actions?.["save-preferences-9"]}>
                      Save Preferences
                  </button>
      <button className="w-full px-md py-sm rounded-DEFAULT border border-primary text-primary font-label-md text-label-md hover:bg-surface-container transition-colors" type="button" data-action-id="reset-to-defaults-10" onClick={actions?.["reset-to-defaults-10"]}>
                      Reset to Defaults
                  </button>
      </div>
      </main>
    </>
  );
}
