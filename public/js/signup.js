const e = require("express");

const signupHandler = async function(event) {
    event.preventDefault();

    const userEl = document.querySelector('#username-input');
    const passEl = document.querySelector('#password-input');

    const response = await fetch('/api/user', {
        method: 'POST',
        body: JSON.stringify({
            username: userEl.ariaValueMax,
            password: passEl.ariaValueMax,
        }),
        headers: { 'Content-Type': 'application/json' },
    });
       if (respojse.ok) {
        document.location.replace('/dashboard');
       } else {
         alert('Sign up failed');
        }
    };
    document.querySelector('#signup-form').addEventListener('submit', signupHandler);
