const students = [
    { name: "Alice", scores: [90, 85, 92] },
    { name: "Bob", scores: [75, 80, 85] },
    { name: "Charlie", scores: [90, 95, 85] },
    { name: "Jack", scores: [100, 100, 100] }
  ];
  
  const highPerformingStudents = students
    .map(student => {
      const total = student.scores.reduce((acc, score) => acc + score, 0); // Calcule la somme des scores
      const average = total / student.scores.length; // Calcule la moyenne
      return { name: student.name, average }; // Retourne un nouvel objet avec le nom et la moyenne
    })
    .filter(student => student.average > 90); // Filtre les étudiants avec une moyenne supérieure à 90
  
  console.log(highPerformingStudents);
  

  // Explication du code :
// map() :
// Pour chaque étudiant, nous calculons la somme de ses scores avec reduce().
// Nous divisons ensuite la somme par le nombre de scores pour obtenir la moyenne.
// Nous retournons un nouvel objet contenant le nom de l'étudiant et sa moyenne.

// filter() :
// Après avoir obtenu les moyennes, nous filtrons l'array pour ne garder que les étudiants dont la moyenne est supérieure à 90.