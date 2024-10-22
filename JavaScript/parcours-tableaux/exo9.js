const reverseArray = (array) => {
    let reversedArray = [];
    
    // Parcourir le tableau de la fin vers le début
    for (let i = array.length - 1; i >= 0; i--) {
      reversedArray.push(array[i]);
    }
    
    return reversedArray; // Retourner le tableau inversé
  };
  
  // Tests de la fonction
  console.log(reverseArray(['pomme', 'poire', 'brocolis'])); // affiche ['brocolis','poire','pomme']
  console.log(reverseArray([1, 2, 40, 12, 5])); // affiche [5,12,40,2,1]

  

  // Explication :
// Initialisation : On crée un nouveau tableau reversedArray pour stocker les éléments dans l'ordre inversé.
// Boucle for : On parcourt le tableau initial de la fin vers le début (en partant de array.length - 1).
// À chaque itération, on ajoute l'élément dans reversedArray.
// Résultat : À la fin de la boucle, le tableau est inversé et retourné.