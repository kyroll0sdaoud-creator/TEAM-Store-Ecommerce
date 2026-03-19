const username = document.getElementById('name');
const userEmail = document.getElementById('email');
const userPassword = document.getElementById('password');
const confirmPass = document.getElementById('confirm-password');

function displayError(input, msg) {
    const small = input.nextElementSibling;
    small.innerText = msg;
    small.style.display = 'inline';
}

function removeError(input) {
    const small = input.nextElementSibling;
    small.innerText = "";
    small.style.display = 'none';
}

const namePattern = /^[a-zA-Z\s\d]{3,40}$/;
const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z]+\.(com|org|eg|net|edu)$/;
const passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@!#$%*])[a-zA-Z\d@!#$%*]{10,}$/;

username.addEventListener('input', () => {
    if (!namePattern.test(username.value)) {
        username.classList.add('invalid');
        username.classList.remove('valid');
        displayError(username, 'must be at least 3 letters and not more 40 letters');
    } else {
        username.classList.add('valid');
        username.classList.remove('invalid');
        removeError(username);
    }
});

userEmail.addEventListener('input', () => {
    if (!emailPattern.test(userEmail.value)) {
        userEmail.classList.add('invalid');
        userEmail.classList.remove('valid');
        displayError(userEmail, 'must be valid email');
    } else {
        userEmail.classList.add('valid');
        userEmail.classList.remove('invalid');
        removeError(userEmail);
    }
});

userPassword.addEventListener('input', () => {
    if (!passPattern.test(userPassword.value)) {
        userPassword.classList.add('invalid');
        userPassword.classList.remove('valid');
        displayError(userPassword, 'must have uppercase, lowercase, number & special char');
    } else {
        userPassword.classList.add('valid');
        userPassword.classList.remove('invalid');
        removeError(userPassword);
    }
});

confirmPass.addEventListener('input', () => {
    if (confirmPass.value !== userPassword.value) {
        confirmPass.classList.add('invalid');
        confirmPass.classList.remove('valid');
        displayError(confirmPass, 'passwords do not match');
    } else {
        confirmPass.classList.add('valid');
        confirmPass.classList.remove('invalid');
        removeError(confirmPass);
    }
});

document.getElementById('registerForm').addEventListener('submit', (e) => {
    e.preventDefault();
    if (
        username.value === "" || !namePattern.test(username.value) ||
        userEmail.value === "" || !emailPattern.test(userEmail.value) ||
        userPassword.value === "" || !passPattern.test(userPassword.value) ||
        confirmPass.value === "" || confirmPass.value !== userPassword.value
    ) {alert('Please fix all errors first');}
    else {
        localStorage.setItem("User_Name", username.value);
        localStorage.setItem("User_Email", userEmail.value);
        localStorage.setItem("passwored", userPassword.value);
        window.location.href = "../index.html";
    }
});