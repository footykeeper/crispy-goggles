var playerCount = 0;
var roster = [];
var playerNumbers = [];

function prepForRosterInput () {
  var i = 0;
  var teamName = '';
  var rosterInputTable = '';
  
  playerCount = document.getElementById('playerCount').value;
  teamName = document.getElementById('teamName').value;
  
  if (playerCount === '' || teamName === '') {
    alert('Please fill out all required fields.');
    return;
  } else if (!Number.isInteger(parseInt(playerCount, 10)) || playerCount < 1 || playerCount > 50) {
    alert('Player count must be a positive integer between 1 and 50.');
    return;
  }
  
  for (i = 0; i < playerCount; i++) {
    rosterInputTable += '<tr><td><input type="text" class="w3-input pName" placeholder="Player Name"/></td><td><input type="text" class="w3-input pNumber" placeholder="Player Number"/></td></tr>';
  }
  
  document.getElementById('rosterTable').innerHTML += rosterInputTable;
  document.getElementById('homeScreen').style.display = 'none';
  document.getElementById('rosterInput').style.display = 'block';
}

function waitForStart () {
  for (i = 0; i < document.getElementsByClassName('pName').length; i++) {
    if (document.getElementsByClassName('pName')[i].value === '' || document.getElementsByClassName('pNumber')[i].value === '') {
      alert('Please fill out name and number for each player.');
      return;
    } else if (!Number.isInteger(parseInt(document.getElementsByClassName('pNumber')[i].value, 10)) || document.getElementsByClassName('pNumber')[i].value < 1 || document.getElementsByClassName('pNumber')[i].value > 99) {
      alert('Player number must be an integer between 1 and 99.');
      return;
    }
  }
  
  for (i = 0; i < playerCount; i++) {
    roster.push(document.getElementsByClassName('pName')[i].value);
    playerNumbers.push(document.getElementsByClassName('pNumber')[i].value);
  }
  
  document.getElementById('rosterInput').style.display = 'none';
  document.getElementById('stageOne').style.display = 'block';
}
