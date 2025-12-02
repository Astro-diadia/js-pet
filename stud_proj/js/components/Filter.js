import { dataManagement } from "./DataManagement.js"

const formEl = document.querySelector('.catalog-form')
const filter = document.querySelector('.catalog-form__list-col')
const filters = document.querySelectorAll('.custom-checkbox__field')
let selectedFilters = []

formEl.addEventListener('reset', () => {
    selectedFilters = []
    dataManagement()
})

filter.addEventListener('click', (e) => {
    selectedFilters = []
    if (e.target.classList.contains('custom-checkbox__field')) {
        filters.forEach(element => {
            if ((element.checked)) selectedFilters.push(element.value)
        })
        dataManagement()
    }
})

function getSelectedFilters() {
    return selectedFilters
}

function renderFilters(array) {
    const counters = document.querySelectorAll('.custom-checkbox__count')

    let counter = [0, 0, 0, 0, 0]

    array.forEach(element => {
        for (let j = 0; j < element.type.length; j++) {
            switch (element.type[j]) {
                case 'pendant':
                    counter[0]++
                    break
                case 'ceiling':
                    counter[1]++
                    break
                case 'overhead':
                    counter[2]++
                    break
                case 'point':
                    counter[3]++
                    break
                case 'nightlights':
                    counter[4]++
                    break
                default:
                    console.warn('Unknown type:', element.type)
            }
        }
    })

    counters.forEach((element, index) => {
        element.textContent = counter[index]
    })
}

export { getSelectedFilters, renderFilters }