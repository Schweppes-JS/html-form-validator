const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;
let passordsMatch = false;

function validateForm() {
    // Using contraint API
    isValid = form.checkValidity();
    // Style main message for am error
    if (!isValid) {
        message.textContent = 'Please fill out all fields.';
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        return;
    }
    // Check to see if passwords match
    if (password1El.value === password2El.value) {
        passordsMatch = true;
        password1El.style.borderColor = 'green';
        password2El.style.borderColor = 'green';
    } else {
        passordsMatch = false;
        message.textContent = 'Make sure passwords match.';
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        password1El.style.borderColor = 'red';
        password2El.style.borderColor = 'red';
        return;
    }
    // If form is valid and password match
    if (isValid && passordsMatch) {
        message.textContent = 'Successfully registered!';
        message.style.color = 'green';
        messageContainer.style.borderColor = 'green';
    }
}

function storeFormDate() {
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value,
    }
    // Do something with user data
    console.log(user);
}

function processFromDate(e) {
    e.preventDefault();
    // Validate form
    validateForm()
    // Submit data if valid
    if (isValid && passordsMatch) {
        storeFormDate();
    }
}

// Event listener
form.addEventListener('submit', processFromDate);