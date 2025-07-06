import { ReactNode } from "react";

interface IBottomSheetContainer {
  children: ReactNode;
}

const BottomSheetContainer = ({ children }: IBottomSheetContainer) => {
  return (
    <div className="fixed bottom-0 left-1/2 w-full max-w-[430px] -translate-x-1/2 rounded-t-2xl bg-green-400 p-6 shadow-lg">
      {children}
    </div>
  );
};

export default BottomSheetContainer;
