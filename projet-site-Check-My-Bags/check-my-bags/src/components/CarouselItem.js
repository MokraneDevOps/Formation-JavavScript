import React from 'react';
import './CarouselItem.css'; // Assurez-vous de créer un fichier CSS

const CarouselItem = ({ src, caption }) => {
  return (
    <article className="carousselArticle">
      <img src={src} alt={caption} />
      <div>{caption}</div>
    </article>
  );
};

export default CarouselItem;
