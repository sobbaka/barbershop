const first_name = document.getElementById('form_first_name');
const last_name = document.getElementById('form_last_name');
const phone = document.getElementById('form_phone');
const email = document.getElementById('form_email');

const submitBtn = document.getElementById('form_submit')
const form = document.getElementById('form')

const body = document.getElementById('body')

const create_account = document.getElementById('form_create_account');

const showPassword = document.getElementById('show_password');
const password = document.getElementById('form_password');


showPassword.addEventListener('click', function() {
    if (showPassword.checked) {
        password.type = "text";
    } else {
        password.type = "password";
    }

})



create_account.addEventListener('click', function() {
    const blockAccount = document.getElementById('account_form');
    if (create_account.checked) {
        blockAccount.style.display = "block";
    } else {
        blockAccount.style.display = 'none';
    }

})

let pressedBtn = false;


const setError = (input) => {
    input.classList.add('invalid')
}

function setSuccess(input) {
    input.classList.remove('invalid')
}

function checkInputs() {
    if (first_name.value === '') {
        setError(first_name);
    } else {
        setSuccess(first_name);
    };

    if (last_name.value === '') {
        setError(last_name);
    } else {
        setSuccess(last_name);
    };

    const phonePattern = /[0-9]{5}/;
    if (phonePattern.test(phone.value)) {
        setSuccess(phone);
        phone.setCustomValidity('');
    } else {
        phone.setCustomValidity('Добавьте номер из 5 цифр');
        setError(phone);
    }

    const mailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;;

    if (mailPattern.test(email.value)) {
        setSuccess(email);
    } else {
        setError(email);
    }
}



const valid = () => {
    form.noValidate = true;
    form.onsubmit = function(e) {
        e.preventDefault();
        this.reportValidity();

        if (this.checkValidity()) return this.submit();

        checkInputs();
        pressedBtn = true;

    }
}

valid();



body.addEventListener('change', function() {
    if (pressedBtn) checkInputs();
})