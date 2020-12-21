# CCAN 2020 Index

### Built for the Center of Contemporary Arts National Juried Competition 2020 (CCAN 2020)

[The Center for Contemporary Arts](https://center-arts.com), Abilene, Texas

<p align="center">
  <img src="https://github.com/RobertKCleaves/ccan2020index/blob/main/assets/ccan_gallery_picture.jpg" alt="CCAN 2020">
</p>

With more than 130 pieces in our gallery, we had to number each art piece and print an index. Due to COVID, high-contact surfaces like pamphlets were a concern so we printed a QR code and hosted the PDF of the index. I built this mobile-friendly site in lieu of the static PDF.

<p align="center">
  <img width="30%" src="https://github.com/RobertKCleaves/ccan2020index/blob/main/assets/index_example.gif" alt="Material Bread logo">
</p>

## JSON File 📊
First, I had to convert our established excel sheet into a JSON file. It's hosted in the assets folder.

## The Script 📄
With help from [Mozilla docs](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON), I wrote a script that prints the index number, art, and artist with it's city, medium, and price.

## Accordion 🪗
Then I used [jQuery's](https://jqueryui.com/accordion/)  `accordion` UI function to hide the latter info to shorten the website and make it more manageable to scroll through.

## Bootstrap 🅱️
Picked up the most of the CSS work.

## ccan.art 🌐
Finally, I hosted it on Github Pages with a [ccan.art*](ccan.art) domain name so to not scare guests who aren't familiar with a `github.io` URL when it pops up after the QR code is scanned.

\* - Soon to be defunct
