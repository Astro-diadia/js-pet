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
        whereToAppend.append(this.cardEl)

        this.cardEl.innerHTML = `
            <li class="basket__item">
                <div class="basket__img">
                    <img src="${this.img}" alt="Фотография товара" height="60" width="60">
                </div>
                <span class="basket__name">${this.name}</span>
                <span class="basket__price">${this.priceNew}</span>
                <button class="basket__item-close btn btn--close" type="button">
                    <svg class="main-menu__icon" width="24" height="24" aria-hidden="true">
                        <use xlink:href="images/sprite.svg#icon-close"></use>
                    </svg>
                </button>
            </li>
        `
    }

    getBtn() {
        const deleteBtn = this.cardEl.querySelector('.basket__item-close')
        deleteBtn.addEventListener('click', (e) => {
            deleteFromBasket(this.place)
            this.cardEl.remove()
        })
    }
}