import { renderCatalog } from "./CatalogRender.js"

const catalogList = document.querySelector('.catalog__list')
const paginatorEl = document.querySelector('.catalog__pagination')
let currentData = []

export default function paginate(array, pageNumber) {
  currentData = array
  paginatorEl.innerHTML = ''

  let pagesCount = array.length / 6
  if (pagesCount > 1) {
    for (let i = 0; i < pagesCount; i++) {
      const li = document.createElement('li')
      li.classList.add('catalog__pagination-item')
      paginatorEl.append(li)
      if ((pageNumber - 1) == i) {
        li.innerHTML = `<button class="catalog__pagination-link" value="${i + 1}" disabled>${i + 1}</button>`
      } else {
        li.innerHTML = `<button class="catalog__pagination-link" value="${i + 1}">${i + 1}</button>`
      }
    }
  }

  const startIndex = (pageNumber - 1) * 6
  const endIndex = pageNumber * 6

  renderCatalog(array.slice(startIndex, endIndex), catalogList)
}

paginatorEl.addEventListener('click', (e) => {
  if (!e.target.classList.contains('catalog__pagination-link')) return

  let pageNumber = e.target.value
  if (pageNumber === undefined) return

  paginate(currentData, pageNumber)
})
