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

      {/* Catégorie Assaisonnement */}
      <h2>Assaisonnement</h2>
      <button onClick={() => addItem("Huile d'olive")}>Add Huile d'olive</button>
      <button onClick={() => addItem("Vinaigre")}>Add Vinaigre</button>
      <button onClick={() => addItem("Sel fin")}>Add Sel fin</button>
      <button onClick={() => addItem("Poivre")}>Add Poivre</button>
      <button onClick={() => addItem("Gros sel")}>Add Gros sel</button>
      <button onClick={() => addItem("Ail")}>Add Ail</button>
      <button onClick={() => addItem("Oignons jaunes")}>Add Oignons jaunes</button>
      <button onClick={() => addItem("Citron")}>Add Citron</button>

      {/* Catégorie Féculents */}
      <h2>Féculents</h2>
      <button onClick={() => addItem("Riz")}>Add Riz</button>
      <button onClick={() => addItem("Pâtes")}>Add Pâtes</button>
      <button onClick={() => addItem("Lentilles")}>Add Lentilles</button>
      <button onClick={() => addItem("Farine")}>Add Farine</button>

      {/* Catégorie Crèmerie */}
      <h2>Crèmerie</h2>
      <button onClick={() => addItem("Beurre ou margarine")}>Add Beurre ou margarine</button>
      <button onClick={() => addItem("Œufs")}>Add Œufs</button>
      <button onClick={() => addItem("Lait")}>Add Lait</button>
      <button onClick={() => addItem("Crème fraiche liquide")}>Add Crème fraiche liquide</button>

      {/* Catégorie Petit déjeuner */}
      <h2>Petit déjeuner</h2>
      <button onClick={() => addItem("Confiture ou miel")}>Add Confiture ou miel</button>
      <button onClick={() => addItem("Café soluble")}>Add Café soluble</button>
      <button onClick={() => addItem("Capsules café")}>Add Capsules café</button>
      <button onClick={() => addItem("Thé")}>Add Thé</button>
      <button onClick={() => addItem("Biscottes")}>Add Biscottes</button>

      {/* Catégorie Epicerie sucrée */}
      <h2>Épicerie sucrée</h2>
      <button onClick={() => addItem("Sucre")}>Add Sucre</button>
      <button onClick={() => addItem("Chocolat noir")}>Add Chocolat noir</button>
      <button onClick={() => addItem("Levure chimique")}>Add Levure chimique</button>
      <button onClick={() => addItem("Levure de boulanger")}>Add Levure de boulanger</button>
    </div>
  );
}
