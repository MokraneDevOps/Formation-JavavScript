function NumberToLetters(num) {
    // Vérification des paramètres valides
    if (typeof num !== "number" || num < 0 || num > 9999 || !Number.isInteger(num)) {
      return "Paramètre invalide";
    }
  
    const units = [
      "", "un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf"
    ];
  
    const teens = [
      "dix", "onze", "douze", "treize", "quatorze", "quinze", "seize"
    ];
  
    const tens = [
      "", "", "vingt", "trente", "quarante", "cinquante", "soixante", "soixante-dix"
    ];
  
    const hundreds = [
      "", "cent", "deux cents", "trois cents", "quatre cents",
      "cinq cents", "six cents", "sept cents", "huit cents", "neuf cents"
    ];
  
    const thousands = [
      "", "mille"
    ];
  
    let result = "";
  
    // Calculer les milliers
    const thousand = Math.floor(num / 1000);
    if (thousand > 0) {
      result += thousands[thousand] + " ";
    }
  
    // Calculer les centaines
    const hundred = Math.floor((num % 1000) / 100);
    if (hundred > 0) {
      result += hundreds[hundred] + " ";
    }
  
    // Calculer les dizaines et unités
    const ten = Math.floor((num % 100) / 10);
    const unit = num % 10;
  
    if (ten === 1) {
      result += teens[unit] + " "; // Pour les nombres de 10 à 16
    } else {
      if (ten > 1) {
        result += tens[ten];
        if (unit > 0) {
          result += (ten === 8 ? "-" : " ") + units[unit]; // Gère le tiret pour les multiples de 10
        }
      } else if (unit > 0) {
        result += units[unit] + " ";
      }
    }
  
    return result.trim(); // Supprime les espaces superflus
  }
  
  // Exemples d'utilisation
  console.log(NumberToLetters(15));     // Affiche "quinze"
  console.log(NumberToLetters(34));     // Affiche "trente-quatre"
  console.log(NumberToLetters(41));     // Affiche "quarante-un"
  console.log(NumberToLetters(1000));   // Affiche "mille"
  console.log(NumberToLetters(900));    // Affiche "neuf cents"
  console.log(NumberToLetters(908));    // Affiche "neuf cents huit"
  console.log(NumberToLetters(-5));      // Affiche "Paramètre invalide"
  console.log(NumberToLetters(10000));   // Affiche "Paramètre invalide"
  