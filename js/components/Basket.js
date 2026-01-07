import Card from './BasketCard.js'
import getData from "./Fetch.js"

const basketBtnOpen = document.querySelector('.header__user-btn')
const basketListEl = document.querySelector('.basket__list')
const basket = document.querySelector('.basket')
const basketMessage = basket.querySelector('.basket__empty-block')

let res = await getData()
let basketList = []

const basketBtn = document.createElement('button')
basketBtn.classList.add('btn')
basketBtn.classList.add('btn--large')
basketBtn.innerHTML = 'Перейти к оформлению'
basketBtn.style.display = 'none'
basket.append(basketBtn)

export function basketRender() {
    let idList = JSON.parse(localStorage.getItem('selectedCards')) || []

    basketListEl.innerHTML = ''

    basketList = []

    idList.forEach(id => {
        const item = res.find(element => element.id === id)
        if (item) basketList.push(item)
    })

    if (basketList.length != 0) {
        basketMessage.style.display = 'none'
        basketBtn.style.display = 'flex'
        for (let i = 0; i < basketList.length; i++) {
            let element = basketList[i]
            let card = new Card(
                element.id,
                element.name,
                element.price,
                element.image,
                element.place = i
            )

            card.getCard(basketListEl)

            card.getBtn()
        }
    } else {
        basketBtn.style.display = 'none'
        basketMessage.style.display = 'block'
    }
}

basketBtnOpen.addEventListener('click', (e) => {
    basket.classList.toggle('basket--active')
    basketRender()
})