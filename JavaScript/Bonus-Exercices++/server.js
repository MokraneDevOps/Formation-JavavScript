const readline = require('readline');
const http = require('http');
const fs = require('fs');
const path = require('path');

// Fonction pour générer un nombre aléatoire entre 0 et 100
const randomNum = Math.floor(Math.random() * 101);

// Configurer l'interface de lecture pour le jeu
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Créer un serveur HTTP pour servir le fichier HTML et l'image
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    // Servir le fichier HTML
    fs.readFile('index.html', (err, data) => {
      if (err) {
        res.writeHead(500, {'Content-Type': 'text/plain'});
        res.end('Erreur du serveur');
      } else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
      }
    });
  } else if (req.url === '/image.png') {
    // Servir l'image
    const imgPath = path.join(__dirname, 'image.png');
    fs.readFile(imgPath, (err, data) => {
      if (err) {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Image non trouvée');
      } else {
        res.writeHead(200, {'Content-Type': 'image/png'});
        res.end(data);
      }
    });
  } else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('Page non trouvée');
  }
});

// Démarrer le serveur sur le port 3000
server.listen(3000, () => {
  console.log("Serveur lancé sur http://localhost:3000");
});

console.log("Essayez de deviner un nombre entre 0 et 100 :");

const guessNumber = () => {
  rl.question('Entrez votre nombre: ', (answer) => {
    const userGuess = parseInt(answer, 10);

    if (isNaN(userGuess)) {
      console.log("Veuillez entrer un nombre valide.");
      guessNumber();
    } else if (userGuess < randomNum) {
      console.log("Trop petit, essayez un nouveau nombre.");
      guessNumber();
    } else if (userGuess > randomNum) {
      console.log("Trop grand, essayez un nouveau nombre.");
      guessNumber();
    } else {
      console.log
      
      // Importation dynamique du module 'open' (ESM)
      import('open').then((open) => {
        open.default('http://localhost:3000');
      }).catch((err) => {
        console.error("Erreur lors de l'ouverture du navigateur : ", err);
      });

      rl.close();
    }
  });
};

guessNumber();



// sodu npm install open


// Explication 
// Serveur HTTP : Le serveur est créé avec http.createServer pour servir le fichier index.html et l'image image.png.

// Si l'utilisateur accède à la racine (/), le fichier index.html est servi.
// Si l'utilisateur accède à /image.png, l'image est servie.
// Jeu de devinettes : Le jeu de devinettes est lancé dans le terminal. Si l'utilisateur devine correctement, le serveur lance la page index.html dans le navigateur.

// Module open : Une fois que l'utilisateur a deviné le bon nombre, le navigateur est automatiquement ouvert pour afficher la page index.html grâce à open.

// Étape 2: Placer l'image dans le bon répertoire
// Assurez-vous que le fichier image.png est dans le même répertoire que votre fichier server.js.