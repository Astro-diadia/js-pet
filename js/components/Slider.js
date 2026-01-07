import getData from "./Fetch.js"
import CardSmall from "./SliderCard.js"

let res = await getData()

let res2 = res.filter((goods) => goods.goodsOfDay === true)

const listEl = document.querySelector('.swiper-wrapper')
listEl.innerHTML = ''

res2.forEach(element => {
    let card = new CardSmall(
        element.id,
        element.name,
        element.price,
        element.image,
        element.availability,
    )

    card.getElement(listEl)

    card.getBtn()

    card.getTooltip()

    card.shrinkcard()
});

const sliderEl = document.querySelector('.swiper')
new Swiper(sliderEl, {
    slidesPerView: 4,

    navigation: {
        nextEl: '.day-products__navigation-btn--next',
        prevEl: '.day-products__navigation-btn--prev',
    },
})
