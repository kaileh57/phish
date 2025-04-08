document.addEventListener('DOMContentLoaded', function() {
    // Show/hide password functionality
    const passwordInput = document.getElementById('password');
    const showPasswordCheckbox = document.getElementById('show-password');
    
    showPasswordCheckbox.addEventListener('change', function() {
        passwordInput.type = this.checked ? 'text' : 'password';
    });
    
    // Form submission handler
    document.getElementById('signin-form').addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent the form from actually submitting
        
        // Show loading animation for a more realistic experience
        document.querySelector('.next-button').textContent = 'Loading...';
        
        // Simulate a brief loading delay
        setTimeout(function() {
            // Redirect to the educational Google Doc after a brief delay
            window.location.href = 'https://docs.google.com/document/d/1_uJ6MBjvXqP3WAGMbAOiEnpm-RebuuAbP9gQKnNCJFI/edit?usp=sharing';
        }, 1000);
    });
    
    // Add placeholder attributes for floating label effect
    const inputs = document.querySelectorAll('input[type="email"], input[type="password"]');
    inputs.forEach(input => {
        input.setAttribute('placeholder', ' ');
    });
}); 