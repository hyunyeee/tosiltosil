import type { ReactNode } from "react";
import { atom } from "jotai";

export type OverlayType = "modal" | "bottomSheet";

export interface OverlayState {
  type: OverlayType | null;
  content: ReactNode | null;
}

export const overlayAtom = atom<OverlayState>({
  type: null,
  content: null,
});
