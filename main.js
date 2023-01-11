
//SELECT
const select = document.querySelector('.select');

select.addEventListener('click', () => select.classList.toggle('opened'));

//READ MORE
const moreBtn = document.querySelector('.terms__more')
const termsList = document.querySelector('.terms__more')

moreBtn.addEventListener('click', () => {
    moreBtn.classList.toggle('opened')
    const scrollingList = document.querySelector('.list-hidden')
    if (scrollingList.style.maxHeight) {
        scrollingList.style.maxHeight = null;
    } else {
        scrollingList.style.maxHeight = scrollingList.scrollHeight + "px";
    };
})

//COPY TO CLIPBOARD
const clipboardBtn = document.querySelector('.baner__clipboard')
clipboardBtn.addEventListener('click', () => {
    try {
        navigator.clipboard.writeText('LUCKY');
        document.querySelector('.clipboard-msg').classList.add('opened')
        setTimeout(() => {
            document.querySelector('.clipboard-msg').classList.remove('opened')
        }, 1500);
    } catch (error) {
        console.log(error);   
    }
})