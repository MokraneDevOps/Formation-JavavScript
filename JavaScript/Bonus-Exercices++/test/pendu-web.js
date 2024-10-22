const readline = require('readline');
const fs = require('fs');
const { exec } = require('child_process'); // Importer exec pour ouvrir le fichier HTML

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

// Fonction pour générer une page HTML avec le résultat
const generateHTML = (message) => {
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="fr">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Jeu du Pendu</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          text-align: center;
          margin-top: 50px;
        }
        .success {
          color: green;
          font-size: 24px;
        }
        .failure {
          color: red;
          font-size: 24px;
        }
      </style>
    </head>
    <body>
      <h1 class="${message.success ? 'success' : 'failure'}">${message.text}</h1>
      <h2>Le mot était : ${secretWord}</h2>
      <img src="https://media.giphy.com/media/3o7TKSjRrfIPjeiVyY/giphy.gif" alt="Victoire" style="width: 200px;">
    </body>
    </html>
  `;

  // Écrire le contenu HTML dans un fichier
  fs.writeFileSync('result.html', htmlContent, (err) => {
    if (err) throw err;
  });
};

// Fonction pour ouvrir le fichier HTML dans le navigateur
const openBrowser = () => {
  const command = process.platform === 'win32' ? 'start' : 'xdg-open'; // Utiliser 'xdg-open' pour Linux et 'start' pour Windows

  exec(`${command} result.html`, (err) => {
    if (err) {
      console.error("Erreur lors de l'ouverture du navigateur :", err);
    }
  });
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
        console.log(`\x1b[32mBonne réponse, la lettre "${letter}" est dans le mot !\x1b[0m`); // Vert
        // Mettre à jour le tableau guessedWord
        for (let i = 0; i < secretWord.length; i++) {
          if (secretWord[i] === letter) {
            guessedWord[i] = letter;
          }
        }
      } else {
        console.log(`\x1b[31mLa lettre "${letter}" n'est pas dans le mot.\x1b[0m`); // Rouge
        errors++;
      }
    }

    // Vérifier si le jeu est gagné ou perdu
    if (guessedWord.join('') === secretWord) {
      console.log(`\nFélicitations ! Vous avez trouvé le mot "${secretWord}". Vous avez gagné !`);
      generateHTML({ success: true, text: "Bravo, vous avez gagné !" });
      openBrowser(); // Ouvrir le navigateur avec le résultat
      rl.close();
    } else if (errors >= maxErrors) {
      console.log(`\nVous avez perdu ! Le mot secret était "${secretWord}".`);
      generateHTML({ success: false, text: "Dommage, vous avez perdu !" });
      openBrowser(); // Ouvrir le navigateur avec le résultat
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
