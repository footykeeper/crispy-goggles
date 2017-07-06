// Created by footykeeper Copyright (c) 2017
// View orginal source code: https://github.com/footykeeper/crispy-goggles
// View license: https://github.com/footykeeper/crispy-goggles/blob/master/LICENSE.txt
// View website: http://footykeeper.com
// This is navigation.js. This Javascript is designed to fill in the navigation links on every page. Because updating every page would be a hassle, all you have to do is add a new object to the links array, and every page with this script linked will automatically update.
// Links to be made navigation buttons
// To add a button, just add another object to the array
var links = [
  {
    name: "Home",
    url: "index"
  },
  
  {
    name: "Keeper",
    url: "keeper"
  },
  
  {
    name: "Messi Edition",
    url: "messi"
  },
  
  {
    name: "Ronaldo Edition",
    url: "ronaldo"
  }
  
  /*
  {
    name: "About Us",
    url: "about"
  }
  */
];

var link = null;

function createLinks () {
  // Set link to an empty string
  link = "";
  
  // Add navigation buttons
  for (i = 0; i < links.length; i++) {
    link += "<td class='nav-button'><a href='" + links[i].url + "' class='plain-link'>" + links[i].name + "</a></td><td></td>";
  }
  
  // Fill in the table with the links
  document.getElementById("targetRow").innerHTML = link;
}
