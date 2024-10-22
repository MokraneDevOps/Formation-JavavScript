const readline = require('readline');

// Liste de mots possibles pour le jeu
const words = ['javascript', 'nodejs', 'ordinateur', 'programmation', 'greta'];

// Sélectionner un mot aléatoire
const secretWord = words[Math.floor(Math.random() * words.length)];

// Tableau pour stocker l'état actuel du mot deviné (avec des underscores pour les lettres non trouvées)
let guessedWord = Array(secretWord.length).fill('_');

// Nombre maximum d'erreurs autorisées
const maxErrors = 6;
let errors = 0; // Compteur d'erreurs
let guessedLetters = []; // Lettres déjà devinées

// Initialisation de readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Fonction pour afficher l'état actuel du jeu
const displayState = () => {
  console.log(`\nMot à deviner: ${guessedWord.join(' ')}`);
  console.log(`Lettres devinées: ${guessedLetters.join(', ')}`);
  console.log(`Erreurs: ${errors}/${maxErrors}`);
};

// Fonction pour deviner une lettre
const guessLetter = () => {
  rl.question('Devinez une lettre: ', (letter) => {
    letter = letter.toLowerCase(); // Convertir la lettre en minuscule

    // Vérifier si la lettre a déjà été devinée
    if (guessedLetters.includes(letter)) {
      console.log(`Vous avez déjà deviné la lettre "${letter}".`);
    } else {
      guessedLetters.push(letter);

      // Vérifier si la lettre est dans le mot secret
      if (secretWord.includes(letter)) {
        console.log(`Bonne réponse, la lettre "${letter}" est dans le mot !`);

        // Mettre à jour le tableau guessedWord
        for (let i = 0; i < secretWord.length; i++) {
          if (secretWord[i] === letter) {
            guessedWord[i] = letter;
          }
        }
      } else {
        console.log(`La lettre "${letter}" n'est pas dans le mot.`);
        errors++;
      }
    }

    // Vérifier si le jeu est gagné ou perdu
    if (guessedWord.join('') === secretWord) {
      console.log(`\nFélicitations ! Vous avez trouvé le mot "${secretWord}". Vous avez gagné !`);
      rl.close();
    } else if (errors >= maxErrors) {
      console.log(`\nVous avez perdu ! Le mot secret était "${secretWord}".`);
      rl.close();
    } else {
      displayState(); // Afficher l'état actuel
      guessLetter(); // Recommencer la boucle de jeu
    }
  });
};

// Lancer le jeu
console.log("Bienvenue au jeu du pendu !");
displayState(); // Afficher l'état initial du jeu
guessLetter(); // Commencer à deviner les lettres
