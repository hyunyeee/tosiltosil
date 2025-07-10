import { ReactNode, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

interface IPortalProps {
  children: ReactNode;
}

function Portal({ children }: IPortalProps) {
  const portalRef = useRef<Element | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      portalRef.current = document.querySelector("#portal");
    }
  }, []);

  if (typeof window === "undefined" || !children) {
    return null;
  }

  const element = portalRef.current;

  if (!element) {
    console.warn("Portal element with id 'portal' not found");
    return null;
  }

  return ReactDOM.createPortal(children, element);
}

export default Portal;
