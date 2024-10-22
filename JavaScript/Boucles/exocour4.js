// EXERCICE COURS 4
const displayNums = (numMax) => {
    for (let i = 0; i <= numMax; i++) {
      console.log(i);
    }
  }
  
  // Exemple d'utilisation
  displayNums(3);  // Affiche 0, 1, 2, 3
  displayNums(101);  // Affiche les nombres de 0 à 101

  
 //  Explication :
// La fonction displayNums prend un paramètre numMax, qui est le nombre maximal jusqu'où la boucle doit compter.
// Une boucle for est utilisée pour parcourir tous les nombres de 0 à numMax.
// console.log(i) est utilisé à chaque itération pour afficher la valeur actuelle de i