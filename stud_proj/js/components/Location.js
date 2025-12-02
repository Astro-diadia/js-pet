const locationBtn = document.querySelector('.location__city')
const locationName = document.querySelector('.location__city-name')
const locationSublist = document.querySelector('.location__sublist')

locationBtn.addEventListener('click', (e) => {
    locationBtn.classList.toggle('location__city--active')
})

locationSublist.addEventListener('click', (e) => {
    if (e.target == locationSublist) return
    locationName.textContent = e.target.textContent
    locationBtn.classList.toggle('location__city--active')
})