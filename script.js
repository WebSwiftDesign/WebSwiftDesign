document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Collecter les données du formulaire
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const date = document.getElementById('date').value;
    const message = document.getElementById('message').value;

    // Créer un objet contenant les données
    const templateParams = {
        name: name,
        email: email,
        phone: phone,
        date: date,
        message: message
    };

    // Envoyer l'email via EmailJS
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
        .then(function(response) {
            alert('Votre message a été envoyé avec succès!');
        }, function(error) {
            alert('Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer.');
        });
});
