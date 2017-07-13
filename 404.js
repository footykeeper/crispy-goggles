var target = null;
var image = null;
var credit = null;
var gifs = [
  {
    url: "<br/><img src='http://data.whicdn.com/images/140382223/original.gif'/>",
    credit: "<br/><p>From We Heart It</p>"
  },
  
  {
    url: "<br/><img src='https://media.tenor.com/images/1fdc8b1ef9f184bbe9c28d63f68e39bb/tenor.gif'/>",
    credit: "<br/><p>tenor</p>"
  }
];

$(document).ready(function () {
  $('#gifTrigger').click(function () {
    target = Math.floor(Math.random() * (((gifs.length - 1) - 0) + 1));
    $('#jar').append(gifs[target].url);
    $('#jar').append(gifs[target].credit);
  });
});
