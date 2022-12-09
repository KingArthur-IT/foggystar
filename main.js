const spinner = document.querySelector('#spinner');
const spinnerBtn = document.querySelector('.spinner__btn');
const animTimeout = 2000;
const modal = document.querySelector('.modal');


const openModal = () => {
    if (modal){
        modal.classList.add('displayed');
        document.querySelector('body').classList.add('overflow-hidden');
        setTimeout(() => {
            modal.classList.add('visible');
        }, 300);
    }
}

const closeModal = () => {
    if (modal){
        modal.classList.remove('visible');
        document.querySelector('body').classList.remove('overflow-hidden');
        setTimeout(() => {
            modal.classList.remove('displayed');
        }, 300);
    }
};

spinnerBtn.addEventListener('click', () => {
    const isSpinned = spinnerBtn.classList.contains('spinned');

    if (!isSpinned){
        spinner.classList.add('spinning'); //spinning
        setTimeout(() => { //change btn & add sparks
            spinner.classList.add('spinned');
            spinnerBtn.classList.add('spinned');
            spinnerBtn.innerHTML = 'get <br> bonus';
        }, animTimeout);
    }
    else openModal();
});

document.querySelector('.modal__close')?.addEventListener('click', () => closeModal());
modal.addEventListener('click', () => closeModal());

document.querySelector('.modal__hero').addEventListener('click', e => e.stopPropagation())