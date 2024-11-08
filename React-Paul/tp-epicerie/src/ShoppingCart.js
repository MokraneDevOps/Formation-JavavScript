import React, { useState } from 'react';

export default function ShoppingCart() {
  // Étape 1 : Déclarer et initialiser cart comme un tableau vide
  const [cart, setCart] = useState([]);

  // Étape 2 : Définir addItem et removeItem avec les paramètres requis
  const addItem = (item) => {
    // Étape 3 : Ajouter l'élément au panier en utilisant une fonction de rappel pour setCart
    setCart((prevCart) => [...prevCart, item]);
  };

  const removeItem = (targetIndex) => {
    // Étape 4 : Supprimer l'élément ciblé en filtrant par index
    setCart((prevCart) => prevCart.filter((_, index) => index !== targetIndex));
  };

  return (
    <div>
      <h1>Shopping Cart</h1>

      {/* Affichage des éléments du panier avec un bouton pour supprimer chaque élément */}
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item} <button onClick={() => removeItem(index)}>Remove</button>
          </li>
        ))}
      </ul>

      {/* Boutons pour ajouter des éléments au panier */}
      <button onClick={() => addItem("Apple")}>Add Apple</button>
      <button onClick={() => addItem("Banana")}>Add Banana</button>
      <button onClick={() => addItem("Orange")}>Add Orange</button>
    </div>
  );
}
