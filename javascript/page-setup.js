// This file contains the onload scripts and essential scripts for the page to operate (ie. navigation)

document.body.onload = function () {
  createNavigation();
};

function createNavigation () {
  var i = 0;
  var links = [];
  
  links = [
    {
      name: 'Home',
      url: '/'
    },
    
    {
      name: 'Keeper',
      url: '/keeper/'
    }
  ];
  
  for (i = 0; i < links.length; i++) {
    document.getElementById('navSidebar').innerHTML += "<a href='" + links[i].url + "' class='w3-bar-item w3-button w3-hover-none w3-border-white w3-bottombar w3-hover-border-green'>" + links[i].name + "</a>";
  }
}

function w3_open() {
  document.getElementById("navSidebar").style.display = "block";
} function w3_close() {
  document.getElementById("navSidebar").style.display = "none";
}

function openTab(tabName) {
  var i = 0;
  var x = document.getElementsByClassName('tab');
  
  for (i = 0; i < x.length; i++) {
     x[i].style.display = 'none';  
  }
  
  document.getElementById(tabName).style.display = 'block';
}
