/*
EXERICE 04
  Objectif :
  Créer un objet `item` contenant les propriétés suivantes :
  - `id` ayant pour valeur 9461057
  - `title` ayant pour valeur 'Playstation 4'
  - `brand` ayant pour valeur 'Sony'
  - `price` ayant pour valeur 150
  - `seller` ayant pour valeur un objet ayant les propriétés suivantes :
    - `id` ayant pour valeur 142763
    - `name` ayant pour valeur 'Sofiane'
*/

// Début de votre code
const item = {
    id: 9461057,
    title: 'Playstation 4',
    brand: 'Sony',
    price: 150,
    seller: {
        id: 142763,
        name: 'Sofiane'
    }
};
// Fin de votre code

console.log(item);


// Explications :
// Création de l'objet item : L'objet est défini avec plusieurs propriétés de base : id, title, brand, price.
// Propriété seller : seller est un sous-objet contenant à son tour deux propriétés : id et name.
// Affichage de l'objet : La ligne console.log(item); affichera l'intégralité de l'objet item dans la console.