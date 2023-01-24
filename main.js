//SPINNER
const spinner = document.querySelector('#spinner');
const spinnerBtn = document.querySelector('.spinner__hero');
const animTimeout = 2000;


spinnerBtn.addEventListener('click', () => {
    spinner.classList.add('spinning');
    setTimeout(() => {
        //
    }, animTimeout);
});