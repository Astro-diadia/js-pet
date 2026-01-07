import { addCardToStorage } from "./BasketManipulation.js"

export default class Card {
  constructor(_id, _name, _price, _image, _availability) {
    this.id = _id
    this.name = _name
    this.priceNew = _price.new
    this.priceOld = _price.old
    this.image = _image
    this.avbM = _availability.moscow
    this.avbOr = _availability.orenburg
    this.avbSP = _availability.saintPetersburg
  }

  getElement(whereToAppend) {
    this.cardEl = document.createElement('li')
    this.cardEl.classList.add('catalog__item')
    whereToAppend.append(this.cardEl)
    this.cardEl.innerHTML = `
            <div class="product-card">
                <div class="product-card__visual">
                  <img class="product-card__img" src="${this.image}" height="436" width="290"
                       alt="Изображение товара">
                  <div class="product-card__more">
                    <button href="#" class="product-card__link btn btn--icon">
                      <span class="btn__text">В корзину</span>
                      <svg width="24" height="24" aria-hidden="true">
                        <use xlink:href="images/sprite.svg#icon-basket"></use>
                      </svg>
                    </button>
                    <a href="#" class="product-card__link btn btn--secondary">
                      <span class="btn__text">Подробнее</span>
                    </a>
                  </div>
                </div>
                <div class="product-card__info">
                  <h2 class="product-card__title">${this.name}</h2>
                <span class="product-card__old">
                  <span class="product-card__old-number">${this.priceOld}</span>
                  <span class="product-card__old-add">₽</span>
                </span>
                <span class="product-card__price">
                  <span class="product-card__price-number">${this.priceNew}</span>
                  <span class="product-card__price-add">₽</span>
                </span>
                  <div class="product-card__tooltip tooltip">
                    <button class="tooltip__btn" id="${this.id}" aria-label="Показать подсказку">
                      <svg class="tooltip__icon" width="5" height="10" aria-hidden="true">
                        <use xlink:href="images/sprite.svg#icon-i"></use>
                      </svg>
                    </button>
                    <div class="tooltip__content">
                      <span class="tooltip__text">Наличие товара по городам:</span>
                      <ul class="tooltip__list">
                        <li class="tooltip__item">
                          <span class="tooltip__text">Москва: <span class="tooltip__count">${this.avbM}</span></span>
                        </li>
                        <li class="tooltip__item">
                          <span class="tooltip__text">Оренбург: <span class="tooltip__count">${this.avbOr}</span></span>
                        </li>
                        <li class="tooltip__item">
                          <span class="tooltip__text">Санкт-Петербург: <span class="tooltip__count">${this.avbSP}</span></span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
            </div>
        `
    return this.cardEl
  }

  getBtn() {
    const addToBAsketBtn = this.cardEl.querySelector('.product-card__link')
    addToBAsketBtn.addEventListener('click', (e) => {
      addCardToStorage(this.id)
    })
  }

  getTooltip() {
    const tooltip = this.cardEl.querySelector('.tooltip')
    const tooltipContent = this.cardEl.querySelector('.tooltip__content').innerHTML

    tippy(tooltip, {
      allowHTML: true,
      arrow: false,
      content: tooltipContent,
      theme: 'lightwhite',
      placement: 'top-end'
    })
  }
}
