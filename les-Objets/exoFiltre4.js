const products = [
    { name: "Product 1", price: 20, category: "Electronics" },
    { name: "Product 2", price: 30, category: "Clothes" },
    { name: "Product 3", price: 40, category: "Electronics" },
    { name: "Product 4", price: 50, category: "Clothes" },
    { name: "Product 5", price: 60, category: "Clothes" },
    { name: "Product 6", price: 70, category: "Electronics" },
    { name: "Product 7", price: 80, category: "Clothes" },
    { name: "Product 8", price: 90, category: "Electronics" },
  ];
  
  // Step 1: Group by category and calculate total price and count
  const categoryStats = products.reduce((acc, product) => {
    // If category does not exist in accumulator, initialize it
    if (!acc[product.category]) {
      acc[product.category] = { total: 0, count: 0 };
    }
    // Update total price and count
    acc[product.category].total += product.price;
    acc[product.category].count += 1;
  
    return acc;
  }, {});
  
  // Step 2: Transform into an array of category averages
  const categoryAverages = Object.keys(categoryStats).map(category => {
    const { total, count } = categoryStats[category];
    const average = total / count;
    return { category, average };
  });
  
  // Step 3: Filter categories with average price above 50
  const highPricedCategories = categoryAverages.filter(cat => cat.average > 50);
  
  console.log(highPricedCategories);

  
// Utiliser reduce() pour regrouper les produits par catégorie, tout en calculant la somme des prix et le nombre de produits par catégorie.
// Utiliser map() pour transformer ces résultats en objets contenant le nom de la catégorie et le prix moyen.
// Utiliser filter() pour ne garder que les catégories avec un prix moyen supérieur à 50.

// Explication du code :

// Regroupement et calculs :
// Utilisez reduce() pour créer un objet (categoryStats) où chaque clé est le nom d'une catégorie. Pour chaque produit, on ajoute son prix au total de la catégorie et on incrémente le nombre de produits.

// Calcul de la moyenne :
// Avec Object.keys() et map(), transformez l'objet categoryStats en un tableau d'objets qui contiennent le nom de la catégorie et le prix moyen.

//Filtrage :
// Utilisez filter() pour obtenir uniquement les catégories dont la moyenne des prix est supérieure à 50.