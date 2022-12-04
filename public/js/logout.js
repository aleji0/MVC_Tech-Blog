const logout = async function() {
    const response = await fetch('/api/user/logout', {
        method: 'POST',
        headers: ( 'Content-Type': 'apllication/json' },
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        alert('Log out failed');
    }
};

document.querySelector('#logout').addEventListener('click', logout);