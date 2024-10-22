// EXERCICE 09
// Écrivez la fonction showAddress, qui est exécutée ci-dessous.
// Cette fonction prend 3 paramètres en entrée et les affiche un par un dans le terminal

const showAddress = (rue, codePostal, ville) => {
    // Début de votre code
    console.log(rue);        // Affiche la rue
    console.log(codePostal); // Affiche le code postal
    console.log(ville);      // Affiche la ville
    // Fin de votre code
}

// Appels de la fonction avec différents paramètres
showAddress('30 rue de l’ancienne mairie', '92100', 'Boulogne Billancourt'); // Doit afficher sur 3 lignes
showAddress('3 rue du paradis', '75008', 'Paris'); // Doit afficher sur 3 lignes
showAddress('17 avenue des champs elysees', '75008', 'Paris'); // Doit afficher sur 3 lignes
