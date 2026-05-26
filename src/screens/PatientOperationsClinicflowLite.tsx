// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Patient Operations - ClinicFlow Lite
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Armchair, BarChart3, ChevronLeft, ChevronRight, EllipsisVertical, HeartPulse, Hospital, ListOrdered, Plus, Search, Settings, TriangleAlert, User, UserPlus, UserSearch } from "lucide-react";


export type PatientOperationsClinicflowLiteActionId = "create-appointment-1" | "add-patient-2" | "more-vert-3" | "more-vert-4" | "more-vert-5" | "more-vert-6" | "chevron-left-7" | "chevron-right-8" | "patient-operations-1" | "queue-2" | "insights-3" | "settings-4";

export interface PatientOperationsClinicflowLiteProps {
  actions?: Partial<Record<PatientOperationsClinicflowLiteActionId, () => void>>;
}

export function PatientOperationsClinicflowLite({ actions }: PatientOperationsClinicflowLiteProps) {
  return (
    <>
      {/* SideNavBar (Shared Component JSON) */}
      <nav className="hidden md:flex fixed left-0 top-0 h-full w-64 flex-col p-md gap-sm border-r border-outline-variant bg-surface-container-low z-20">
      {/* Header / Brand */}
      <div className="flex items-center gap-sm mb-lg px-sm">
      <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container">
      <Hospital className="text-[20px]" aria-hidden={true} focusable="false" />
      </div>
      <div>
      <h1 className="font-headline-sm text-headline-sm font-bold text-primary">ClinicFlow Lite</h1>
      <p className="font-label-sm text-label-sm text-on-surface-variant">City Central Branch</p>
      </div>
      </div>
      {/* Navigation Links */}
      <div className="flex flex-col gap-xs flex-1">
      {/* Active Tab: Patient Operations */}
      <a className="flex items-center gap-md px-md py-sm bg-primary-container text-on-primary-container font-semibold rounded-lg scale-95 active:scale-90 transition-transform" href="#" data-action-id="patient-operations-1" onClick={actions?.["patient-operations-1"]}>
      <UserSearch className="icon-fill" aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Patient Operations</span>
      </a>
      {/* Inactive Tabs */}
      <a className="flex items-center gap-md px-md py-sm text-on-surface-variant hover:bg-surface-container-high transition-colors scale-95 active:scale-90 rounded-lg" href="#" data-action-id="queue-2" onClick={actions?.["queue-2"]}>
      <ListOrdered aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Queue</span>
      </a>
      <a className="flex items-center gap-md px-md py-sm text-on-surface-variant hover:bg-surface-container-high transition-colors scale-95 active:scale-90 rounded-lg" href="#" data-action-id="insights-3" onClick={actions?.["insights-3"]}>
      <BarChart3 aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Insights</span>
      </a>
      <a className="flex items-center gap-md px-md py-sm text-on-surface-variant hover:bg-surface-container-high transition-colors scale-95 active:scale-90 rounded-lg" href="#" data-action-id="settings-4" onClick={actions?.["settings-4"]}>
      <Settings aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Settings</span>
      </a>
      </div>
      {/* CTA / Footer Profile */}
      <div className="mt-auto flex flex-col gap-sm">
      <button className="w-full bg-primary text-on-primary font-label-md text-label-md py-sm px-md rounded flex items-center justify-center gap-xs hover:bg-surface-tint transition-colors" type="button" data-action-id="create-appointment-1" onClick={actions?.["create-appointment-1"]}>
      <Plus className="text-[18px]" aria-hidden={true} focusable="false" />
                      Create Appointment
                  </button>
      <div className="flex items-center gap-sm mt-sm pt-sm border-t border-outline-variant px-sm">
      <div className="w-8 h-8 rounded-full bg-surface-variant flex items-center justify-center">
      <User className="text-[18px] text-on-surface-variant" aria-hidden={true} focusable="false" />
      </div>
      <div className="flex-1 overflow-hidden">
      <p className="font-label-sm text-label-sm text-on-surface truncate">Clinic Administrator</p>
      </div>
      </div>
      </div>
      </nav>
      {/* Main Content Canvas */}
      <main className="flex-1 flex flex-col ml-0 md:ml-64 h-full bg-background overflow-y-auto">
      {/* Header Section */}
      <header className="px-lg py-md flex flex-col sm:flex-row justify-between items-start sm:items-center gap-md bg-surface border-b border-outline-variant sticky top-0 z-10">
      <div>
      <h2 className="font-headline-lg text-headline-lg text-on-surface">Patient Operations</h2>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Manage active flow and triage</p>
      </div>
      <div className="flex items-center gap-sm w-full sm:w-auto">
      {/* Search Input */}
      <div className="relative w-full sm:w-64">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[18px]" aria-hidden={true} focusable="false" />
      <input className="w-full pl-9 pr-3 py-2 bg-surface-container-lowest border border-outline-variant rounded font-body-sm text-body-sm text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" placeholder="Search patients..." type="text" />
      </div>
      {/* Primary Action */}
      <button className="bg-primary text-on-primary font-label-md text-label-md py-2 px-4 rounded whitespace-nowrap hover:bg-surface-tint transition-colors flex items-center gap-xs" type="button" data-action-id="add-patient-2" onClick={actions?.["add-patient-2"]}>
      <UserPlus className="text-[18px]" aria-hidden={true} focusable="false" />
                          Add Patient
                      </button>
      </div>
      </header>
      <div className="p-lg flex flex-col gap-lg max-w-7xl mx-auto w-full">
      {/* Summary Metrics Cards (Low-Profile) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
      {/* Metric 1: Waiting */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-md flex items-center justify-between">
      <div>
      <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Waiting Room</p>
      <p className="font-headline-lg text-headline-lg text-on-surface mt-1">12</p>
      </div>
      <div className="w-10 h-10 rounded bg-surface-container-low flex items-center justify-center">
      <Armchair className="text-outline" aria-hidden={true} focusable="false" />
      </div>
      </div>
      {/* Metric 2: In Progress */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-md flex items-center justify-between">
      <div>
      <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">In Progress</p>
      <p className="font-headline-lg text-headline-lg text-on-surface mt-1">8</p>
      </div>
      <div className="w-10 h-10 rounded bg-primary-container flex items-center justify-center">
      <HeartPulse className="text-on-primary-container" aria-hidden={true} focusable="false" />
      </div>
      </div>
      {/* Metric 3: Urgent */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-md flex items-center justify-between border-l-4 border-l-error">
      <div>
      <p className="font-label-sm text-label-sm text-error uppercase tracking-wider">Urgent Triage</p>
      <p className="font-headline-lg text-headline-lg text-error mt-1">2</p>
      </div>
      <div className="w-10 h-10 rounded bg-error-container flex items-center justify-center">
      <TriangleAlert className="text-on-error-container icon-fill" aria-hidden={true} focusable="false" />
      </div>
      </div>
      </div>
      {/* Dense Data Table */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-lg flex flex-col overflow-hidden">
      <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
      <thead className="bg-surface-container-low border-b border-outline-variant">
      <tr>
      <th className="font-label-md text-label-md text-on-surface-variant py-sm px-md w-1/4">Patient Name</th>
      <th className="font-label-md text-label-md text-on-surface-variant py-sm px-md w-1/6">Status</th>
      <th className="font-label-md text-label-md text-on-surface-variant py-sm px-md w-1/6">Location</th>
      <th className="font-label-md text-label-md text-on-surface-variant py-sm px-md w-1/4">Next Action</th>
      <th className="font-label-md text-label-md text-on-surface-variant py-sm px-md w-12 text-center">More</th>
      </tr>
      </thead>
      <tbody className="divide-y divide-outline-variant">
      {/* Row 1: Urgent */}
      <tr className="hover:bg-surface transition-colors h-[40px]">
      <td className="px-md py-xs font-data-mono text-data-mono text-on-surface font-semibold">Doe, Jonathan</td>
      <td className="px-md py-xs">
      <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm">Urgent</span>
      </td>
      <td className="px-md py-xs font-body-sm text-body-sm text-on-surface-variant">Triage Bay 1</td>
      <td className="px-md py-xs font-body-sm text-body-sm text-on-surface">Physician Consult Required</td>
      <td className="px-md py-xs text-center">
      <button className="text-outline hover:text-on-surface transition-colors" type="button" aria-label="More Vert" data-action-id="more-vert-3" onClick={actions?.["more-vert-3"]}><EllipsisVertical className="text-[18px]" aria-hidden={true} focusable="false" /></button>
      </td>
      </tr>
      {/* Row 2: Ready */}
      <tr className="hover:bg-surface transition-colors h-[40px]">
      <td className="px-md py-xs font-data-mono text-data-mono text-on-surface font-semibold">Smith, Sarah</td>
      <td className="px-md py-xs">
      <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm">Ready</span>
      </td>
      <td className="px-md py-xs font-body-sm text-body-sm text-on-surface-variant">Exam Room A</td>
      <td className="px-md py-xs font-body-sm text-body-sm text-on-surface">Vitals Complete, Await MD</td>
      <td className="px-md py-xs text-center">
      <button className="text-outline hover:text-on-surface transition-colors" type="button" aria-label="More Vert" data-action-id="more-vert-4" onClick={actions?.["more-vert-4"]}><EllipsisVertical className="text-[18px]" aria-hidden={true} focusable="false" /></button>
      </td>
      </tr>
      {/* Row 3: Pending */}
      <tr className="hover:bg-surface transition-colors h-[40px]">
      <td className="px-md py-xs font-data-mono text-data-mono text-on-surface font-semibold">Alvarez, Maria</td>
      <td className="px-md py-xs">
      <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-surface-variant text-on-surface-variant font-label-sm text-label-sm">Waiting</span>
      </td>
      <td className="px-md py-xs font-body-sm text-body-sm text-on-surface-variant">Main Lobby</td>
      <td className="px-md py-xs font-body-sm text-body-sm text-on-surface">Intake Forms Pending</td>
      <td className="px-md py-xs text-center">
      <button className="text-outline hover:text-on-surface transition-colors" type="button" aria-label="More Vert" data-action-id="more-vert-5" onClick={actions?.["more-vert-5"]}><EllipsisVertical className="text-[18px]" aria-hidden={true} focusable="false" /></button>
      </td>
      </tr>
      {/* Row 4: Ready */}
      <tr className="hover:bg-surface transition-colors h-[40px]">
      <td className="px-md py-xs font-data-mono text-data-mono text-on-surface font-semibold">Chen, Wei</td>
      <td className="px-md py-xs">
      <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm">Ready</span>
      </td>
      <td className="px-md py-xs font-body-sm text-body-sm text-on-surface-variant">Lab Area</td>
      <td className="px-md py-xs font-body-sm text-body-sm text-on-surface">Blood Draw Ordered</td>
      <td className="px-md py-xs text-center">
      <button className="text-outline hover:text-on-surface transition-colors" type="button" aria-label="More Vert" data-action-id="more-vert-6" onClick={actions?.["more-vert-6"]}><EllipsisVertical className="text-[18px]" aria-hidden={true} focusable="false" /></button>
      </td>
      </tr>
      {/* Skeleton Loading State (Hint) */}
      <tr className="animate-pulse h-[40px] opacity-60">
      <td className="px-md py-xs">
      <div className="h-4 bg-surface-variant rounded w-32"></div>
      </td>
      <td className="px-md py-xs">
      <div className="h-5 bg-surface-variant rounded-full w-16"></div>
      </td>
      <td className="px-md py-xs">
      <div className="h-4 bg-surface-variant rounded w-24"></div>
      </td>
      <td className="px-md py-xs">
      <div className="h-4 bg-surface-variant rounded w-48"></div>
      </td>
      <td className="px-md py-xs text-center">
      <div className="h-4 w-4 bg-surface-variant rounded mx-auto"></div>
      </td>
      </tr>
      </tbody>
      </table>
      </div>
      {/* Table Footer / Pagination Minimal */}
      <div className="border-t border-outline-variant bg-surface-container-lowest px-md py-sm flex justify-between items-center text-on-surface-variant font-label-sm text-label-sm">
      <span>Showing 1-4 of 24 patients</span>
      <div className="flex gap-sm">
      <button className="text-outline hover:text-on-surface disabled:opacity-50" disabled={true} type="button" aria-label="Chevron Left" data-action-id="chevron-left-7" onClick={actions?.["chevron-left-7"]}><ChevronLeft className="text-[18px]" aria-hidden={true} focusable="false" /></button>
      <button className="text-outline hover:text-on-surface" type="button" aria-label="Chevron Right" data-action-id="chevron-right-8" onClick={actions?.["chevron-right-8"]}><ChevronRight className="text-[18px]" aria-hidden={true} focusable="false" /></button>
      </div>
      </div>
      </div>
      </div>
      </main>
    </>
  );
}
