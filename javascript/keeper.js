var playerCount = 0;

function prepForRosterInput () {
  var i = 0;
  var teamName = '';
  
  playerCount = document.getElementById('playerCount').value;
  teamName = document.getElementById('teamName').value;
  
  if (playerCount === '' || teamName === '') {
    alert('Please fill out all required fields.');
    return;
  } else if (!Number.isInteger(parseInt(playerCount, 10)) || playerCount > 1 || playerCount < 50) {
    alert('Player count must be a positive integer between 1 and 50.');
    return;
  }
}
