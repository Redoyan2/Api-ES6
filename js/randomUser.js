
const showBtn = document.getElementById('show-btn');
showBtn.addEventListener('click', function () {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => showQuote(data))

})
const showArea = document.getElementById('show-area');
const showQuote = data => {
    const buddys = data.results;
    for (const buddy of buddys) {
        console.log(buddy);
        const h2 = document.createElement('h2');
        const p = document.createElement('p');
        h2.innerText = buddy.email;
        p.innerText=`Name : ${buddy.name.first} ${buddy.name.last}
        ${buddy.gender}`;
        showArea.appendChild(h2);
        showArea.appendChild(p);
    }

}