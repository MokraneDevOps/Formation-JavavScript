// Fonction qui filtre les éléments qui ne sont pas des chaînes de caractères
function removeStrings(arr) {
    return arr.filter(element => typeof element !== 'string');
}

// Exemple d'utilisation
const mixedArray = [1, 'hello', 2, 'world', { name: 'John' }, [1, 2], 3.14, 'test', true];
const filteredArray = removeStrings(mixedArray);

console.log(filteredArray); // Affiche : [1, 2, { name: 'John' }, [1, 2], 3.14, true]



// Explication :
// removeStrings : C'est une fonction qui prend un tableau arr en paramètre.
// filter() : Cette méthode crée un nouveau tableau contenant tous les éléments qui passent le test fourni par la fonction.
// typeof element !== 'string' : Cette condition vérifie que le type de l'élément n'est pas une chaîne de caractères. Si c'est vrai, l'élément est conservé dans le tableau résultant.