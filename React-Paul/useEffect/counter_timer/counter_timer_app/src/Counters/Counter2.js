import React, { useState, useEffect } from "react";

export default function ClickTracker() {
  // Définir l'état pour compter les clics
  const [clickCount, setClickCount] = useState(0);

  // 1. Définir le gestionnaire d'événements pour incrémenter le compteur
  const increment = () => {
    setClickCount(prevClickCount => prevClickCount + 1);
  };

  // 2. Utiliser useEffect pour ajouter un écouteur d'événements 'mousedown' au document
  useEffect(() => {
    // Ajouter l'écouteur d'événements
    document.addEventListener("mousedown", increment);

    // 3. Retourner une fonction de nettoyage pour retirer l'écouteur lors du démontage ou du rerendu
    return () => {
      document.removeEventListener("mousedown", increment);
    };
  }, []); // Le tableau vide [] signifie que cet effet ne se réexécutera pas au rerendu

  return (
    <div>
      <h1>Compteur de clics</h1>
      <p>Vous avez cliqué {clickCount} fois.</p>
    </div>
  );
}
