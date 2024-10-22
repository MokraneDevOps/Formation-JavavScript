const displayArray = (tab) => {
    let result = ''; // Initialisation d'une chaîne vide pour stocker le résultat
  
    // Boucle for pour parcourir le tableau
    for (let i = 0; i < tab.length; i++) {
      result += tab[i]; // Concatène l'élément courant à la chaîne result
  
      // Ajoute un espace entre les éléments, sauf après le dernier
      if (i < tab.length - 1) {
        result += ' ';
      }
    }
  
    return result; // Retourne la chaîne concaténée
  };
  
  // Exemples
  console.log(displayArray(["halem", "francis", "celine"])); // Affichera "halem francis celine"
  console.log(displayArray(["Pomme", "Banane", "Abricot", "Cerise"])); // Affichera "Pomme Banane Abricot Cerise"

  

  // Explication :
// Initialisation : Une variable result est initialisée à une chaîne vide pour stocker le résultat final.
// Boucle for : Parcourt chaque élément du tableau tab.
// Concaténation : Chaque élément est ajouté à result. 
// Un espace est ajouté après chaque élément sauf après le dernier, ce qui évite d'avoir un espace supplémentaire à la fin de la chaîne.
// Retour du résultat : La chaîne concaténée est retournée.