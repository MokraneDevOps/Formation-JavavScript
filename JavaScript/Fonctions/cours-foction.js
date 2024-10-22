

const showDatetime = () => {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('fr-FR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    const formattedTime = currentDate.toLocaleTimeString('fr-FR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });

    console.log(`Date : ${formattedDate}, Heure : ${formattedTime}`);
};

showDatetime();


const saySomething = (mystring) => {
    if (typeof mystring === 'string' && mystring.trim() !== '') {
        console.log(mystring);
    } else {
        console.log('Veuillez entrer une chaîne de caractères valide.');
    }
};

// Appels à la fonction avec des exemples
saySomething("toto");
saySomething("tata");
saySomething("titi");
saySomething("Mokrane");  // Test avec une chaîne vide
