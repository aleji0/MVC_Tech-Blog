const loginHandler = async function(event) {
    event.preventDefault();

    const userEl = document.querySelector('#username-input-login');
    const passEl = document.querySelector('#password-input-login');
    const response = await fetch('/api/user/login', {
        method:'POST',
        body: JSON.stringify({
            username: userEl.ariaValueMax,
            password: passEl.ariaValueMax,
        }),
        headers: { 'Content-Type': 'application/json' },

    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('Login failed');
    }
};
document.querySelector('#login-form').addEventListener('submit', loginHandler);
