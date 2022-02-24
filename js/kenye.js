const displayBtn = document.getElementById('display-btn');
displayBtn.addEventListener('click', function(){
    fetch('https://api.kanye.rest/')
    .then(res=>res.json())
    .then(data=>displayQuote(data.quote))
})


const displaArea = document.getElementById('display-area');
const displayQuote =data=>{
    const h2 = document.createElement('h2');
    h2.innerText = data;
    displaArea.appendChild(h2);

}