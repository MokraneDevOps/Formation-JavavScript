const generatePassword = (num) => {
    let password = '';
    
    for (let i = 0; i < num; i++) {
      // Générer un nombre aléatoire entre 33 et 126 (caractères imprimables ASCII)
      let randomCharCode = Math.floor(Math.random() * (126 - 33 + 1)) + 33;
      // Convertir ce code en un caractère
      password += String.fromCharCode(randomCharCode);
    }
  
    return password;
  }
  
  // Tests
  console.log(generatePassword(8));  // Affiche un mot de passe aléatoire de 8 caractères
  console.log(generatePassword(12)); // Affiche un mot de passe aléatoire de 12 caractères
  console.log(generatePassword(16)); // Affiche un mot de passe aléatoire de 16 caractères
  



  // Explication :
// Boucle for : La boucle se répète num fois pour générer chaque caractère du mot de passe.
// Génération de caractères :
// Math.random() génère un nombre aléatoire entre 0 et 1.
// En le multipliant et en l'arrondissant avec Math.floor(), on obtient un code ASCII compris entre 33 et 126, qui correspond aux caractères imprimables (lettres, chiffres, symboles).
// String.fromCharCode() : Convertit le code ASCII généré en un caractère.
// Concaténation : Chaque caractère est ajouté à la variable password.
// Retour : Le mot de passe généré est renvoyé une fois la boucle terminée.