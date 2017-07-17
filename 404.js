var target = null;
var image = null;
var credit = null;
$(document).ready(function () {
  $('#options').html(gifs.length);
  $('#gifTrigger').click(function () {
    target = Math.floor(Math.random() * (((gifs.length - 1) - 0) + 1));
    $('#jar').append(gifs[target].url);
    $('#jar').append(gifs[target].credit);
  });
});
