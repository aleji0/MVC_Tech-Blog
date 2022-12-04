const { response } = require("express");

const logou = async function() {
    const response = await fetch('/api/user/logout', {
        method: 'POST',
        headers: ( 'Content-Type': 'apllication/json' },
    });

    if (response.ok) {
        document.location.replace('/');
        
    }
}