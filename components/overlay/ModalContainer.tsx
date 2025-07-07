import { ReactNode } from "react";

interface IModalContainerProps {
  children: ReactNode;
}

const ModalContainer = ({ children }: IModalContainerProps) => {
  return (
    <div className="fixed top-1/2 left-1/2 w-[calc(100%-40px)] max-w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-[8px] bg-white px-[30px] pt-[10px] pb-[24px] shadow-lg">
      {children}
    </div>
  );
};

export default ModalContainer;
