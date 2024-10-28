function retirerEs(phrase) {
    return phrase.split('e').join('');
}

// Exemple d'utilisation
const phrase = "Le développeur a écrit une application";
const phraseSansE = retirerEs(phrase);
console.log(phraseSansE);  // "L dév loppeur a écrit un application"
