import React from 'react';
import './CarousselArticle.css';

function CarousselArticle({ imgSrc, title }) {
  return (
    <article className="carousselArticle">
      <img src={imgSrc} alt={title} />
      <div>{title}</div>
    </article>
  );
}

export default CarousselArticle;
