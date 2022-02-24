const countriesArea = document.getElementById('countries-area');
const showBtn = document.getElementById('show-btn');


showBtn.addEventListener('click', function(){
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=>displayCountries(data))
})


const displayCountries = data=>{
    for(const country of data){
        
        const h2 = document.createElement('h2');
        h2.innerText=`Name: ${country.name.official}// Capital: ${country.capital}`;
        countriesArea.appendChild(h2);
    }
}