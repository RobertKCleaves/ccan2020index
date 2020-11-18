const section = document.querySelector('section');

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
    const headLine = document.createElement('h3');
    const theInfo = document.createElement('ul');
    const theCity = document.createElement('li')
    const theMedium = document.createElement('li')
    const thePrice = document.createElement('li')
    const line = document.createElement('hr');

    headLine.textContent =
      art_piece[i].winner + ' ' +
      art_piece[i].number + ' ' +
      art_piece[i].title + ' - ' +
      art_piece[i].artist;
    theCity.textContent = 'City: ' + art_piece[i].city;
    theMedium.textContent = 'Medium: ' + art_piece[i].medium;
    thePrice.textContent = 'Price: $' + art_piece[i].price;

    theInfo.appendChild(theCity);
    theInfo.appendChild(theMedium);
    theInfo.appendChild(thePrice);
    section.appendChild(headLine);
    section.appendChild(theInfo);


  }
}
