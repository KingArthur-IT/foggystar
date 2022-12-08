const spinner = document.querySelector('#spinner');
const spinnerBtn = document.querySelector('.spinner__btn');
const animTimeout = 2000;

spinnerBtn.addEventListener('click', () => {
    spinner.classList.add('spinning');
    setTimeout(() => {
        spinner.classList.add('spinned');
        spinnerBtn.classList.add('spinned');
        spinnerBtn.innerHTML = 'get bonus';
    }, animTimeout);
})