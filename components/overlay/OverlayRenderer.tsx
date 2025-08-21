"use client";

import { useAtom } from "jotai";
import { overlayAtom } from "@/atoms/overlayAtom";
import Portal from "@/components/overlay/Portal";
import ModalContainer from "@/components/overlay/ModalContainer";
import BottomSheetContainer from "@/components/overlay/BottomSheetContainer";
import { useOverlay } from "@/hooks/useOverlay";

export default function OverlayRenderer() {
  const [overlay] = useAtom(overlayAtom);
  const { closeOverlay } = useOverlay();

  const handleBackdropClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (e.target === e.currentTarget) {
      closeOverlay();
    }
  };

  if (!overlay.content) return null;

  return (
    <Portal>
      <div
        onClick={handleBackdropClick}
        className="fixed h-full min-h-screen w-full max-w-[430px] bg-black/20"
      >
        {overlay.type === "modal" && (
          <div onClick={(e) => e.stopPropagation()}>
            <ModalContainer>{overlay.content}</ModalContainer>
          </div>
        )}
        {overlay.type === "bottomSheet" && (
          <div onClick={(e) => e.stopPropagation()}>
            <BottomSheetContainer>{overlay.content}</BottomSheetContainer>
          </div>
        )}
      </div>
    </Portal>
  );
}
