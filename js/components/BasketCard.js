import { deleteFromBasket } from "./BasketManipulation.js"

export default class Card {
    constructor(_id, _name, _price, _image, _place) {
        this.id = _id
        this.img = _image || 'images/no-image.jpg'
        this.name = _name
        this.priceNew = _price.new
        this.place = _place
    }

    getCard(whereToAppend) {
        this.cardEl = document.createElement('div')
        this.cardEl.className = 'basket__item'
        whereToAppend.append(this.cardEl)

        const imgWrapper = document.createElement('div')
        imgWrapper.className = 'basket__img'

        const img = document.createElement('img')
        img.src = this.img
        img.alt = 'Фотография товара'
        img.width = 60
        img.height = 60

        imgWrapper.append(img)

        const name = document.createElement('span')
        name.className = 'basket__name'
        name.textContent = this.name

        const price = document.createElement('span')
        price.className = 'basket__price'
        price.textContent = this.priceNew

        const btn = document.createElement('button')
        btn.className = 'basket__item-close btn btn--close'
        btn.type = 'button'

        btn.innerHTML = `
            <svg class="main-menu__icon" width="24" height="24" aria-hidden="true">
                <use xlink:href="images/sprite.svg#icon-close"></use>
            </svg>
        `

        this.cardEl.append(imgWrapper, name, price, btn)
    }

    getBtn() {
        const deleteBtn = this.cardEl.querySelector('.basket__item-close')
        deleteBtn.addEventListener('click', (e) => {
            deleteFromBasket(this.place)
            this.cardEl.remove()
        })
    }
}