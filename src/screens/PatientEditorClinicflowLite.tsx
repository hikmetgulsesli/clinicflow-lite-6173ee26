// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Patient Editor - ClinicFlow Lite
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { ArrowLeft, CircleAlert, TriangleAlert } from "lucide-react";


export type PatientEditorClinicflowLiteActionId = "arrow-back-1" | "cancel-2" | "save-changes-3";

export interface PatientEditorClinicflowLiteProps {
  actions?: Partial<Record<PatientEditorClinicflowLiteActionId, () => void>>;
}

export function PatientEditorClinicflowLite({ actions }: PatientEditorClinicflowLiteProps) {
  return (
    <>
      {/* Top Navigation Bar (Suppressed due to linear/task-focused intent) */}
      {/* Side Navigation Bar (Suppressed due to linear/task-focused intent) */}
      <main className="flex-grow flex items-center justify-center p-md">
      <div className="w-full max-w-2xl bg-surface-container-lowest border border-surface-variant rounded-xl shadow-sm overflow-hidden">
      {/* Header */}
      <div className="px-lg py-md border-b border-surface-variant bg-surface flex justify-between items-center">
      <div className="flex items-center gap-sm">
      <button className="text-on-surface-variant hover:bg-surface-container-low p-sm rounded-full transition-colors flex items-center justify-center" type="button" aria-label="Arrow Back" data-action-id="arrow-back-1" onClick={actions?.["arrow-back-1"]}>
      <ArrowLeft className="text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      <h1 className="font-headline-md text-headline-md text-on-surface">Edit Patient Record</h1>
      </div>
      </div>
      {/* Form Content */}
      <div className="p-lg">
      {/* Alert Banner */}
      <div className="mb-lg bg-error-container border-l-2 border-error p-sm rounded-r-DEFAULT flex items-start gap-sm">
      <CircleAlert className="text-error text-[18px] mt-xs" aria-hidden={true} focusable="false" />
      <div>
      <p className="font-label-sm text-label-sm text-on-error-container uppercase tracking-wider mb-xs">Required Action</p>
      <p className="font-body-sm text-body-sm text-on-surface">Please complete all required fields marked with an asterisk (*).</p>
      </div>
      </div>
      <form className="space-y-lg">
      {/* Section: Personal Details */}
      <div>
      <h2 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-md pb-xs border-b border-surface-variant">Personal Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
      {/* Full Name */}
      <div className="col-span-1 md:col-span-2">
      <label className="block font-label-sm text-label-sm text-on-surface mb-base" htmlFor="fullName">Full Name *</label>
      <input className="w-full bg-surface-container-lowest border border-error rounded-DEFAULT px-sm py-[6px] font-body-md text-body-md text-on-surface focus:outline-none focus:ring-1 focus:ring-error focus:border-error transition-colors" id="fullName" type="text" defaultValue="Sarah Jenkins" />
      <p className="font-body-sm text-body-sm text-error mt-base flex items-center gap-xs">
      <TriangleAlert className="text-[14px]" aria-hidden={true} focusable="false" />
                                          Name is required for billing.
                                      </p>
      </div>
      {/* Date of Birth */}
      <div>
      <label className="block font-label-sm text-label-sm text-on-surface mb-base" htmlFor="dob">Date of Birth *</label>
      <input className="w-full bg-surface-container-lowest border border-outline-variant rounded-DEFAULT px-sm py-[6px] font-body-md text-body-md text-on-surface focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors" id="dob" type="date" defaultValue="1985-04-12" />
      </div>
      {/* Gender */}
      <div>
      <label className="block font-label-sm text-label-sm text-on-surface mb-base" htmlFor="gender">Gender</label>
      <select className="w-full bg-surface-container-lowest border border-outline-variant rounded-DEFAULT px-sm py-[6px] font-body-md text-body-md text-on-surface focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors appearance-none" id="gender">
      <option>Female</option>
      <option>Male</option>
      <option>Non-binary</option>
      <option>Other</option>
      </select>
      </div>
      </div>
      </div>
      {/* Section: Contact Information */}
      <div>
      <h2 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-md pb-xs border-b border-surface-variant">Contact Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
      {/* Phone */}
      <div>
      <label className="block font-label-sm text-label-sm text-on-surface mb-base" htmlFor="phone">Phone Number *</label>
      <input className="w-full bg-surface-container-lowest border border-outline-variant rounded-DEFAULT px-sm py-[6px] font-body-md text-body-md text-on-surface focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors" id="phone" type="tel" defaultValue="(555) 123-4567" />
      </div>
      {/* Email */}
      <div>
      <label className="block font-label-sm text-label-sm text-on-surface mb-base" htmlFor="email">Email Address</label>
      <input className="w-full bg-surface-container-lowest border border-outline-variant rounded-DEFAULT px-sm py-[6px] font-body-md text-body-md text-on-surface focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors" id="email" type="email" defaultValue="sarah.j@example.com" />
      </div>
      </div>
      </div>
      {/* Section: Visit Details */}
      <div>
      <h2 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-md pb-xs border-b border-surface-variant">Visit Details</h2>
      <div className="grid grid-cols-1 gap-gutter">
      {/* Reason for Visit */}
      <div>
      <label className="block font-label-sm text-label-sm text-on-surface mb-base" htmlFor="reason">Primary Reason for Visit *</label>
      <textarea className="w-full bg-surface-container-lowest border border-outline-variant rounded-DEFAULT px-sm py-sm font-body-md text-body-md text-on-surface focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors resize-none" id="reason" rows={3}>Annual physical and consultation regarding mild joint pain.</textarea>
      </div>
      {/* Insurance Provider */}
      <div className="md:w-1/2">
      <label className="block font-label-sm text-label-sm text-on-surface mb-base" htmlFor="insurance">Insurance Provider</label>
      <input className="w-full bg-surface-container-lowest border border-outline-variant rounded-DEFAULT px-sm py-[6px] font-body-md text-body-md text-on-surface focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors" id="insurance" type="text" defaultValue="BlueCross Health" />
      </div>
      </div>
      </div>
      </form>
      </div>
      {/* Footer Actions */}
      <div className="px-lg py-md border-t border-surface-variant bg-surface flex justify-end gap-sm">
      <button className="px-md py-sm rounded-DEFAULT border border-primary text-primary font-label-md text-label-md hover:bg-surface-container-low transition-colors bg-transparent" type="button" data-action-id="cancel-2" onClick={actions?.["cancel-2"]}>
                          Cancel
                      </button>
      <button className="px-md py-sm rounded-DEFAULT bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container hover:text-on-primary-container transition-colors shadow-sm" type="button" data-action-id="save-changes-3" onClick={actions?.["save-changes-3"]}>
                          Save Changes
                      </button>
      </div>
      </div>
      </main>
    </>
  );
}
