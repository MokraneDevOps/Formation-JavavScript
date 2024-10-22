// openMorpion.js
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import open from 'open';

// Obtenir le chemin du fichier actuel
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Chemin vers le fichier HTML
const filePath = join(__dirname, 'index.html');

// Ouvrir le fichier HTML dans le navigateur par défaut
open(filePath).catch(err => {
    console.error("Erreur lors de l'ouverture du navigateur : ", err);
});
