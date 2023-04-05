const input = document.querySelector('.city-input')
const button = document.querySelector('.city-button')
const info = document.querySelector('.info')
const loader = document.querySelector('.loader')

function setValues(data) {
    input.value = ""

    const code = document.querySelector('.code')
    const name = document.querySelector('.name')
    const id = document.querySelector('.id')
    const latitude = document.querySelector('.latitude')
    const longitude = document.querySelector('.longitude')
    const cityName = document.querySelector('.city-name')
    const state = document.querySelector('.state')

    code.innerText = data.country.code
    name.innerText = data.country.name
    id.innerText = data.geo_id
    latitude.innerText = data.latitude
    longitude.innerText = data.longitude
    cityName.innerText = data.name
    state.innerText = data.state_or_region

    loader.classList.toggle('hidden')
    info.classList.toggle('hidden')
}

button.addEventListener('click', () => {
    !info.classList.contains('hidden') && info.classList.toggle('hidden')
    loader.classList.toggle('hidden')

    const inputValue = input.value
    const url = `https://api.apilayer.com/geo/city/name/${inputValue}`

    const myHeaders = new Headers();
    myHeaders.append("apikey", "1de1PDp0goQ1qGYoi8zyD4rrzq051YIx");

    const requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
    };

    fetch(url, requestOptions)
        .then(response => response.json())
        .then(result => setValues(result[0]))
        .catch(error => console.log('error', error));
})