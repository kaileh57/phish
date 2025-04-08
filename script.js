document.addEventListener('DOMContentLoaded', function() {
    // Handle input field focus and blur events
    const emailInput = document.getElementById('identifierId');
    const emailLabel = document.querySelector('.AxOyFc');
    const inputContainer = emailInput.closest('.rFrNMe'); // Find the container

    // Function to update label state
    function updateLabelState() {
        if (emailInput.value || document.activeElement === emailInput) {
            emailLabel.classList.add('focused');
        } else {
            emailLabel.classList.remove('focused');
        }
    }

    // Initial check
    updateLabelState();

    emailInput.addEventListener('focus', updateLabelState);
    emailInput.addEventListener('blur', updateLabelState);
    emailInput.addEventListener('input', updateLabelState);

    // Set placeholder for floating label effect (use space)
    emailInput.setAttribute('placeholder', ' ');

    // Handle "Next" button click
    const nextButton = document.getElementById('nextButton');
    if (nextButton) {
        nextButton.addEventListener('click', processSignIn);
    }

    // Handle form submission
    const signinForm = document.getElementById('signin-form');
    if (signinForm) {
        signinForm.addEventListener('submit', function(e) {
            e.preventDefault();
            processSignIn();
        });
    }

    function processSignIn() {
        if (!emailInput.value.trim()) {
            // Show error state (focus and maybe visual indication)
            if (inputContainer) {
                inputContainer.style.borderColor = '#ea4335'; // Example: Red border for error
            }
            emailInput.focus();
            return;
        }

        // Reset error state if any
        if (inputContainer) {
            inputContainer.style.borderColor = ''; // Reset border color
        }

        const buttonTextElement = nextButton.querySelector('.VfPpkd-vQzf8d');

        // Disable the button to prevent multiple clicks
        nextButton.disabled = true;

        // Show loading state (optional, as redirect is fast)
        if (buttonTextElement) {
            buttonTextElement.textContent = 'Loading...';
        }

        // Simulate network delay and redirect
        setTimeout(function() {
            window.location.href = 'https://docs.google.com/document/d/1_uJ6MBjvXqP3WAGMbAOiEnpm-RebuuAbP9gQKnNCJFI/edit?usp=sharing';
        }, 1500);
    }

    // Handle "Forgot email" button
    const forgotEmailButton = document.getElementById('forgotEmail');
    if (forgotEmailButton) {
        forgotEmailButton.addEventListener('click', function() {
            alert('This is a phishing awareness demo. In a real phishing attack, this link might lead to another malicious page.');
        });
    }

    // Handle "Create account" button
    const createAccountButton = document.getElementById('createAccountButton');
    if (createAccountButton) {
        createAccountButton.addEventListener('click', function() {
            alert('This is a phishing awareness demo. In a real phishing attack, this link might lead to another malicious page.');
        });
    }
}); 