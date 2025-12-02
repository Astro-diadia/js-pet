import getData from "./Fetch.js"
import paginate from "./Paginator.js"
import { getSortMethod } from "./CatalogSort.js"
import { getpresenceRequired } from "./Aviabillity.js"
import { getSelectedFilters, renderFilters } from "./Filter.js"

let res = await getData()

renderFilters(res)

async function dataManagement() {
  let filters = getSelectedFilters()
  let filterRes = []
  let fl = filters.length

  if (fl != 0) {
    res.forEach(element => {
      if (element.type.some(t => filters.includes(t))) {
        filterRes.push(element)
      }
    })
  } else {
    filterRes = res
  }

  let presenceRequired = getpresenceRequired()
  if (presenceRequired) {
    filterRes = filterRes.filter(item => Object.values(item.availability).some(value => value > 0))
  }

  let sortMet = getSortMethod()
  switch (sortMet) {
    case "price-max":
      filterRes.sort((a, b) => b.price.new - a.price.new)
      break;

    case "rating-max":
      filterRes.sort((a, b) => b.rating - a.rating)
      break;

    default:
      filterRes.sort((a, b) => a.price.new - b.price.new)
  }

  paginate(filterRes, 1)

  return filterRes
}

export { dataManagement }
