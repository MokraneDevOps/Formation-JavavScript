const displayArray = (tab, option) => {
    let result = ''; // Initialiser une chaîne vide pour stocker le résultat
  
    // Boucle pour parcourir le tableau
    for (let i = 0; i < tab.length; i++) {
      result += tab[i]; // Ajouter l'élément courant à la chaîne result
  
      // Vérifier si on doit ajouter un séparateur
      if (i < tab.length - 1) { // S'assurer de ne pas ajouter un séparateur après le dernier élément
        if (option) {
          result += ', '; // Ajouter une virgule si option est true
        } else {
          result += ' '; // Ajouter un espace si option est false
        }
      }
    }
  
    return result; // Retourner la chaîne résultante
  };
  
  // Exemples
  console.log(displayArray(["Pomme", "Banane", "Abricot", "Cerise"], false)); // Affichera "Pomme Banane Abricot Cerise"
  console.log(displayArray(["Pomme", "Banane", "Abricot", "Cerise"], true)); // Affichera "Pomme, Banane, Abricot, Cerise"

  
  // Explication du code :
// Initialisation : La variable result est initialisée pour stocker le résultat final.
// Boucle for : Parcourt chaque élément du tableau tab.
// Concaténation : Chaque élément est ajouté à result.
// Gestion des séparateurs :
// Un séparateur est ajouté après chaque élément sauf le dernier.
// Si option est true, une virgule suivie d'un espace est ajoutée ; sinon, un espace est utilisé.
// Retourner le résultat : La fonction retourne la chaîne concaténée.