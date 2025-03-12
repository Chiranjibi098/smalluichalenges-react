import React, { useState } from "react";

export default function Modal() {
  const [modal, setModal] = useState(false);

  function openModal() {
    setModal(true);
  }

  function closeModal() {
    setModal(false);
  }
  return (
    <div className="Main">
      <h2>Modal</h2>
      <div>
        <div className="modal">
          <button onClick={openModal}><b>Open Modal</b></button>
        </div>
        <div
          className="mo-wrap"
          style={!modal ? { display: "none" } : { display: "block" }}
        >
          <div className="mo">
            <p contentEditable>This is a modal</p>
            <div className="modal">
              <button onClick={closeModal}>Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
