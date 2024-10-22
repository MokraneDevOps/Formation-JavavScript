// EXERCICE 24
const checkNumber = (number) => {
    if (number % 2 === 0) {
      console.log("I am an even number"); // Affiche si le nombre est pair
    } else {
      console.log("I am an odd number");  // Affiche si le nombre est impair
    }
  };
  
  // Exemples d'utilisation
  checkNumber(9);    // Affiche "I am an odd number"
  checkNumber(8);    // Affiche "I am an even number"
  checkNumber(2);    // Affiche "I am an even number"
  checkNumber(1133); // Affiche "I am an odd number"
  