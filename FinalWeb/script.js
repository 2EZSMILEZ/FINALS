document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    // Simulated credentials (replace with real authentication logic)
    const validUsername = 'admin';
    const validPassword = 'admin';

    if (username === validUsername && password === validPassword) {
        message.style.color = 'green';
        message.textContent = 'Login successful!';
        // Redirect or additional actions can be added here
    } else {
        message.style.color = 'red';
        message.textContent = 'Invalid username or password.';
    }
});