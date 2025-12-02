export default async function getData() {
    let data = await fetch('data/data.json')
    return await data.json()
}