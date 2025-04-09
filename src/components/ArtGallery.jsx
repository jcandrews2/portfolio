import React from 'react';
import ImageModal from './ImageModal';
import '../styles/ArtGallery.css';

const artImages = [
  { src: require('../media/Art_1.jpg'), alt: 'Artwork 1' },
  { src: require('../media/Art_2.jpg'), alt: 'Artwork 2' },
  { src: require('../media/Art_3.jpg'), alt: 'Artwork 3' },
  { src: require('../media/Art_4.jpg'), alt: 'Artwork 4' },
  { src: require('../media/Art_5.jpg'), alt: 'Artwork 5' },
  { src: require('../media/Art_6.jpg'), alt: 'Artwork 6' },
  { src: require('../media/Art_7.jpg'), alt: 'Artwork 7' },
  { src: require('../media/Art_8.jpg'), alt: 'Artwork 8' },
  { src: require('../media/Art_9.jpg'), alt: 'Artwork 9' },
  { src: require('../media/Art_10.jpg'), alt: 'Artwork 10' },
];

const ArtGallery = () => {
  return (
    <section className="art-gallery-container">
      <h2>Artwork</h2>
      <p>If you made it this far, here's some of my artwork!</p>
      <div className="row">
        <div className="column">
          <ImageModal imageSrc={artImages[0].src} altText={artImages[0].alt} />
          <ImageModal imageSrc={artImages[8].src} altText={artImages[8].alt} />
        </div>
        <div className="column">
          <ImageModal imageSrc={artImages[1].src} altText={artImages[1].alt} />
          <ImageModal imageSrc={artImages[2].src} altText={artImages[2].alt} />
          <ImageModal imageSrc={artImages[7].src} altText={artImages[7].alt} />
          <ImageModal imageSrc={artImages[3].src} altText={artImages[3].alt} />
        </div>
        <div className="column">
          <ImageModal imageSrc={artImages[4].src} altText={artImages[4].alt} />
          <ImageModal imageSrc={artImages[5].src} altText={artImages[5].alt} />
          <ImageModal imageSrc={artImages[6].src} altText={artImages[6].alt} />
          <ImageModal imageSrc={artImages[9].src} altText={artImages[9].alt} />
        </div>
      </div>
    </section>
  );
};

export default ArtGallery;
