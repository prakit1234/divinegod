const { createClient } = supabase;

const supabaseUrl = 'YOUR_SUPABASE_URL'; // Replace with your Supabase URL
const supabaseKey = 'YOUR_SUPABASE_ANON_KEY'; // Replace with your Supabase Anon Key
const supabase = createClient(supabaseUrl, supabaseKey);

const loginButton = document.getElementById('login-button');
const registerButton = document.getElementById('register-button');
const googleLoginButton = document.getElementById('google-login');
const showRegisterButton = document.getElementById('show-register');
const showLoginButton = document.getElementById('show-login');

const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');

// Login functionality
loginButton.addEventListener('click', async () => {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
        alert(`Login error: ${error.message}`);
    } else {
        alert('Login successful!');
        // Redirect to your desired page after successful login
        window.location.href = 'YOUR_REDIRECT_URL'; // Replace with the URL you want to redirect to
    }
});

// Register functionality
registerButton.addEventListener('click', async () => {
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;

    const { error } = await supabase.auth.signUp({ email, password });

    if (error) {
        alert(`Registration error: ${error.message}`);
    } else {
        alert('Registration successful! Please check your email for confirmation.');
        // Optionally redirect after registration
        window.location.href = 'YOUR_REDIRECT_URL'; // Replace with the URL you want to redirect to
    }
});

// Google Sign-In functionality
googleLoginButton.addEventListener('click', async () => {
    const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
            redirectTo: 'YOUR_REDIRECT_URL' // Replace with the URL you want to redirect to after login
        }
    });

    if (error) {
        alert(`Google login error: ${error.message}`);
    }
});

// Show register form
showRegisterButton.addEventListener('click', () => {
    loginForm.style.display = 'none';
    registerForm.style.display = 'block';
});

// Show login form
showLoginButton.addEventListener('click', () => {
    registerForm.style.display = 'none';
    loginForm.style.display = 'block';
});
