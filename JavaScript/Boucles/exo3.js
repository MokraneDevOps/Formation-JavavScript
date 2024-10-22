// EXERCICE 3
const sumNumbers = (num) => {
    let sum = 0; // Variable temporaire pour stocker la somme
  
    // début de votre code
    for (let i = 1; i <= num; i++) { // On commence à 1 et on va jusqu'à num inclus
      sum += i; // On ajoute i à la somme
    }
    // fin de votre code
  
    return sum; // On retourne la somme calculée
  }
  
  console.log(sumNumbers(3)); // affiche 6 (car 1+2+3 = 6)
  console.log(sumNumbers(5)); // affiche 15 (car 1+2+3+4+5 = 15)
  console.log(sumNumbers(8)); // affiche 36 (car 1+2+...+8 = 36)

  
  // Explication :
// let sum = 0; : On initialise une variable sum à 0 pour commencer la somme.
// for (let i = 1; i <= num; i++) : On boucle de 1 à num inclus. On commence à 1 car on ne veut pas inclure 0 dans la somme.
// sum += i; : On ajoute la valeur actuelle de i à sum à chaque itération.
// return sum; : À la fin de la boucle, on retourne la somme calculée.