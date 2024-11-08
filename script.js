document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        document.getElementById('response-message').innerText = "¡Gracias, " + name + "! Tu mensaje ha sido enviado.";
    } else {
        document.getElementById('response-message').innerText = "Por favor, completa todos los campos.";
    }
});
