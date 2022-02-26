

const showBtn = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displaDetails(data))

}
showBtn();
const displaDetails = (data) => {
    for (const country of data) {
        showCountries(country);
    }
}
const showCountries = (country) => {
    const countriesArea = document.getElementById('countries-area');
    const div = document.createElement('div')
    div.classList.add('div-class')
    div.innerHTML = `
    <h2>Name: ${country.name.common}</h2>
    <p>Capital City:  ${country.capital}</p>
    <button onClick="loadCountryByName('${country.name.common}')">Details</button>
    `


    countriesArea.appendChild(div);


}
const loadCountryByName = name => {
    const url = `https://restcountries.com/v3.1/name/${name}`
    fetch(url)
    .then(res => res.json())
    .then(data => showCountryDetails(data[0]))
}

const showCountryDetails=country=>{
    const countryDetails = document.getElementById('country-details')
    const div = document.createElement('div')
    div.innerHTML=`
    <h3>Region: ${country.region}</h3>
    <p>TimeZone: ${country.timezones}</p>
    <p>Area: ${country.area}</p>
    <p>Population: ${country.population}</p>
    `
    countryDetails.appendChild(div);
}