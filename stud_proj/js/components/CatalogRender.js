import Card from "./CatalogCard.js"

export function renderCatalog(arraySlice, wheretoappend) {
    wheretoappend.innerHTML = ''

    arraySlice.forEach(element => {
        let card = new Card(
            element.id,
            element.name,
            element.price,
            element.image,
            element.availability,
        )

        card.getElement(wheretoappend)

        card.getBtn()

        card.getTooltip()
    })
}