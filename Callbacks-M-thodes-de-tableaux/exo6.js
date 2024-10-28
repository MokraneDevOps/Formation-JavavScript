function compterOccurrences(phrase, str) {
    // On divise la phrase par la chaîne à compter
    const parties = phrase.split(str);

    // La longueur du tableau résultant -1 donne le nombre d'occurrences
    return parties.length - 1;
}

// Exemple d'utilisation
const phrase = "Bonjour, bonsoir! Bonjour tout le monde. Bonjour!";
const str = "Bonjour";
const result = compterOccurrences(phrase, str);
console.log(`Le mot "${str}" apparaît ${result} fois dans la phrase.`); // Le mot "Bonjour" apparaît 3 fois dans la phrase.



// Explication :
// Fonction compterOccurrences :

// La fonction prend en paramètres une phrase (la chaîne dans laquelle nous voulons compter les occurrences) et str (la sous-chaîne que nous voulons compter).

//Utilisation de split :
// La méthode split(str) divise la phrase en un tableau, en utilisant str comme délimiteur. 
// Chaque occurrence de str dans phrase crée une nouvelle entrée dans le tableau. 
// Par exemple, pour la phrase "Bonjour, bonsoir! Bonjour tout le monde. Bonjour!" et la sous-chaîne "Bonjour", le tableau résultant serait :

// [
//  "Bonjour, bonsoir! ", 
//    " tout le monde. ", 
//    "!"
//   ]

// Calcul du nombre d'occurrences : 
// e nombre d'occurrences de str dans la phrase est donné par la longueur du tableau résultant moins un.
// Cela fonctionne parce qu'il y a toujours un segment supplémentaire au début du tableau pour le texte avant la première occurrence de str.

  