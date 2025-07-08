import { ReactNode } from "react";
import ReactDOM from "react-dom";

interface IPortalProps {
  children: ReactNode;
}

function Portal({ children }: IPortalProps) {
  const element = document.querySelector("#portal");

  if (!element) {
    console.warn("Portal element with id 'portal' not found");
    return null;
  }

  return ReactDOM.createPortal(children, element);
}

export default Portal;
