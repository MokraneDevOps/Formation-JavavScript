const readline = require('readline');

// Création de l'interface readline pour capturer les entrées de l'utilisateur
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Fonction pour générer un nombre aléatoire entre 0 et 100
const nombreAleatoire = Math.floor(Math.random() * 101);

// Fonction pour commencer le jeu
const devinerNombre = () => {
  rl.question('Devinez le nombre choisi entre 0 et 100 : ', (reponse) => {
    const nombreUtilisateur = parseInt(reponse, 10); // Conversion de la réponse en nombre
    
    // Comparaison du nombre entré par l'utilisateur avec le nombre choisi par l'ordinateur
    if (nombreUtilisateur < nombreAleatoire) {
      console.log('Trop petit, essayez un nouveau nombre.');
      devinerNombre(); // Relance la question
    } else if (nombreUtilisateur > nombreAleatoire) {
      console.log('Trop grand, essayez un nouveau nombre.');
      devinerNombre(); // Relance la question
    } else if (nombreUtilisateur === nombreAleatoire) {
      console.log('Bravo ! Vous avez deviné le bon nombre.');
      rl.close(); // Ferme l'interface readline
    } else {
      console.log('Entrée invalide, essayez à nouveau.');
      devinerNombre(); // Relance la question en cas d'entrée invalide
    }
  });
};

// Lancement du jeu
devinerNombre();

// Explication  :

// Création de l'interface readline :
// readline.createInterface permet de créer une interface pour recevoir des entrées de l'utilisateur via la console.

// Génération du nombre aléatoire :
// Math.floor(Math.random() * 101) génère un nombre entier aléatoire entre 0 et 100.

// Fonction devinerNombre() :
// Cette fonction est appelée pour poser la question à l'utilisateur.
// La fonction compare l'entrée de l'utilisateur avec le nombre choisi par l'ordinateur et donne un feedback (trop petit, trop grand, ou bravo).
// Si l'utilisateur ne devine pas le nombre, la fonction est appelée à nouveau pour permettre de réessayer.

// Boucle de jeu :
// Tant que l'utilisateur n'a pas trouvé le bon nombre, la question est reposée. Une fois le bon nombre trouvé, le jeu se termine et rl.close() ferme l'interface.

