import React from "react";
import { Fragment } from "react";
import ReactDOM from "react-dom";

const BackDrop = (props) => {
  return <div className="modalBackdrop" onClick={props.onClose}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className="modal">
      <div>{props.children}</div>
    </div>
  );
};

const portalElm = document.getElementById("overlays");

export default function Modal(props) {
  return (
    <Fragment>
      {ReactDOM.createPortal(<BackDrop onClose={props.onClose} />, portalElm)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElm
      )}
    </Fragment>
  );
}
