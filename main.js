//SPINNER and MODAL
const spinner = document.querySelector('#spinner');
const spinnerBtn = document.querySelector('.spinner__hero');
const animTimeout = 2000;

// hightlight prizes according to current date
const initDate = 25; //for 25 december
const currentDate = new Date().getDate();

const prizesList = document.querySelectorAll('.prizes__item');
const todayDateIndex = currentDate - initDate;
if (todayDateIndex >= 0){
    if (todayDateIndex < prizesList.length) 
        prizesList[todayDateIndex].classList.add('today');

    const lastIndex = todayDateIndex < prizesList.length ? todayDateIndex : prizesList.length - 1;
    for (let index = 0; index <= lastIndex; index++) {
        prizesList[index].classList.add('active');
    }
}

//modals
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

document.querySelectorAll('.prizes__item.active .prizes__btn').forEach(el => {
    el.addEventListener('click', () => {
        const day = el.getAttribute('data-day');
        document.querySelector('#prize-modal .modal__head-text').innerHTML = `Mission ${day}`
        document.querySelector('#prize-modal .modal__title').innerHTML = prizesData[day - 1].date;
        document.querySelector('#prize-modal .modal__descr').innerHTML = prizesData[day - 1].description;
        document.querySelector('#prize-modal .modal__btn').setAttribute('href', prizesData[day - 1].link);
        openModal('prize-modal');
    })
})

document.querySelector('#ops-modal').querySelector('.modal__close').addEventListener('click', () => closeModal('ops-modal'));
document.querySelector('#prize-modal').querySelector('.modal__close').addEventListener('click', () => closeModal('prize-modal'));

document.querySelector('#ops-modal').addEventListener('click', () => closeModal('ops-modal'));
document.querySelector('#prize-modal').addEventListener('click', () => closeModal('prize-modal'));


document.querySelectorAll('.modal__hero').forEach(el => { el.addEventListener('click', e => e.stopPropagation()) });


//SELECT
const selects = document.querySelectorAll('.select');

selects.forEach(el => {
    el.addEventListener('click', () => {
        el.classList.toggle('opened');
    });
});

const prizesData = [
    {
        date: '25 December',
        description: 'Make 50 spins in “Christmas” category slots and get 1 Christmas Chance spin',
        link: 'https://foggystarproject.com/en/catalog/casino/christmas'
    },
    {
        date: '26 December',
        description: 'Deposit of more than 30 EUR today and get 1 Christmas Chance spin',
        link: 'https://foggystarproject.com/en/profile/cash'
    },
    {
        date: '27 December',
        description: 'Increase your loyalty level by 1 and get1 Christmas Chance spin',
        link: 'https://foggystarproject.com/en/profile/dashboard'
    },
    {
        date: '28 December',
        description: 'Post the biggest Christmas slot win on twitter and tag @FoggystarC and get 1 Christmas Chance spin',
        link: 'https://twitter.com/FoggystarC'
    },
    {
        date: '29 December',
        description: 'Catch the bonus in Christmas Big Bass Bonanza and fill the bonus gauge up to the maximum multiplier',
        link: 'https://foggystarproject.com/en/play/960/vs10bxmasbnza?demo=true'
    },
    {
        date: '30 December',
        description: 'Deposit of more than 50 EUR today and get 1 Christmas Chance spin',
        link: 'https://foggystarproject.com/en/profile/cash'
    },
    {
        date: '31 December',
        description: 'Hit a multiplier of more than x100 on your bet in a slot from the “Christmas” category and get 1 Christmas Chance spin',
        link: 'https://foggystarproject.com/en/catalog/casino/christmas'
    },
    {
        date: '01 January',
        description: '1 holiday spin in Christmas Chance to everyone who completed all the previous tasks',
        link: 'https://foggystarproject.com/en/promotions'
    },
]
