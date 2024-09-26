// Initialize Supabase
const supabaseUrl = 'https://irjihbqqdzmzqkkewbbu.supabase.co'; // Replace with your Supabase URL
const supabaseAnonKey = 'process.env.SUPABASE_KEY'; // Replace with your Supabase anon key
const supabase = supabase.createClient(supabaseUrl, supabaseAnonKey);

const authContainer = document.getElementById('auth-container');
const registerContainer = document.getElementById('register-container');
const authTitle = document.getElementById('auth-title');
const toggleAuth = document.getElementById('toggleAuth');
const toggleToLogin = document.getElementById('toggleToLogin');
const submitBtn = document.getElementById('submitBtn');
const registerBtn = document.getElementById('registerBtn');
const googleSignInBtn = document.getElementById('googleSignInBtn');

let isLogin = true;

// Toggle between Login and Register
toggleAuth.addEventListener('click', () => {
    isLogin = false;
    authContainer.style.display = 'none';
    registerContainer.style.display = 'flex';
});

toggleToLogin.addEventListener('click', () => {
    isLogin = true;
    registerContainer.style.display = 'none';
    authContainer.style.display = 'flex';
});

// Handle Login
submitBtn.addEventListener('click', async () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const { data, error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        alert('Login successful!');
        window.location.href = 'login-success-url.html'; // Replace with your actual URL
    } catch (error) {
        alert(error.message);
    }
});

// Handle Registration
registerBtn.addEventListener('click', async () => {
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;

    try {
        const { data, error } = await supabase.auth.signUp({ email, password });
        if (error) throw error;
        alert('Registration successful!');
        window.location.href = 'register-success-url.html'; // Replace with your actual URL
    } catch (error) {
        alert(error.message);
    }
});

// Google Sign-In
googleSignInBtn.addEventListener('click', async () => {
    try {
        const { error } = await supabase.auth.signInWithOAuth({ provider: 'google' });
        if (error) throw error;
    } catch (error) {
        alert(error.message);
    }
});
