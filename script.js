const section = document.querySelector('section');

let requestURL = 'https://spacemanrc.github.io/ccan2020index/ccan2020index.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  const artPieces = request.response;
  showArt(artPieces);
}

function showArt(obj) {
  const art_piece = obj['pieces'];

  for(let i = 0; i < art_piece.length; i++) {
    const myArticle = document.createElement('article');
    const myH2 = document.createElement('h2');
    const myPara1 = document.createElement('p');
    const myPara2 = document.createElement('p');
    const myPara3 = document.createElement('p');

  myH2.textContent =
    artPieces[i].winner + ' ' +
    artPieces[i].title + ' - ' +
    artPieces[i].artist;
  myPara1.textContent = 'City: ' + artPieces[i].city;
  myPara2.textContent = 'Medium: ' + artPieces[i].medium;
  myPara3.textContent = 'Price: ' + artPieces[i].price;
  }

    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myList);

    section.appendChild(myArticle);

}
