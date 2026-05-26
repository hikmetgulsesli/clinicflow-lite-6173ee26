// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Insights - ClinicFlow Lite
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { ArrowRight, BadgeAlert, BarChart3, Bed, Bell, BriefcaseMedical, CalendarDays, Check, Clock, DoorOpen, Download, EllipsisVertical, ListOrdered, Plus, Search, Settings, Timer, TrendingUp, User, UserCheck, UserSearch, UsersRound } from "lucide-react";


export type InsightsClinicflowLiteActionId = "create-appointment-1" | "notifications-2" | "button-3-3" | "export-summary-4" | "more-vert-5" | "patient-operations-1" | "queue-2" | "insights-3" | "settings-4";

export interface InsightsClinicflowLiteProps {
  actions?: Partial<Record<InsightsClinicflowLiteActionId, () => void>>;
}

export function InsightsClinicflowLite({ actions }: InsightsClinicflowLiteProps) {
  return (
    <>
      <aside className="fixed left-0 top-0 h-full flex flex-col p-md gap-sm bg-surface-container-low border-r border-outline-variant w-64 z-20 hidden md:flex">
      <div className="flex items-center gap-sm px-sm py-sm mb-md">
      <div className="w-8 h-8 rounded bg-primary flex items-center justify-center text-on-primary shadow-sm">
      <BriefcaseMedical className="text-[20px] fill-icon" aria-hidden={true} focusable="false" />
      </div>
      <div>
      <h1 className="font-headline-sm text-headline-sm font-bold text-primary tracking-tight">ClinicFlow Lite</h1>
      <p className="font-label-sm text-label-sm text-on-surface-variant">City Central Branch</p>
      </div>
      </div>
      <nav className="flex-1 space-y-xs">
      <a className="flex items-center gap-md px-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors font-label-md text-label-md" href="#" data-action-id="patient-operations-1" onClick={actions?.["patient-operations-1"]}>
      <UserSearch className="text-[20px]" aria-hidden={true} focusable="false" />
                      Patient Operations
                  </a>
      <a className="flex items-center gap-md px-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors font-label-md text-label-md" href="#" data-action-id="queue-2" onClick={actions?.["queue-2"]}>
      <ListOrdered className="text-[20px]" aria-hidden={true} focusable="false" />
                      Queue
                  </a>
      <a className="flex items-center gap-md px-sm py-2 rounded-lg bg-primary-container text-on-primary-container font-semibold font-label-md text-label-md relative overflow-hidden group" href="#" data-action-id="insights-3" onClick={actions?.["insights-3"]}>
      <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <BarChart3 className="text-[20px] fill-icon" aria-hidden={true} focusable="false" />
                      Insights
                  </a>
      <a className="flex items-center gap-md px-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors font-label-md text-label-md" href="#" data-action-id="settings-4" onClick={actions?.["settings-4"]}>
      <Settings className="text-[20px]" aria-hidden={true} focusable="false" />
                      Settings
                  </a>
      </nav>
      <div className="mt-auto border-t border-outline-variant pt-md">
      <button className="w-full flex items-center justify-center gap-sm bg-primary text-on-primary py-2 px-md rounded font-label-md text-label-md hover:bg-primary/90 transition-colors" type="button" data-action-id="create-appointment-1" onClick={actions?.["create-appointment-1"]}>
      <Plus className="text-[18px]" aria-hidden={true} focusable="false" />
                      Create Appointment
                  </button>
      </div>
      </aside>
      <main className="flex-1 flex flex-col min-w-0 md:ml-64 bg-background">
      <header className="flex justify-between items-center w-full px-lg py-sm h-14 bg-surface border-b border-outline-variant sticky top-0 z-10">
      <div className="flex items-center w-1/3 min-w-[200px]">
      <div className="relative w-full max-w-sm flex items-center">
      <Search className="absolute left-2 text-outline text-[18px] pointer-events-none" aria-hidden={true} focusable="false" />
      <input className="w-full h-8 pl-8 pr-sm bg-surface border border-outline-variant rounded font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-shadow" placeholder="Search patients, IDs..." type="text" />
      </div>
      </div>
      <div className="flex items-center gap-sm">
      <button className="w-8 h-8 flex items-center justify-center rounded text-on-surface-variant hover:bg-surface-container-low transition-colors relative" type="button" aria-label="Notifications" data-action-id="notifications-2" onClick={actions?.["notifications-2"]}>
      <Bell className="text-[20px]" aria-hidden={true} focusable="false" />
      <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-error rounded-full border border-surface"></span>
      </button>
      <div className="h-4 w-[1px] bg-outline-variant mx-xs"></div>
      <button className="w-8 h-8 rounded-full bg-surface-container-highest border border-outline-variant flex items-center justify-center overflow-hidden hover:opacity-80 transition-opacity" type="button" aria-label="Button 3" data-action-id="button-3-3" onClick={actions?.["button-3-3"]}>
      <img alt="Clinic Administrator" className="w-full h-full object-cover" data-alt="A professional headshot of a female clinic administrator in a well-lit modern medical office, wearing a neat navy blue blazer over a light blue shirt. The background is slightly blurred showing clean white walls and subtle medical equipment. Soft, natural lighting. High quality corporate portrait photography." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOEI2KeELx2ZUMtUcn_Ktxnp79V6R76TGqv7oNpvE_TRzwQhkmWPtiYyZhDmBe1ck-TFpo56bSsqRaGn4AYf34TzWkTwjsvSsw98dJzk5NTbBsyXp1gikVXTFPSDN8BWspb0b_ga5vEVYHL54D-pt1cSEX0yF5w0cwui-64d_rhSzV5eWu_4eIa4ImYQKr7iOr5xJwA1CN5nYiXy_ep8MLEYQOfQBY1nNHHqhzW60eZ0rnueCydi4VjG1eLbI5IGoiHPBPzviM3EI-" />
      </button>
      </div>
      </header>
      <div className="flex-1 overflow-auto p-margin md:p-lg">
      <div className="max-w-7xl mx-auto space-y-lg">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-md border-b border-outline-variant pb-sm">
      <div>
      <h2 className="font-headline-lg text-headline-lg text-on-surface">Daily Overview</h2>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-xs">Real-time metrics for current operational shift.</p>
      </div>
      <div className="flex items-center gap-sm">
      <div className="flex items-center gap-xs px-sm py-1.5 bg-surface-container rounded border border-outline-variant">
      <CalendarDays className="text-[16px] text-on-surface-variant" aria-hidden={true} focusable="false" />
      <span className="font-label-sm text-label-sm text-on-surface">Today, Oct 24</span>
      </div>
      <button className="flex items-center gap-xs px-md py-1.5 border border-primary text-primary rounded font-label-md text-label-md hover:bg-primary/5 transition-colors" type="button" data-action-id="export-summary-4" onClick={actions?.["export-summary-4"]}>
      <Download className="text-[16px]" aria-hidden={true} focusable="false" />
                                  Export Summary
                              </button>
      </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
      <div className="bg-surface-container-lowest border border-outline-variant rounded p-md flex flex-col justify-between relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-sm opacity-10">
      <UsersRound className="text-[64px]" aria-hidden={true} focusable="false" />
      </div>
      <div className="relative z-10">
      <div className="flex items-center gap-xs mb-sm">
      <div className="w-6 h-6 rounded bg-primary-fixed text-on-primary-fixed flex items-center justify-center">
      <User className="text-[14px]" aria-hidden={true} focusable="false" />
      </div>
      <h3 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Today's Total</h3>
      </div>
      <div className="flex items-baseline gap-sm">
      <span className="font-headline-lg text-headline-lg text-on-surface text-[32px]">142</span>
      <span className="font-label-sm text-label-sm text-secondary flex items-center">
      <TrendingUp className="text-[12px]" aria-hidden={true} focusable="false" /> +12%
                                      </span>
      </div>
      <p className="font-body-sm text-body-sm text-outline mt-1">Patients checked in today.</p>
      </div>
      </div>
      <div className="bg-surface-container-lowest border border-outline-variant rounded p-md flex flex-col justify-between relative overflow-hidden">
      <div className="absolute top-0 right-0 p-sm opacity-10">
      <Clock className="text-[64px]" aria-hidden={true} focusable="false" />
      </div>
      <div className="relative z-10">
      <div className="flex items-center gap-xs mb-sm">
      <div className="w-6 h-6 rounded bg-error-container text-on-error-container flex items-center justify-center">
      <Timer className="text-[14px]" aria-hidden={true} focusable="false" />
      </div>
      <h3 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Avg Wait Time</h3>
      </div>
      <div className="flex items-baseline gap-sm">
      <span className="font-headline-lg text-headline-lg text-on-surface text-[32px]">18</span>
      <span className="font-label-md text-label-md text-on-surface-variant">mins</span>
      </div>
      <p className="font-body-sm text-body-sm text-outline mt-1">Target is &lt; 15 mins. Capacity high.</p>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-surface-container-highest">
      <div className="h-full bg-error" style={{width: "75%"}}></div>
      </div>
      </div>
      <div className="bg-surface-container-lowest border border-outline-variant rounded p-md flex flex-col justify-between relative overflow-hidden">
      <div className="absolute top-0 right-0 p-sm opacity-10">
      <DoorOpen className="text-[64px]" aria-hidden={true} focusable="false" />
      </div>
      <div className="relative z-10">
      <div className="flex items-center gap-xs mb-sm">
      <div className="w-6 h-6 rounded bg-secondary-container text-on-secondary-container flex items-center justify-center">
      <Bed className="text-[14px]" aria-hidden={true} focusable="false" />
      </div>
      <h3 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Room Occupancy</h3>
      </div>
      <div className="flex items-baseline gap-sm">
      <span className="font-headline-lg text-headline-lg text-on-surface text-[32px]">8</span>
      <span className="font-label-md text-label-md text-on-surface-variant">/ 10</span>
      </div>
      <p className="font-body-sm text-body-sm text-outline mt-1">Peak expected at 2:00 PM.</p>
      </div>
      </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
      <div className="lg:col-span-2 bg-surface-container-lowest border border-outline-variant rounded flex flex-col h-[400px]">
      <div className="px-md py-sm border-b border-outline-variant flex justify-between items-center bg-surface-bright/50 rounded-t">
      <h3 className="font-label-md text-label-md text-on-surface">Patient Volume by Hour</h3>
      <button className="text-on-surface-variant hover:text-on-surface" type="button" aria-label="More Vert" data-action-id="more-vert-5" onClick={actions?.["more-vert-5"]}>
      <EllipsisVertical className="text-[18px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      <div className="flex-1 p-md flex flex-col">
      <div className="flex-1 flex items-end gap-1 sm:gap-2 pt-md relative">
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between pointer-events-none pb-6">
      <div className="w-full border-t border-dashed border-outline-variant/50 relative">
      <span className="absolute -left-6 -top-2.5 font-label-sm text-label-sm text-outline text-[10px]">30</span>
      </div>
      <div className="w-full border-t border-dashed border-outline-variant/50 relative">
      <span className="absolute -left-6 -top-2.5 font-label-sm text-label-sm text-outline text-[10px]">15</span>
      </div>
      <div className="w-full border-t border-dashed border-outline-variant/50 relative">
      <span className="absolute -left-6 -top-2.5 font-label-sm text-label-sm text-outline text-[10px]">0</span>
      </div>
      </div>
      <div className="flex-1 flex flex-col justify-end items-center group relative z-10">
      <div className="w-full bg-surface-tint rounded-t-sm opacity-60 hover:opacity-100 transition-opacity" style={{height: "20%"}}></div>
      <span className="font-label-sm text-label-sm text-outline mt-2 text-[10px] sm:text-[11px]">8a</span>
      </div>
      <div className="flex-1 flex flex-col justify-end items-center group relative z-10">
      <div className="w-full bg-surface-tint rounded-t-sm opacity-60 hover:opacity-100 transition-opacity" style={{height: "45%"}}></div>
      <span className="font-label-sm text-label-sm text-outline mt-2 text-[10px] sm:text-[11px]">9a</span>
      </div>
      <div className="flex-1 flex flex-col justify-end items-center group relative z-10">
      <div className="w-full bg-surface-tint rounded-t-sm opacity-80 hover:opacity-100 transition-opacity" style={{height: "70%"}}></div>
      <span className="font-label-sm text-label-sm text-outline mt-2 text-[10px] sm:text-[11px]">10a</span>
      </div>
      <div className="flex-1 flex flex-col justify-end items-center group relative z-10">
      <div className="w-full bg-primary rounded-t-sm transition-opacity" style={{height: "95%"}}></div>
      <span className="font-label-sm text-label-sm text-on-surface font-bold mt-2 text-[10px] sm:text-[11px]">11a</span>
      </div>
      <div className="flex-1 flex flex-col justify-end items-center group relative z-10">
      <div className="w-full bg-surface-tint rounded-t-sm opacity-60 hover:opacity-100 transition-opacity" style={{height: "60%"}}></div>
      <span className="font-label-sm text-label-sm text-outline mt-2 text-[10px] sm:text-[11px]">12p</span>
      </div>
      <div className="flex-1 flex flex-col justify-end items-center group relative z-10">
      <div className="w-full bg-surface-tint rounded-t-sm opacity-60 hover:opacity-100 transition-opacity" style={{height: "40%"}}></div>
      <span className="font-label-sm text-label-sm text-outline mt-2 text-[10px] sm:text-[11px]">1p</span>
      </div>
      <div className="flex-1 flex flex-col justify-end items-center group relative z-10">
      <div className="w-full bg-surface-tint rounded-t-sm opacity-60 hover:opacity-100 transition-opacity" style={{height: "85%"}}></div>
      <span className="font-label-sm text-label-sm text-outline mt-2 text-[10px] sm:text-[11px]">2p</span>
      </div>
      <div className="flex-1 flex flex-col justify-end items-center group relative z-10">
      <div className="w-full bg-surface-tint rounded-t-sm opacity-40 hover:opacity-100 transition-opacity" style={{height: "50%"}}></div>
      <span className="font-label-sm text-label-sm text-outline mt-2 text-[10px] sm:text-[11px]">3p</span>
      </div>
      <div className="flex-1 flex flex-col justify-end items-center group relative z-10">
      <div className="w-full bg-surface-tint rounded-t-sm opacity-20 hover:opacity-100 transition-opacity" style={{height: "30%"}}></div>
      <span className="font-label-sm text-label-sm text-outline mt-2 text-[10px] sm:text-[11px]">4p</span>
      </div>
      </div>
      </div>
      </div>
      <div className="bg-surface-container-lowest border border-outline-variant rounded flex flex-col h-[400px]">
      <div className="px-md py-sm border-b border-outline-variant bg-surface-bright/50 rounded-t">
      <h3 className="font-label-md text-label-md text-on-surface">Recent Activity</h3>
      </div>
      <div className="flex-1 overflow-auto p-md">
      <div className="relative pl-4 space-y-6 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-surface-container-highest">
      <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
      <div className="flex items-center justify-center w-6 h-6 rounded-full border-2 border-surface bg-secondary-container absolute left-0 -ml-[11px] z-10 text-on-secondary-container">
      <Check className="text-[12px]" aria-hidden={true} focusable="false" />
      </div>
      <div className="ml-sm w-full">
      <div className="flex justify-between items-baseline mb-1">
      <span className="font-data-mono text-data-mono text-on-surface">JD-492</span>
      <span className="font-label-sm text-label-sm text-outline">Just now</span>
      </div>
      <div className="flex items-center gap-2">
      <span className="font-body-sm text-body-sm text-on-surface-variant">Discharged</span>
      <span className="px-2 py-0.5 rounded-full bg-secondary-fixed-dim/20 text-on-secondary-container font-label-sm text-[10px] border border-secondary-fixed-dim/30">Complete</span>
      </div>
      </div>
      </div>
      <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
      <div className="flex items-center justify-center w-6 h-6 rounded-full border-2 border-surface bg-surface-variant absolute left-0 -ml-[11px] z-10 text-on-surface-variant">
      <ArrowRight className="text-[12px]" aria-hidden={true} focusable="false" />
      </div>
      <div className="ml-sm w-full">
      <div className="flex justify-between items-baseline mb-1">
      <span className="font-data-mono text-data-mono text-on-surface">MK-118</span>
      <span className="font-label-sm text-label-sm text-outline">4m ago</span>
      </div>
      <div className="flex items-center gap-2">
      <span className="font-body-sm text-body-sm text-on-surface-variant">Triaged → Room 3</span>
      <span className="px-2 py-0.5 rounded-full bg-surface-variant text-on-surface font-label-sm text-[10px]">In Progress</span>
      </div>
      </div>
      </div>
      <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
      <div className="flex items-center justify-center w-6 h-6 rounded-full border-2 border-surface bg-error-container absolute left-0 -ml-[11px] z-10 text-on-error-container">
      <BadgeAlert className="text-[12px]" aria-hidden={true} focusable="false" />
      </div>
      <div className="ml-sm w-full">
      <div className="flex justify-between items-baseline mb-1">
      <span className="font-data-mono text-data-mono text-on-surface">AL-902</span>
      <span className="font-label-sm text-label-sm text-outline">12m ago</span>
      </div>
      <div className="flex items-center gap-2">
      <span className="font-body-sm text-body-sm text-on-surface-variant">Status Escalation</span>
      <span className="px-2 py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-[10px] border border-error/20">Urgent</span>
      </div>
      </div>
      </div>
      <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
      <div className="flex items-center justify-center w-6 h-6 rounded-full border-2 border-surface bg-surface-variant absolute left-0 -ml-[11px] z-10 text-on-surface-variant">
      <UserCheck className="text-[12px]" aria-hidden={true} focusable="false" />
      </div>
      <div className="ml-sm w-full">
      <div className="flex justify-between items-baseline mb-1">
      <span className="font-data-mono text-data-mono text-on-surface">RT-055</span>
      <span className="font-label-sm text-label-sm text-outline">18m ago</span>
      </div>
      <div className="flex items-center gap-2">
      <span className="font-body-sm text-body-sm text-on-surface-variant">Checked In</span>
      <span className="px-2 py-0.5 rounded-full bg-surface-variant text-on-surface font-label-sm text-[10px]">Pending</span>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </main>
    </>
  );
}
