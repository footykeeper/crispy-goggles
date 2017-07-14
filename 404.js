var target = null;
var image = null;
var credit = null;
var gifs = [
  {
    url: "<br/><br/><img src='http://data.whicdn.com/images/140382223/original.gif'/>",
    credit: "<br/><p>From We Heart It</p>"
  },
  
  {
    url: "<br/><br/><img src='https://media.tenor.com/images/1fdc8b1ef9f184bbe9c28d63f68e39bb/tenor.gif'/>",
    credit: "<br/><p>From tenor</p>"
  },
  
  {
    url: "<br/><br/><img src='https://media.giphy.com/media/mhicJGJVAg48w/giphy.gif'/>",
    credit: "<br/><p>From giphy</p>"
  },
  
  {
    url: "<br/><br/><img src='https://usatthebiglead.files.wordpress.com/2013/10/zlatan-ibrahimovic-third-goal-against-anderlecht.gif'/>",
    credit: "<br/><p>From TheBigLead</p>"
  },
  
  {
    url: "<br/><br/><img src='https://usatthebiglead.files.wordpress.com/2013/09/cristiano-ronaldo-goal-against-galatasaray-3.gif'/>",
    credit: "<br/><p>From TheBigLead</p>"
  },
  
  {
    url: "<br/><br/><img src='https://media.giphy.com/media/knImDj8tlNsRi/giphy.gif'/>",
    credit: "<br/><p>From giphy</p>"
  },
  
  {
    url: "<br/><br/><img src='https://68.media.tumblr.com/d72f853466efb45dc24d2aa28bbf9008/tumblr_olm60ybLDW1qesncyo2_500.gif'/>",
    credit: "<br/><p>From tumblr</p>"
  },
  
  {
    url: "<br/><br/><img src='https://media.giphy.com/media/xT4uQ9bf9v7wplzDby/giphy.gif'/>",
    credit: "<br/><p>From giphy</p>"
  },
  
  {
    url: "<br/><br/><img src='https://media.giphy.com/media/V1ob5w3WsINKU/giphy.gif'/>",
    credit: "<br/><p>From giphy</p>"
  },
  
  {
    url: "<br/><br/><img src='https://usatftw.files.wordpress.com/2013/10/mex2.gif'/>",
    credit: "<br/><p>From For the Win</p>"
  }
];

$(document).ready(function () {
  $('#options').html(gifs.length);
  $('#gifTrigger').click(function () {
    target = Math.floor(Math.random() * (((gifs.length - 1) - 0) + 1));
    $('#jar').append(gifs[target].url);
    $('#jar').append(gifs[target].credit);
  });
});
