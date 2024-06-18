function validateForm() {
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var consent = document.getElementById("consent").checked;
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    var phonePattern = /^[0-9]{10}$/;

    if (!emailPattern.test(email)) {
        alert("Veuillez entrer une adresse email valide.");
        return false;
    }

    if (!phonePattern.test(phone)) {
        alert("Veuillez entrer un numéro de téléphone valide.");
        return false;
    }

    if (!consent) {
        alert("Vous devez consentir au traitement de vos données personnelles.");
        return false;
    }

    return true;
}