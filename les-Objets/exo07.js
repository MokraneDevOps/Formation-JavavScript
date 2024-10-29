const countries = [
    { name: "France" },
    { name: "Japon" },
    { name: "Colombie" },
    { name: "Canada" },
    { name: "Italie" }
  ];
  
  // Début de votre code
  let result = '';
  for (let i = 0; i < countries.length; i++) {
    result += countries[i].name; // Ajouter le nom du pays
    if (i < countries.length - 1) { // Vérifier si ce n'est pas le dernier pays
      result += (i === countries.length - 2) ? ' et ' : ', '; // Ajouter la virgule ou ' et '
    }
  }
  
  // Fin de votre code
  
  console.log(result); // Affiche "France, Japon, Colombie, Canada et Italie"
  

  // Explication :
// Boucle for : On parcourt le tableau countries pour accéder à chaque objet pays.
// Construction de la chaîne result :
// On ajoute le nom du pays courant à result.
//Si le pays courant n'est pas le dernier (vérifié avec i < countries.length - 1), on ajoute une virgule ou "et" selon la position.
// Si le pays est le second dernier (i === countries.length - 2), on ajoute " et " au lieu d'une virgule.
// Affichage du résultat : Enfin, on affiche le résultat construit.