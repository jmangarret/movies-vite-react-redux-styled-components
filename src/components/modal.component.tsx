import React from "react";
import { Overlay, Content } from "../styles/modal";

interface Props {
    isOpen: boolean,
    children: React.ReactNode;
    onClose: () => void;
}

const Modal:React.FC<Props> = ({ isOpen, onClose, children }) => {
  return (
    <>
      {isOpen && (
        <Overlay>
          <Content>
            {children}
            <button onClick={() => onClose()}>Cerrar</button>
          </Content>
        </Overlay>
      )}
    </>
  );
};

export default Modal;
