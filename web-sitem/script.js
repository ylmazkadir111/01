document.getElementById("greetButton").addEventListener("click", function() {
    alert("Merhaba! Web siteme hoş geldin!");
});

document.getElementById("contactForm")?.addEventListener("submit", function(event) {
    event.preventDefault(); // Sayfanın yeniden yüklenmesini engeller
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        alert(`Teşekkürler, ${name}! Mesajınız alındı.`);
    } else {
        alert("Lütfen tüm alanları doldurun.");
    }
});