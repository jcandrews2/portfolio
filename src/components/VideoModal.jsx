import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { IoMdClose } from 'react-icons/io';

const VideoModal = ({ videoSrc }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMediaClick = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <video
        src={videoSrc}
        className="media"
        onClick={handleMediaClick}
        onTouchStart={handleMediaClick}
      />
      {isOpen &&
        ReactDOM.createPortal(
          <div className="media-modal-overlay">
            <div className="media-modal-content">
              <video
                src={videoSrc}
                className="media-expanded"
                controls
                autoPlay
              />
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

export default VideoModal;
