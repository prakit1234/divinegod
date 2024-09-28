// Toggle between login and register forms
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const showRegisterLink = document.getElementById('show-register');
const showLoginLink = document.getElementById('show-login');

// Redirect buttons
const loginButton = document.getElementById('login-btn');
const registerButton = document.getElementById('register-btn');

// Messages
const loginMessage = document.getElementById('login-message');
const registerMessage = document.getElementById('register-message');

// Sample in-memory storage (for demo purposes, use local storage)
let users = JSON.parse(localStorage.getItem('users')) || {};

// Toggle between forms
showRegisterLink.addEventListener('click', () => {
    loginForm.classList.remove('active');
    registerForm.classList.add('active');
});

showLoginLink.addEventListener('click', () => {
    registerForm.classList.remove('active');
    loginForm.classList.add('active');
});

// Handle registration
registerButton.addEventListener('click', () => {
    const username = document.getElementById('registerUsername').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;

    if (users[email]) {
        registerMessage.textContent = "User already exists!";
    } else {
        users[email] = { username, password };
        localStorage.setItem('users', JSON.stringify(users));
        registerMessage.textContent = "Registration successful! You can now log in.";
    }
});

// Handle login
loginButton.addEventListener('click', () => {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    if (users[email] && users[email].password === password) {
        // Redirect to the main page after successful login
        window.location.href = "https://chooose-book.vercel.app/"; // Redirect URL
    } else {
        loginMessage.textContent = "Invalid email or password!";
    }
});

// Google Sign-In Functionality
function onSignIn(googleUser) {
    const profile = googleUser.getBasicProfile();
    const email = profile.getEmail();

    // Here, you can check if the user exists in your local storage
    if (!users[email]) {
        // If not, register the user
        users[email] = { username: profile.getName(), password: "" }; // You can choose to not store password
        localStorage.setItem('users', JSON.stringify(users));
    }

    // Redirect to the main page after successful login
    window.location.href = "https://chooose-book.vercel.app/"; // Redirect URL
}

// Google Sign Out Functionality
function signOut() {
    const auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(() => {
        console.log('User signed out.');
    });
}

// Load Google API
function loadGoogleAPI() {
    const script = document.createElement('script');
    script.src = 'https://apis.google.com/js/platform.js';
    script.async = true;
    document.body.appendChild(script);
}

// Initialize Google Sign-In
function initGoogleSignIn() {
    gapi.load('auth2', function() {
        auth2 = gapi.auth2.init({
            client_id: 'YOUR_GOOGLE_CLIENT_ID', // Replace with your Google client ID
        });
    });
}

// Call loadGoogleAPI to load the Google API when the page loads
loadGoogleAPI();
