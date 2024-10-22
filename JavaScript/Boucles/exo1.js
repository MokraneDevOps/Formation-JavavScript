// EXERCICE 1
const generateString = (num) => {
    let str = "";
  
    // Début de votre code
    for (let i = 0; i < num; i++) {
      str += '-'; // Ajoute un tiret à la chaîne
    }
    str += 'o'; // Ajoute le caractère 'o' à la fin
    // Fin de votre code
  
    return str;
  };
  
  console.log(generateString(1)); // Doit afficher `o`
  console.log(generateString(2)); // Doit afficher `-o`
  console.log(generateString(4)); // Doit afficher `---o`
  console.log(generateString(19)); // Doit afficher `------------------o`

  
  // Explication :
// let str = ""; : On initialise une chaîne vide pour construire le résultat.
// for (let i = 0; i < num; i++) : On boucle de 0 à num - 1.
// str += '-'; : On ajoute un tiret à la chaîne à chaque itération.
// str += 'o'; : Une fois la boucle terminée, on ajoute le caractère o à la fin de la chaîne.