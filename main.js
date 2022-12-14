//SPINNER and MODAL
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

    if (!isSpinned)
        spinner.classList.add('spinning'); //spinning
    else openModal();
});

document.querySelector('.modal__close')?.addEventListener('click', () => closeModal());
modal.addEventListener('click', () => closeModal());

document.querySelector('.modal__hero').addEventListener('click', e => e.stopPropagation());


//SELECT
const select = document.querySelector('.select');
const selectItems = select.querySelectorAll('.select__item');
const selectVal = select.querySelector('.select__val');

select.addEventListener('click', () => {
    select.classList.toggle('opened');
});

selectItems.forEach(item => {
    item.addEventListener('click', () => {
        selectVal.innerHTML = item.innerHTML;
        if (!selectVal.classList.contains('selected')){
            selectVal.classList.add('selected');
            select.classList.remove('error');
        }
    })
});


//REQUEST
const modalBtn = document.querySelector('.modal__btn');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const promocodeInput = document.querySelector('#promocode');
const currencyInput = document.querySelector('#currency');

const termCheckbox = document.querySelector('#terms');
const gamesCheckbox = document.querySelector('#games');
const adultCheckbox = document.querySelector('#adult');

modalBtn.addEventListener('click', e => {
    e.preventDefault();
    //clear errors
    emailInput.classList.remove('error');
    passwordInput.classList.remove('error');
    currencyInput.classList.remove('error');
    termCheckbox.classList.remove('error');
    gamesCheckbox.classList.remove('error');
    adultCheckbox.classList.remove('error');

    //validate
    const isEmailValid = validateEmail(emailInput.value);
    if (!isEmailValid) emailInput.classList.add('error');

    const isPasswordValid = passwordInput.value.length > 0;
    if (!isPasswordValid) passwordInput.classList.add('error');

    const isCurrencyValid = currencyInput.querySelector('.select__val').innerHTML != 'Currency';
    if (!isCurrencyValid) currencyInput.classList.add('error');

    if (!termCheckbox.checked) termCheckbox.classList.add('error');
    if (!gamesCheckbox.checked) gamesCheckbox.classList.add('error');
    if (!adultCheckbox.checked) adultCheckbox.classList.add('error');

    if (isEmailValid && isPasswordValid && isCurrencyValid &&
        termCheckbox.checked && gamesCheckbox.checked && adultCheckbox.checked)
        sendData(
            emailInput.value, 
            passwordInput.value, 
            currencyInput.querySelector('.select__val').innerHTML, 
            promocodeInput.value
        );
});


//oncahge
termCheckbox.addEventListener('change', e => e.target.classList.remove('error'))
gamesCheckbox.addEventListener('change', e => e.target.classList.remove('error'))
adultCheckbox.addEventListener('change', e => e.target.classList.remove('error'))

emailInput.addEventListener('input', (e) => {
    if (validateEmail(e.target.value)) e.target.classList.remove('error');
});
passwordInput.addEventListener('input', (e) => {
    if (e.target.value.length > 0) e.target.classList.remove('error');
});

//functions
function sendData(email, password, currency, promocode = ""){
    var xhr = new XMLHttpRequest();

    const json = JSON.stringify({
        "TYPE": "user-register",
        "data": {
            "email": email,
            "password": password,
            "currency": currency,
            "registrationPromoCode": promocode,
            "agreedWithTermsAndConditions": true,
            "agreeWithSelfExcluded": true,
            "ageConfirmed": true,
            "passwordRepeat": password
        },
        "fields": [
            "email",
            "password",
            "currency",
            "registrationPromoCode",
            "agreedWithTermsAndConditions",
            "agreeWithSelfExcluded",
            "ageConfirmed",
            "passwordRepeat"
        ]
    });

    xhr.open('POST', 'https://foggystar.com/api/v1/validate/user-register?lang=en');
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.send(json);

    xhr.onload = function() {
    if (xhr.status != 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
        alert(`Ошибка ${xhr.status}: ${xhr.statusText}`); // Например, 404: Not Found
    } else { // если всё прошло гладко, выводим результат
        alert(`Готово, получили ${xhr.response.length} байт`); // response -- это ответ сервера
    }
        console.log(xhr.responseText)
    };

    xhr.onerror = function() {
        alert("Запрос не удался");
    };
}

function validateEmail(email){
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};