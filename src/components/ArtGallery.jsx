import React from 'react';
import '../styles/ArtGallery.css';

const artImages = [
  { src: require('../media/Art_1.jpg'), alt: 'Artwork 1' },
  { src: require('../media/Art_2.jpg'), alt: 'Artwork 2' },
  { src: require('../media/Art_3.jpg'), alt: 'Artwork 3' },
  { src: require('../media/Art_4.jpg'), alt: 'Artwork 4' },
  { src: require('../media/Art_5.jpg'), alt: 'Artwork 5' },
  { src: require('../media/Art_6.jpg'), alt: 'Artwork 6' },
  { src: require('../media/Art_7.jpg'), alt: 'Artwork 7' },
];

const ArtGallery = () => {
  return (
    <>
      <h2>My Artwork</h2>
      <p>If you made it this far, here's some of my artwork!</p>
      <div className="row">
        <div className="column">
          <img src={artImages[0].src} alt={artImages[0].alt} />
        </div>
        <div className="column">
          <img src={artImages[1].src} alt={artImages[1].alt} />
          <img src={artImages[2].src} alt={artImages[2].alt} />
          <img src={artImages[3].src} alt={artImages[3].alt} />
        </div>
        <div className="column">
          <img src={artImages[4].src} alt={artImages[4].alt} />
          <img src={artImages[5].src} alt={artImages[5].alt} />
          <img src={artImages[6].src} alt={artImages[6].alt} />
        </div>
      </div>
    </>
  );
};

export default ArtGallery;
