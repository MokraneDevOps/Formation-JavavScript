// Déclaration d'un objet bike1

const bike1 = {
    brand: "surly",
    wheels: 26,
    type: "randonneuse",
    accessories: [
      { name: "bell", price: 5 },
      { name: "light", price: 10 }
    ]
  };
  

 // Ici, bike1 est un objet avec plusieurs propriétés de types différents, incluant une brand en chaîne de caractères, des wheels en nombre, et un tableau accessories d'objets.


 // Lecture de valeurs d'un objet
// Deux méthodes sont possibles pour lire une propriété d’un objet :

// Avec la notation par points :

console.log(bike1.brand); // "surly"

//Avec la notation par crochets :
console.log(bike1["brand"]); // "surly"



// Ajout de users dans l'objet bike1 (structure complexe)

bike1.users = [
    { name: "Alice", age: 30, address: "123 Main St" },
    { name: "Bob", age: 40, address: "456 Park Ave" }
  ];
  console.log(bike1.users);

  // Modification d'une valeur dans un objet bike2

  const bike2 = {
    brand: "gosport",
    wheels: 29,
    type: "vtt",
  };
  console.log("Avant modification", bike2);
  
  // Modifier la valeur d'une clé
  bike2.brand = "Decathlon";
  console.log("Après modification", bike2);
  
  // Ajouter une clé
  bike2.price = 150;
  console.log("Après ajout de la clé 'price'", bike2);
  
  // Supprimer une clé
  delete bike2.type;
  console.log("Après suppression de la clé 'type'", bike2);
  
  // Utilisation de Object.keys

  const bike3 = {
    brand: "peugeot",
    wheels: 29,
    type: "sport",
  };
  
  // Récupérer les clés de l'objet sous forme de tableau
  const keys3 = Object.keys(bike3);
  console.log("Clés de bike3 en tableau :", keys3); // ["brand", "wheels", "type"]
  
  //Boucler sur un objet avec for...in 

  for (const key in bike3) {
    console.log(key, ":", bike3[key]);
  }
  // Résultat attendu:
  // brand : peugeot
  // wheels : 29
  // type : sport
  

  // Tableau d'objets et manipulation
// Imaginons un tableau bikes contenant plusieurs objets bike.

const bikes = [
    { brand: "surly", price: 90 },
    { brand: "gosport", price: 120 },
    { brand: "peugeot", price: 80 },
    { brand: "decathlon", price: 150 }
  ];
  
  // 1. Filtrer les vélos avec un prix inférieur à 100
  const affordableBikes = bikes.filter(bike => bike.price < 100);
  console.log("Vélos à moins de 100 € :", affordableBikes);
  
  // 2. Ajouter une clé pour chaque vélo (par exemple, stock)
  bikes.forEach(bike => bike.stock = true);
  console.log("Ajout de la clé 'stock' :", bikes);
  
  // 3. Récupérer un tableau des noms de marque des vélos
  const bikeBrands = bikes.map(bike => bike.brand);
  console.log("Tableau des noms de marques :", bikeBrands);
  
  // 4. Calculer le total des prix des vélos
  const totalCost = bikes.reduce((acc, bike) => acc + bike.price, 0);
  console.log("Coût total des vélos :", totalCost);
  

  // Explications
// filter : crée un nouveau tableau avec uniquement les vélos qui ont un prix inférieur à 100.
// forEach : ajoute une nouvelle propriété stock à chaque objet dans le tableau.
// map : transforme le tableau bikes en un tableau ne contenant que les noms de marque.
// reduce : additionne toutes les valeurs de price pour obtenir le coût total.