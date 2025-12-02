const questionList = document.querySelector('.accordion')
const btnAll = document.querySelectorAll('.accordion__btn')

questionList.addEventListener('click', (e) => {
    if ((!e.target.classList.contains('accordion__btn'))) return

    if (e.target.classList.contains('accordion__btn--active')) {
        e.target.classList.toggle('accordion__btn--active')
        return
    }

    btnAll.forEach((btn) => {
        btn.classList.remove('accordion__btn--active')
    })
    e.target.classList.toggle('accordion__btn--active')
})