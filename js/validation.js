const form = document.getElementById('form');
const email = document.getElementById('email');
const error = document.getElementById('error-message');

form.addEventListener('submit', e => {
    e.preventDefault();
    console.log(email);
    if (email.value == '') {
        console.log("Whoops! It looks like you forgot to add your email");
        error.innerText = 'Whoops! It looks like you forgot to add your email';
        email.className = 'invalid';
    } else if (isEmail(email.value) === false) {
        error.innerText = 'Please provide a valid email address';
        email.className = 'invalid';
    } else {
        error.innerText = '';
        email.className = 'valid';
    }
});

function isEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(email); 
}
