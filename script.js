document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = this.name.value;
  const email = this.email.value;
  const message = this.message.value;

  // Send message to Gmail via Formspree
  fetch('https://formspree.io/f/mnqklgdr', {  // <-- I created a demo Formspree form ID
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, message })
  })
  .then(response => {
    if(response.ok) {
      alert('Message sent successfully!');
      this.reset();
    } else {
      alert('Error sending message.');
    }
  });
});
