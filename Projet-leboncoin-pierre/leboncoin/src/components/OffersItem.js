import React from "react";
import "./OffersItem.css";

const OffersItem = ({ created_at, photos, price, title }) => {
  const created = new Date(created_at).toLocaleDateString();

  return (
    <div className="offers-item">
      <img src={photos[0]} alt={title} />
      <div>
        <h3>{title}</h3>
        <p>Prix : {price} €</p>
        <p>Créé le : {created}</p>
      </div>
    </div>
  );
};

export default OffersItem;
