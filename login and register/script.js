const supabaseUrl = 'YOUR_SUPABASE_URL';
const supabaseKey = 'YOUR_SUPABASE_ANON_KEY';
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

document.getElementById('login-button').onclick = async () => {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    const { user, error } = await supabase.auth.signIn({ email, password });

    if (error) {
        alert(error.message);
    } else {
        window.location.href = 'YOUR_REDIRECT_URL'; // Change this to your desired redirect URL
    }
};

document.getElementById('register-button').onclick = async () => {
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;

    const { user, error } = await supabase.auth.signUp({ email, password });

    if (error) {
        alert(error.message);
    } else {
        alert('Registration successful! Please check your email to confirm.');
        window.location.href = 'YOUR_REDIRECT_URL'; // Change this to your desired redirect URL
    }
};

document.getElementById('google-login-button').onclick = async () => {
    const { user, session, error } = await supabase.auth.signIn({ provider: 'google' });

    if (error) {
        alert(error.message);
    } else {
        window.location.href = 'YOUR_REDIRECT_URL'; // Change this to your desired redirect URL
    }
};

document.getElementById('switch-to-register').onclick = () => {
    document.getElementById('login-form').classList.add('hidden');
    document.getElementById('register-form').classList.remove('hidden');
};

document.getElementById('switch-to-login').onclick = () => {
    document.getElementById('register-form').classList.add('hidden');
    document.getElementById('login-form').classList.remove('hidden');
};
