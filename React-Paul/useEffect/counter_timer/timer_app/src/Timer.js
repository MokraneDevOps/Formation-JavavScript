import React, { useState, useEffect } from 'react';

export default function TimerWithInput() {
  // État pour le temps qui s'incrémente toutes les secondes
  const [time, setTime] = useState(0);
  // État pour stocker la saisie utilisateur (nom)
  const [name, setName] = useState('');

  // Fonction qui augmente la variable `time` de 1 chaque seconde
  useEffect(() => {
    // Création d'un intervalle qui met à jour `time` chaque seconde
    const intervalId = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    // Fonction de nettoyage pour éviter de créer plusieurs intervalles
    return () => clearInterval(intervalId);
  }, []); // Dépendances vides pour exécuter l'effet une seule fois au montage

  // Gestionnaire d'événements pour la saisie utilisateur
  const handleChange = ({ target: { value } }) => {
    setName(value); // Met à jour `name` avec la saisie de l'utilisateur
  };

  return (
    <div>
      <h1>Minuteur : {time} secondes</h1>
      <input
        type="text"
        placeholder="Entrez votre nom"
        value={name}
        onChange={handleChange} // Appel de `handleChange` à chaque changement de saisie
      />
      <p>Votre nom : {name}</p>
    </div>
  );
}
