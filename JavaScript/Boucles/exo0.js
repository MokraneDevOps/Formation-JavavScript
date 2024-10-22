// EXERCICE 0
const generateHypens = (num) => {
    let str = '';
  
    // Début de votre code
    for (let i = 0; i < num; i++) {
      str += '-';
    }
    // Fin de votre code
  
    return str;
  }
  
  console.log(generateHypens(1)); // Doit afficher `-`
  console.log(generateHypens(2)); // Doit afficher `--`
  console.log(generateHypens(4)); // Doit afficher `----`
  console.log(generateHypens(19)); // Doit afficher `-------------------`

  
  // Explication :
// et str = ''; : On initialise une chaîne vide pour stocker les tirets.
// for (let i = 0; i < num; i++) : La boucle for est utilisée pour parcourir de 0 à num-1. À chaque itération, on ajoute un tiret à la chaîne str.
// str += '-' : Ajoute un tiret (-) à chaque itération.