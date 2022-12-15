//SPINNER and MODAL
const spinner = document.querySelector('#spinner');
const spinnerBtn = document.querySelector('.spinner__hero');
const animTimeout = 2000;


const openModal = (id) => {
    const modal = document.querySelector(`#${id}`);
    if (modal){
        modal.classList.add('displayed');
        document.querySelector('body').classList.add('overflow-hidden');
        setTimeout(() => {
            modal.classList.add('visible');
        }, 300);
    }
}

const closeModal = (id) => {
    const modal = document.querySelector(`#${id}`);
    if (modal){
        modal.classList.remove('visible');
        document.querySelector('body').classList.remove('overflow-hidden');
        setTimeout(() => {
            modal.classList.remove('displayed');
        }, 300);
    }
};

spinnerBtn.addEventListener('click', () => {
    spinner.classList.add('spinning');
    setTimeout(() => {
        openModal('ops-modal');
    }, animTimeout);
});


document.querySelectorAll('.modal__close').forEach(el => {
    el.addEventListener('click', () => closeModal('ops-modal'));
});

document.querySelector('#ops-modal').addEventListener('click', () => closeModal('ops-modal'));


document.querySelectorAll('.modal__hero').forEach(el => {
    el.addEventListener('click', e => e.stopPropagation());
});


//SELECT
const select = document.querySelector('.select');
const selectItems = select.querySelectorAll('.select__item');
const selectVal = select.querySelector('.select__val');

select.addEventListener('click', () => {
    select.classList.toggle('opened');
});
