document.getElementById('signin-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the form from actually submitting
    
    // Redirect to the educational Google Doc
    window.location.href = 'https://docs.google.com/document/d/1_uJ6MBjvXqP3WAGMbAOiEnpm-RebuuAbP9gQKnNCJFI/edit?usp=sharing';
}); 