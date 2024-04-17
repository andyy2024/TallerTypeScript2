import { Data } from "./data.js";
const tvshowsTbody = document.getElementById('tvTbody');
let cardPicture = document.getElementById('card-Picture');
let cardTitle = document.getElementById('card-Title');
let cardDescription = document.getElementById('card-Description');
let kirbyButton = document.getElementById('kirbyButton');
let seasonsAvarage = 0;
kirbyButton.addEventListener("click", function (event) {
    if (kirbyButton.href === document.URL) {
        event.preventDefault();
        alert("Kirby is cute, indeed! But you can't go to the link because it's not available yet. :(");
    }
    else {
        // alert(kirbyButton.href)
    }
});
function showInfo(serie) {
    cardPicture.src = serie.imageLink;
    cardTitle.innerHTML = serie.name;
    cardDescription.innerHTML = serie.description;
    kirbyButton.href = serie.showLink;
    kirbyButton.text = "Go to " + serie.name;
}
function renderTable(tvshows) {
    //add tvshows
    tvshows.forEach(s => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td><b>${s.index}</b></td>
                             <td>${s.name}</td>
                             <td>${s.channel}</td>
                             <td>${s.seasons}</td>`;
        tvshowsTbody.appendChild(trElement);
        trElement.addEventListener("click", showInfo.bind(null, s));
    });
    //add seasons average
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td colspan="4">${"Seasons Avarage: " + seasonsAvarage}</td>`;
    tvshowsTbody.appendChild(trElement);
}
function getSeasonsAvarage() {
    let sum = 0;
    Data.forEach(s => {
        sum += s.seasons;
    });
    seasonsAvarage = sum / Data.length;
}
function fillTable() {
    getSeasonsAvarage();
    renderTable(Data);
}
window.onload = fillTable;
