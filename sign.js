document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signup-form');
    const errorMessage = document.getElementById('error-message');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Get form inputs
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;
        
        // Reset error message
        errorMessage.textContent = '';
        
        // Validate name
        if (name.length < 2) {
            errorMessage.textContent = 'Name must be at least 2 characters long.';
            return;
        }
        
        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            errorMessage.textContent = 'Please enter a valid email address.';
            return;
        }
        
        // Validate password
        if (password.length < 8) {
            errorMessage.textContent = 'Password must be at least 8 characters long.';
            return;
        }
        
        // Check if passwords match
        if (password !== confirmPassword) {
            errorMessage.textContent = 'Passwords do not match.';
            return;
        }
        
        // If validation passes, you would typically send this to a server
        // For now, show success message and reset form
        errorMessage.style.color = 'green';
        errorMessage.textContent = 'Account created successfully! Redirecting...';
        
        // Reset form
        form.reset();
        
        // Simulate redirect after 2 seconds
        setTimeout(function() {
            window.location.href = 'new.html';
        }, 2000);
    });
});