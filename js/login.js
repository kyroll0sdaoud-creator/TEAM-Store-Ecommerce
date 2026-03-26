const email = document.getElementById('email');
const password = document.getElementById('password');


function showError(input, msg) {
    const small = input.nextElementSibling;
    small.innerText = msg;
    small.style.display = 'inline';
}

function clearError(input) {
    const small = input.nextElementSibling;
    small.innerText = "";
    small.style.display = 'none';
}

let emailregex = /^[a-zA-Z0-9._-]+@[a-zA-Z]+\.(com|org|eg|net|edu)$/;

email.addEventListener('input', () => {

    if (!emailregex.test(email.value)) {
        email.classList.add('invalid');
        email.classList.remove('valid');
        showError(email, 'must be valid email');
    }
    else {
        email.classList.add('valid');
        email.classList.remove('invalid');
        clearError(email);
    }
});

const passregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@!#$%*])[a-zA-Z\d@!#$%*]{10,}$/;

password.addEventListener('input', () => {

    if (!passregex.test(password.value)) {
        password.classList.add('invalid');
        password.classList.remove('valid');
        showError(password, 'Please Enter valid Password');
    }
    else {
        password.classList.add('valid');
        password.classList.remove('invalid');
        clearError(password);
    }

});

document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const registeredEmail = localStorage.getItem("User_Email");
    const registeredPass = localStorage.getItem("passwored");

  if (email.value===""){
    showError(email,"Email is required");
  }
  if (password.value===""){
    showError(password,"Password is requred");
  }
  
  if(email.value===""|| password.value===""){
    return;
  }

    if (!registeredEmail || !registeredPass) {
      showError(email,'This email is not registered. Please register first');
        return;
    }

 if(email.value === registeredEmail && password.value === registeredPass){
    window.location.href="../index.html";
 }
 else{
    showError(password,'Email or password is incorrect');
 }
});