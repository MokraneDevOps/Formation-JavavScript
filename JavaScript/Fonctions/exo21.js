/* EXERCICE 21
  Complétez l'écriture de cette fonction afin que lorsqu'on l'appelle ci dessous avec 3 arguments différents, il s'affiche :
  Le mot de passe est manquant
  Le mot de passe est valide
  Le mot de passe est trop court
*/

const checkPassword = password => {
    if (password === undefined) {
      console.log('Le mot de passe est manquant');
    } else {
      // Début de votre code
      if (password.length < 6) {
        console.log('Le mot de passe est trop court'); // Condition pour vérifier si le mot de passe est trop court
      } else {
        console.log('Le mot de passe est valide'); // Si aucune des conditions précédentes n'est remplie, le mot de passe est valide
      }
      // Fin de votre code
    }
  }
  
  checkPassword();          // Va afficher "Le mot de passe est manquant"
  checkPassword('azerty');  // Va afficher "Le mot de passe est valide"
  checkPassword('azert');   // Va afficher "Le mot de passe est trop court"
  