import React, { useState, useEffect } from 'react'

// Ce composant représente un compteur simple qui affiche une alerte à chaque changement de valeur du compteur.
export default function Counter1() {
  // Déclaration d'une variable d'état `count` initialisée à 0, avec `setCount` pour la mettre à jour.
  const [count, setCount] = useState(0);

  // Utilisation du hook `useEffect` pour effectuer un effet secondaire lorsque `count` change.
  // Ici, une alerte est affichée chaque fois que `count` est mis à jour.
  useEffect(() => {
    alert(`Le compteur est à ${count}`);
  }, [count]); // Le tableau de dépendances inclut `count`, donc l'effet se déclenche chaque fois que `count` change.

  // Fonction `handleClick` appelée lorsqu'on clique sur le bouton.
  // Elle met à jour la valeur de `count` en l'incrémentant de 1.
  const handleClick = () => {
    setCount((prevCount) => prevCount + 1); // Utilisation de la fonction précédente `prevCount` pour garantir que la valeur est correcte.
  };

  // Rendu du composant dans le DOM.
  // Affiche le nombre de clics et un bouton qui appelle `handleClick` quand on clique dessus.
  return (
    <div>
      <p>You clicked {count} times</p> {/* Affiche le nombre de clics */}
      <button onClick={handleClick}>
        Click me
      </button>
    </div>
  );
}
