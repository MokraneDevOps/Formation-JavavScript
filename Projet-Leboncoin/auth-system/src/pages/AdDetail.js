import React from 'react';
import { useParams } from 'react-router-dom';

const AdDetail = () => {
  const { id } = useParams();
  // Ici, tu récupères les détails d'une annonce à partir de l'ID
  // pour l'instant, on affiche juste l'ID.
  return (
    <div>
      <h1>Détails de l'annonce {id}</h1>
      <p>Des informations détaillées sur l'annonce iront ici.</p>
    </div>
  );
};

export default AdDetail;
