// EXERCICE 5
const generateString = (height, width) => {
    let str = '';
  
    // Début de votre code
    for (let i = 0; i < height; i++) { // Boucle pour chaque ligne
      for (let j = 0; j < width; j++) { // Boucle pour chaque colonne
        str += '-'; // On ajoute un tiret à la chaîne
      }
      str += '\n'; // On ajoute un retour à la ligne après chaque ligne de tirets
    }
    // Fin de votre code
  
    return str;
  }
  
  const heightExample = 5;
  const widthExample = 5;
  console.log(generateString(heightExample, widthExample));

  
  // Explication :
// let str = ''; : On initialise une chaîne vide pour construire notre bloc.
// for (let i = 0; i < height; i++) : La première boucle parcourt le nombre de lignes.
// for (let j = 0; j < width; j++) : La deuxième boucle parcourt le nombre de colonnes pour chaque ligne.
// str += '-'; : On ajoute un tiret à la chaîne pour chaque colonne.
// str += '\n'; : Après avoir ajouté les tirets pour une ligne, on ajoute un retour à la ligne.
// return str; : Enfin, on retourne la chaîne construite.