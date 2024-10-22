// Fonction pour afficher la grille de morpion
function afficherGrille(grille) {
    for (let ligne of grille) {
      console.log(ligne.join(' ')); // Affiche chaque ligne avec un espace entre les éléments
    }
  }
  
  // Fonction pour détecter le gagnant
  function detecterGagnant(grille) {
    // Vérifier les lignes
    for (let i = 0; i < grille.length; i++) {
      if (grille[i][0] === grille[i][1] && grille[i][1] === grille[i][2]) {
        return { joueur: grille[i][0], ligne: i + 1 }; // Retourne le joueur et la ligne gagnante (1-indexé)
      }
    }
  
    // Vérifier les colonnes
    for (let i = 0; i < grille[0].length; i++) {
      if (grille[0][i] === grille[1][i] && grille[1][i] === grille[2][i]) {
        return { joueur: grille[0][i], colonne: i + 1 }; // Retourne le joueur et la colonne gagnante (1-indexé)
      }
    }
  
    return -1; // Aucune ligne ou colonne gagnante
  }
  
  // Exemple de grille de morpion
  const grille = [['X', 'O', 'X'], ['X', 'X', 'X'], ['X', 'O', 'O']];
  
  // Afficher la grille
  afficherGrille(grille); // Affiche la grille dans la console
  
  // Détecter le gagnant
  const resultat = detecterGagnant(grille);
  if (resultat !== -1) {
    if (resultat.ligne) {
      console.log(`Le joueur ${resultat.joueur} a gagné à la ligne ${resultat.ligne}`);
    } else {
      console.log(`Le joueur ${resultat.joueur} a gagné à la colonne ${resultat.colonne}`);
    }
  } else {
    console.log("Pas de gagnant");
  }
  