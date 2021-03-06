const section = document.querySelector('section');

let requestURL = 'assets/ccan2020index.json';
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

    // Elements for Headline & Info
    // Headline
    // (winner) # Title - Artist

    const headLine = document.createElement('h3');
    // --------------------------------------------
    const theWinner = document.createElement('h4');
    const theNumber = document.createElement('a');
    const theTitle = document.createElement('i');
    const theArtist = document.createElement('h4');

    // Info
    /*  City:
        Medium:
        Price: */

    const theInfo = document.createElement('ul');
    //-------------------------------------------
    const theCity = document.createElement('li');
    const theMedium = document.createElement('li');
    const thePrice = document.createElement('li');

    // Headline & Info into text
    // Headline
    theWinner.textContent = art_piece[i].winner + ' ';
    theNumber.textContent = art_piece[i].number + ' ';
    theTitle.textContent = art_piece[i].title;
    theArtist.textContent = ' - ' + art_piece[i].artist;
    // Info
    theCity.textContent = 'City: ' + art_piece[i].city;
    theMedium.textContent = 'Medium: ' + art_piece[i].medium;
    thePrice.textContent = 'Price: $' + art_piece[i].price;

    // Attach the text to the Elements
    headLine.appendChild(theWinner);
    headLine.appendChild(theNumber);
    headLine.appendChild(theTitle);
    headLine.appendChild(theArtist);
    theInfo.appendChild(theCity);
    theInfo.appendChild(theMedium);
    theInfo.appendChild(thePrice);
    section.appendChild(headLine);
    section.appendChild(theInfo);
  }
}
