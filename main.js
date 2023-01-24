document.addEventListener("DOMContentLoaded", () => {

    //SPINNER
    const spinner = document.querySelector('#spinner');
    const spinnerBtn = document.querySelector('.spinner__btn-wrap');
    const animTimeout = 6000;

    const queryString = window.location.search;
    const lang = spinnerBtn.querySelector('.spinner__btn').getAttribute('data-lang')

    //hearts
    const heartsCount = 150
    const maxR = window.innerWidth > 1024 ? 700 : 550
    const minR = 250
    for (let index = 0; index < heartsCount; index++) {
        const img = document.createElement("img");
        img.classList.add('heart')
        img.src = "./img/heart.svg";
        document.querySelector('.baner').appendChild(img);
    }

    spinnerBtn.addEventListener('click', (e) => {    
        spinner.classList.add('spinning');
        setTimeout(() => {
            spinnerBtn.querySelector('.spinner__btn').classList.add('spinned');
            spinnerBtn.querySelector('.spinner__btn').innerHTML = 'Get<br>Bonus'
            spinnerBtn.querySelector('.spinner__btn').setAttribute('href', `https://foggystarproject.com/${lang}/signup${queryString}`)
            document.querySelectorAll('.heart').forEach((el, inx) => {
                const angle = Math.PI * ( 90 * Math.random() - 45 ) / 180.0
                const r = 2 * ( Math.random() - 0.5 ) * (maxR - minR)
                const left = r * Math.cos(angle)
                const top = r * Math.sin(angle)
                const opacity = Math.random() * 0.6 + 0.2
                const transitionTime = Math.random() * 2 + 1
                const rotate = Math.random() * 360
                el.style = `left: calc(50% - ${left}px); top: calc(50% - ${top}px); opacity: ${opacity}; transition-duration: ${transitionTime}s; transform: rotate(${rotate}deg)`
            })
        }, animTimeout);
    });

});