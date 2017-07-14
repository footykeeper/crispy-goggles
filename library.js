// Extremely basic, jQuery document ready loads the images and updates a gif count object in the document.
$(document).ready(function () {
  $('#gifCount').html(gifs.length);
  for (i = 0; i < gifs.length; i++) {
    $('#gallery').append(gifs[i].url);
    $('#gallery').append(gifs[i].credit);
  }
});
