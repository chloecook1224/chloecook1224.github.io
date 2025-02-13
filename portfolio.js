// Simple contact form validation
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Thank you for contacting me, ' + name + '! I will get back to you soon.');
        // Optionally, reset the form fields
        document.getElementById('contact-form').reset();
    } else {
        alert('Please fill out all fields.');
    }
});
