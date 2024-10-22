const fs = require('fs');
const path = require('path');

// Fonction pour générer les anagrammes
const generateAnagrams = (str) => {
  const results = [];

  const permute = (arr, l, r) => {
    if (l === r) {
      results.push(arr.join(''));
    } else {
      for (let i = l; i <= r; i++) {
        [arr[l], arr[i]] = [arr[i], arr[l]]; // Échange
        permute(arr, l + 1, r); // Appel récursif
        [arr[l], arr[i]] = [arr[i], arr[l]]; // Annuler l'échange (backtrack)
      }
    }
  };

  permute(str.split(''), 0, str.length - 1);
  return results;
};

// Fonction pour créer le fichier HTML et y écrire les anagrammes
const createHTMLFile = (anagrams) => {
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Anagrammes</title>
        <style>
            table {
                width: 50%;
                border-collapse: collapse;
                margin: 20px auto;
            }
            th, td {
                border: 1px solid #ddd;
                padding: 8px;
                text-align: center;
            }
            th {
                background-color: #f2f2f2;
            }
        </style>
    </head>
    <body>
        <h1 style="text-align: center;">Anagrammes de la chaîne</h1>
        <table>
            <thead>
                <tr>
                    <th>Anagrammes</th>
                </tr>
            </thead>
            <tbody>
                ${anagrams.map(anagram => `<tr><td>${anagram}</td></tr>`).join('')}
            </tbody>
        </table>
    </body>
    </html>
  `;

  const filePath = path.join(__dirname, 'anagrams.html');
  fs.writeFileSync(filePath, htmlContent);
  return filePath;
};

// Exemple de chaîne de 4 lettres
const inputString = 'abcd'; // Chaîne de 4 lettres
const anagrams = generateAnagrams(inputString);
const htmlFilePath = createHTMLFile(anagrams);

// Ouvrir le fichier HTML dans le navigateur
import('open').then((open) => {
  open.default(htmlFilePath);
}).then(() => {
  console.log('Le navigateur s\'est ouvert avec les anagrammes.');
}).catch(err => {
  console.error('Erreur lors de l\'ouverture du navigateur : ', err);
});
