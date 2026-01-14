function validate(e) {
    const email = document.getElementById('email').value;
    const pass = document.getElementById('password').value;
    const age = document.getElementById('age').value;
    const msgBox = document.getElementById("message");
    
    let message = '';

    if (email === '') {
        'Please enter email.';
        msgBox.style.color = 'yellow';
    } 
    else if (pass === '') {
        'Password must be at least 8 characters';
        msgBox.style.color = 'Red';
    }
    else if (age === '') {
        'Age must be between 6 to 18';
        msgBox.style.color = 'red';
    }
    else {
        message = 'Login successful!';
        msgBox.style.color = 'green';
    }

    msgBox.innerText = message;
}