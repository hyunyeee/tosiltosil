import { ReactNode } from "react";

interface IModalContainerProps {
  children: ReactNode;
}

const ModalContainer = ({ children }: IModalContainerProps) => {
  return (
    <div className="mx-[20px] mt-[300px] flex flex-col items-center justify-center rounded bg-pink-400 p-6 shadow-lg">
      <div>{children}</div>
    </div>
  );
};

export default ModalContainer;
