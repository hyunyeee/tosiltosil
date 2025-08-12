"use client";

import { useAtom } from "jotai";
import { overlayAtom } from "@/stores/overlayAtom";
import Portal from "@/components/overlay/Portal";
import ModalContainer from "@/components/overlay/ModalContainer";
import BottomSheetContainer from "@/components/overlay/BottomSheetContainer";

export default function OverlayRenderer() {
  const [overlay] = useAtom(overlayAtom);

  if (!overlay.content) return null;

  return (
    <Portal>
      <div className="fixed h-full min-h-screen w-full max-w-[430px] bg-black/20">
        {overlay.type === "modal" && (
          <ModalContainer>{overlay.content}</ModalContainer>
        )}
        {overlay.type === "bottomSheet" && (
          <BottomSheetContainer>{overlay.content}</BottomSheetContainer>
        )}
      </div>
    </Portal>
  );
}
