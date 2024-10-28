function transform(phrases, num) {
    return phrases.map(phrase => {
        // Vérifier si la longueur de la phrase est supérieure à num
        if (phrase.length > num) {
            // Limiter la phrase à num caractères et ajouter "..."
            return phrase.slice(0, num) + '...';
        }
        // Retourner la phrase telle quelle si elle est déjà courte
        return phrase;
    });
}

// Exemple d'utilisation
const result = transform(["hello", "how are you"], 3);
console.log(result); // ["hel...", "how..."]



// Explication :
// Fonction transform :
// La fonction prend deux paramètres : phrases, un tableau de chaînes de caractères, et num, un nombre qui représente le nombre maximum de caractères autorisés dans chaque phrase.

// Utilisation de map :
// On utilise la méthode map pour créer un nouveau tableau basé sur les valeurs de phrases.

// Vérification de la longueur de la phrase :
// Pour chaque phrase, on vérifie si sa longueur dépasse num.

// Limitation de la chaîne :
// Si la longueur de la phrase dépasse num, on utilise slice(0, num) pour obtenir les premiers num caractères, puis on concatène ....

//Retour de la phrase originale :
// Si la phrase est déjà inférieure ou égale à num, elle est retournée telle quelle.