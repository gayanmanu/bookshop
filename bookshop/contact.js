function submitContactForm(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get form values
    const contactNo = document.getElementById('contact-no').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const facebookName = document.getElementById('facebook-name').value;

    // Simple validation (optional)
   