document.addEventListener('DOMContentLoaded', function() {
    const subscriptionForm = document.getElementById('subscriptionForm');
    const emailInput = document.getElementById('email');

    subscriptionForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const emailInput = document.getElementById('email');
        const errorMessage = document.getElementById('errorMessage');
        const confirmationEmail = document.getElementById('confirmationEmail');

        // Simple email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            if (emailInput.value.trim() !== '') {
                errorMessage.textContent = 'Invalid email format';    
            } else {
                errorMessage.textContent = '';    
            }
            return;
        } else {
            errorMessage.textContent = ''; // Clear previous error messages
        }
        // Show success message
        document.getElementById('successMessage').style.display = 'block';
        confirmationEmail.innerText = emailInput.value;

        // Change the context when it's successful
        simulateSuccessfulSubscription(emailInput.value);
    });

    emailInput.addEventListener('input', function() {
        if (emailInput.checkValidity()) {
            emailInput.style.border = '2px solid green'; // Change border color to green
        } else {
            emailInput.style.border = '2px solid red'; // Change border color to red
        }
    });

    function simulateSuccessfulSubscription(email) {
        const card = document.getElementById('card');
        card.innerHTML = `
            <div class="innerContainer">
                <h2>Thanks for subscribing!</h2>
                <p>A confirmation email has been sent to <b>${email}</b>.
                Please open it and click the button inside to confirm your subscription.</p>
            </div>`;

        const dismissButton = document.createElement('button');
        dismissButton.textContent = 'Dismiss message';
        dismissButton.addEventListener('click', dismissMessage);

        const successMessageDiv = card.querySelector('.innerContainer');
        successMessageDiv.appendChild(dismissButton);
    }

    function dismissMessage() {
        const card = document.getElementById('card');
        card.innerHTML = '';
    }
});