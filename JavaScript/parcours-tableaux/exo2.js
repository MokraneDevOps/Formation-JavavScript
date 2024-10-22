const displayArray = (tab, option) => {
    let result = ''; // Initialisation d'une chaîne vide pour stocker le résultat
  
    // Boucle for pour parcourir le tableau
    for (let i = 0; i < tab.length; i++) {
      result += tab[i]; // Concatène l'élément courant à la chaîne result
  
      // Ajoute un séparateur si option est true et ce n'est pas le dernier élément
      if (option && i < tab.length - 1) {
        result += ', '; // Ajoute une virgule et un espace comme séparateur
      } else if (!option && i < tab.length - 1) {
        result += ' '; // Ajoute un espace comme séparateur
      }
    }
  
    return result; // Retourne la chaîne concaténée
  };
  
  // Exemples
  console.log(displayArray(["Pomme", "Banane", "Abricot", "Cerise"], false)); // Affichera "Pomme Banane Abricot Cerise"
  console.log(displayArray(["Pomme", "Banane", "Abricot", "Cerise"], true)); // Affichera "Pomme, Banane, Abricot, Cerise"

  

  // Explication :
// Initialisation : Une variable result est initialisée à une chaîne vide pour stocker le résultat final.
// Boucle for : Parcourt chaque élément du tableau tab.
// Concaténation : Chaque élément est ajouté à result.
// Gestion des séparateurs :
// Si option est true, une virgule et un espace sont ajoutés entre les éléments.
// Si option est false, un espace est ajouté entre les éléments.
// La condition i < tab.length - 1 évite d'ajouter un séparateur après le dernier élément.
// Retour du résultat : La chaîne concaténée est retournée.
