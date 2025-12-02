import { dataManagement } from "./DataManagement.js"

const formEl = document.querySelector('.catalog-form')
const radioEl = document.querySelector('.catalog-form__list-row')
let presenceRequired = false

formEl.addEventListener('reset', () => {
    presenceRequired = false
    dataManagement()
})

radioEl.addEventListener('click', (e) => {
    if (e.target.classList.contains('custom-radio__field')) {
        presenceRequired = e.target.value === 'instock' ? true : false
        dataManagement()
    }
})

function getpresenceRequired() {
    return presenceRequired
}

export { getpresenceRequired }