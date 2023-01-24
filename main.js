//SPINNER
const spinner = document.querySelector('#spinner');
const spinnerHero = document.querySelector('.spinner__hero');
const spinnerBtn = document.querySelector('.spinner__btn-wrap');
const animTimeout = 6000;

//hearts
const heartsCount = 150
const maxR = window.innerWidth > 1024 ? 660 : 550
const minR = window.innerWidth > 1024 ? 300 : 250
for (let index = 0; index < heartsCount; index++) {
    const img = document.createElement("img");
    img.classList.add('heart')
    img.src = "./img/heart.svg";
    document.querySelector('.baner').appendChild(img);
}


spinnerBtn.addEventListener('click', () => {
    spinner.classList.add('spinning');
    setTimeout(() => {
        spinnerBtn.querySelector('button').classList.add('spinned');
        spinnerBtn.querySelector('button').innerHTML = 'Get<br>Bonus'
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