window.onload = function() {

    const loginBtn = document.querySelector('.navigation__enter');
    const loginModal = document.querySelector('.login');
    const closeBtn = document.querySelector('.close__btn');
    const formSwitcher = document.querySelector('.modal__switcher');

    const formLogin = document.querySelector('.login__form');
    const formPassword = document.querySelector('.password__form');

    loginBtn.addEventListener('click', () => {
        loginModal.style.display = "flex";
    })

    closeBtn.addEventListener('click', () => {
        loginModal.style.display = "none";

        if (formPassword.classList.contains('form-active')) {
            formLogin.classList.toggle('form-active')
            formPassword.classList.toggle('form-active')
        }

    })

    formSwitcher.addEventListener('click', () => {

        formLogin.classList.toggle('form-active')
        formPassword.classList.toggle('form-active')

    })

}