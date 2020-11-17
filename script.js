const section = document.querySelector('section');
const aside = document.querySelector('aside');

let requestURL = 'ccan2020index.json';
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
    const myInfo = document.createElement('p');
    const myH3 = document.createElement('h3');
    const myPara1 = document.createElement('p');
    const myPara2 = document.createElement('p');
    const myPara3 = document.createElement('p');
    const line = document.createElement('hr');

  myH3.textContent =
    art_piece[i].winner + ' ' +
    art_piece[i].number + ' ' +
    art_piece[i].title + ' - ' +
    art_piece[i].artist;
  myPara1.textContent = 'City: ' + art_piece[i].city;
  myPara2.textContent = 'Medium: ' + art_piece[i].medium;
  myPara3.textContent = 'Price: $' + art_piece[i].price;


    myArticle.appendChild(myH3);
    myInfo.appendChild(myPara1);
    myInfo.appendChild(myPara2);
    myInfo.appendChild(myPara3);
    myArticle.appendChild(line);

    section.appendChild(myArticle);
    section.appendChild(myInfo);
    section.appendChild(line);

  }
}
