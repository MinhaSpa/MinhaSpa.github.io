function sendWhatsApp(element) {
    const phoneNumber = '527354386066'; // Número de WhatsApp

    const message = element.getAttribute('data-message'); // Obtiene el mensaje del atributo data-message
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    console.log("Redirigiendo a:", url); // Para verificar la URL generada en consola
    window.location.href = url; // Redirige a WhatsApp
}
