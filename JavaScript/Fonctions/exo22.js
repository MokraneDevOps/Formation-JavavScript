// EXERCICE 22 
const check100 = (number) => {
    if (number > 100) {
      console.log("I am greater than 100"); // Affiche si le nombre est supérieur à 100
    } else if (number < 100) {
      console.log("I am less than 100"); // Affiche si le nombre est inférieur à 100
    } else {
      console.log("I am equal to 100"); // Optionnel : Affiche si le nombre est égal à 100
    }
  };
  
  // Exemples d'utilisation
  check100(120); // Affiche "I am greater than 100"
  check100(10);  // Affiche "I am less than 100"
  check100(100);  // Affiche "I am = 100"