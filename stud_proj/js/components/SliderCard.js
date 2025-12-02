import Card from "./CatalogCard.js"

export default class CardSmall extends Card {

    shrinkcard() {
        const cardInner = this.cardEl.querySelector('.product-card')
        cardInner.classList.add('product-card--small')
        this.cardEl.classList.replace('catalog__item', 'day-products__item')
        this.cardEl.classList.add('swiper-slide')
    }
}