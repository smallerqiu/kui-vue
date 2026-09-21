export type PopupTrigger = "hover" | "click" | "focus" | "contextmenu" | "manual";
export type PopupOpenReason =
  "trigger" | "hover" | "focus" | "contextmenu" | "outside" | "escape" | "programmatic" | "host";
export interface PopupOpenChangeDetail {
  reason: PopupOpenReason;
  event?: Event;
}
export interface PopupRef {
  open: () => void;
  close: () => void;
  updatePosition: () => void;
  cancelClose: () => void;
  scheduleClose: () => void;
  getTriggerElement: () => HTMLElement | null;
  getPopupElement: () => HTMLElement | null;
}
