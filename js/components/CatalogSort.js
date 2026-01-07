import { dataManagement } from "./DataManagement.js";

export const catalogaSort = document.querySelector('.catalog__sort-select')

let sortMethod = ''
catalogaSort.addEventListener('change', (e) => {
    sortMethod = e.target.value
    dataManagement()
})

export function getSortMethod() {
    return sortMethod
}
