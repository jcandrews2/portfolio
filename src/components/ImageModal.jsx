import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { IoMdClose } from 'react-icons/io';

const ImageModal = ({ imageSrc, altText }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMediaClick = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <img
        src={imageSrc}
        alt={altText}
        className="media"
        onClick={handleMediaClick}
      />
      {isOpen &&
        ReactDOM.createPortal(
          <div className="media-modal-overlay">
            <div className="media-modal-content">
              <img src={imageSrc} alt={altText} className="media-expanded" />
              <button className="media-modal-close" onClick={handleCloseModal}>
                <IoMdClose />
              </button>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
};

export default ImageModal;
