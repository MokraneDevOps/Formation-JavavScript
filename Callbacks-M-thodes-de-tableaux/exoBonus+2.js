const shoppingSpree = (arr) => {
    // Utiliser reduce pour calculer la somme des prix
    return arr.reduce((total, item) => total + item.price, 0);
};

const wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

console.log(shoppingSpree(wishlist)); // 227005


// Explication :

// Fonction shoppingSpree :
// La fonction prend un tableau d'objets arr représentant votre liste de souhaits.

// Utilisation de reduce :
// La méthode reduce prend deux paramètres : une fonction de rappel et une valeur initiale (dans ce cas, 0).
// La fonction de rappel prend deux arguments : total, qui est l'accumulateur qui conserve la somme actuelle, et item, qui représente chaque objet de la liste de souhaits.
// Pour chaque item, la fonction additionne son price à total.