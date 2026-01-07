import { basketRender } from "./Basket.js"

const counterEl = document.querySelector('.header__user-count')

function addCardToStorage(cardId) {
    let stored = JSON.parse(localStorage.getItem('selectedCards')) || []

    if (cardId != '') {
        stored.push(cardId)
        localStorage.setItem('selectedCards', JSON.stringify(stored))
        basketRender()
    }
    counterEl.textContent = stored.length
}

function deleteFromBasket(cardPlace) {
    let stored = JSON.parse(localStorage.getItem('selectedCards')) || []

    stored.splice(cardPlace, 1)

    localStorage.setItem('selectedCards', JSON.stringify(stored))
    counterEl.textContent = stored.length
    basketRender()
}

addCardToStorage('')

export { addCardToStorage, deleteFromBasket }