document.getElementById('subscription-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    alert(`Obrigado por assinar, ${email}!`);
});