import React, { useState } from "react";
import ReactModal from "react-modal";

import "../../stylesheets/AdventureCard.scss";

function AdventureCard({ imgUrl, head, small, isVisibleBody }) {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
    console.log("open modal", showModal);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    console.log("close modal", showModal);
  };

  return (
    <div className="adventure-card">
      <div className="overlay" onClick={handleOpenModal}>
        {isVisibleBody ? (
          <>
            <div className="adventure-card__adventure-header">
              <img src={imgUrl} />
            </div>
            <div className="adventure-card__body">
              <h5>
                {head}
                <small>{small}</small>
              </h5>
            </div>
          </>
        ) : (
          <>
            <div className="adventure-card__home-header">
              <img src={imgUrl} />
            </div>
          </>
        )}
      </div>
      {
        <ReactModal
          isOpen={showModal}
          contentLabel="Minimal Modal Example"
          onRequestClose={handleCloseModal}
          appElement={document.querySelector("body")}
        >
          <button type="button" onClick={handleCloseModal}>
            Close
          </button>
        </ReactModal>
      }
    </div>
  );
}

export default AdventureCard;
