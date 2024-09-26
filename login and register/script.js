// Initialize Supabase
const supabaseUrl = 'https://irjihbqqdzmzqkkewbbu.supabase.co'; // Replace with your Supabase URL
const supabaseAnonKey = 'process.env.SUPABASE_KEY'; // Replace with your Supabase anon key
const supabase = supabase.createClient(supabaseUrl, supabaseAnonKey);

const authContainer = document.getElementById('auth-container');
const authTitle = document.getElementById('auth-title');
const toggleAuth = document.getElementById('toggleAuth');
const submitBtn = document.getElementById('submitBtn');
const googleSignInBtn = document.getElementById('googleSignInBtn');

let isLogin = true;

// Toggle between Login and Register
toggleAuth.addEventListener('click', () => {
    isLogin = !isLogin;
    if (isLogin) {
        authTitle.textContent = 'Login';
        submitBtn.textContent = 'Login';
        toggleAuth.textContent = "Don't have an account? Register here";
    } else {
        authTitle.textContent = 'Register';
        submitBtn.textContent = 'Register';
        toggleAuth.textContent = 'Already have an account? Login here';
    }
});

// Handle Submit (Login or Register)
submitBtn.addEventListener('click', async () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        if (isLogin) {
            // Log in with email
            const { data, error } = await supabase.auth.signInWithPassword({ email, password });
            if (error) throw error;
            alert('Login successful!');
            // Redirect after login success
            window.location.href = 'login-success-url.html'; // Replace with your actual URL
        } else {
            // Register with email
            const { data, error } = await supabase.auth.signUp({ email, password });
            if (error) throw error;
            alert('Registration successful!');
            // Redirect after registration success
            window.location.href = 'register-success-url.html'; // Replace with your actual URL
        }
    } catch (error) {
        alert(error.message);
    }
});

// Google Sign-In
googleSignInBtn.addEventListener('click', async () => {
    try {
        const { data, error } = await supabase.auth.signInWithOAuth({ provider: 'google' });
        if (error) throw error;
        alert('Google Sign-In successful!');
        // Redirect after Google Sign-In success
        window.location.href = 'google-signin-success-url.html'; // Replace with your actual URL
    } catch (error) {
        alert(error.message);
    }
});
