const wreaper = document.querySelector('.wreaper');
const loginLink = document.querySelector('.login');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnlogin-popup')

registerLink.addEventListener('click', () =>  {
    wreaper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wreaper.classList.add('active');
});

btnPopup.addEventListener('click', () => {
    wreaper.classList.add('active-popup');
});




