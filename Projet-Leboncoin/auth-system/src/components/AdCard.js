import React from 'react';
import { Link } from 'react-router-dom';

const AdCard = ({ ad }) => {
  return (
    <div className="ad-card">
      <img src={ad.image} alt={ad.title} />
      <div>
        <h3>{ad.title}</h3>
        <p>{ad.price}€</p>
        <Link to={`/ad/${ad.id}`}>Voir plus</Link>
      </div>
    </div>
  );
};

export default AdCard;
