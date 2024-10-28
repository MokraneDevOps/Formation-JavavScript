function estPalindrome(mot) {
    // Convertir le mot en minuscules pour éviter des problèmes de casse
    const motNormalise = mot.toLowerCase();
    
    // Diviser le mot en caractères, inverser l'ordre et les rejoindre en une chaîne
    const motInverse = motNormalise.split('').reverse().join('');
    
    // Vérifier si le mot normalisé est égal au mot inversé
    return motNormalise === motInverse;
}

// Exemple d'utilisation
const mot1 = "Radar";
const mot2 = "Bonjour";

console.log(`${mot1} est un palindrome : ${estPalindrome(mot1)}`); // Radar est un palindrome : true
console.log(`${mot2} est un palindrome : ${estPalindrome(mot2)}`); // Bonjour est un palindrome : false


// Explication :
// Fonction estPalindrome :
// La fonction prend un paramètre mot, qui est le mot que l'on souhaite vérifier.

// Normalisation du mot :
// On convertit le mot en minuscules avec toLowerCase() pour s'assurer que la vérification ne soit pas sensible à la casse.

// Utilisation de split, reverse, et join :
// split('') divise le mot normalisé en un tableau de caractères.
// reverse() inverse l'ordre des éléments du tableau.
// join('') rejoint les caractères inversés en une nouvelle chaîne.
// Vérification du palindrome :
// On compare le mot normalisé avec sa version inversée. Si les deux sont identiques, cela signifie que le mot est un palindrome.