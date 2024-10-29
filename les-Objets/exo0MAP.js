const products = [
    { name: "laptop", price: 1000, category: "electronics" },
    { name: "guitar", price: 500, category: "music" },
    { name: "sofa", price: 300, category: "furniture" }
  ];
  
  // Transformation des produits
  const transformedProducts = products.map(product => {
    return {
      name: product.name.charAt(0).toUpperCase() + product.name.slice(1), // Capitalisation du nom
      price: product.price,
      category: product.category.toUpperCase(), // Catégorie en majuscules
      priceWithTax: Math.round(product.price * 1.2) // Prix avec taxe (20%)
    };
  });
  
  // Affichage du tableau transformé
  console.log(transformedProducts);
  

  // Explication :
// Utilisation de map() : La méthode map() est utilisée pour créer un nouveau tableau à partir du tableau products. 
// Chaque élément du tableau d'origine est passé en argument à la fonction de rappel.

// Calcul du prix avec taxe : Pour chaque produit, le prix avec la taxe est calculé en multipliant le prix par 1.20 (qui correspond à 100% + 20% de taxe).

// Transformation des propriétés :

// Nom : Le nom est capitalisé en prenant la première lettre, la transformant en majuscule avec toUpperCase() 
// et en ajoutant le reste du nom en utilisant slice(1).

// Catégorie : La catégorie est convertie en majuscules avec toUpperCase().

// Les autres propriétés (price et priceWithTax) sont simplement copiées ou ajoutées au nouvel objet.
// Affichage du résultat : Le tableau résultant transformedProducts est affiché, montrant chaque produit avec les nouvelles propriétés.
  