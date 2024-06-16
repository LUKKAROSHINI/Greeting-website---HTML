// script.js
document.getElementById('wishForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const wish = document.getElementById('wish').value;
    alert(`Thank you, ${name}! Your wish: "${wish}" has been sent.`);
    // You can add functionality to actually send the wish to a server or email here
    document.getElementById('wishForm').reset();
});
