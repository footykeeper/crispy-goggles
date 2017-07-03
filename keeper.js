var teamName = null;
    var date = null;
    var timeTable = null;
    var papay = null;
    var banan = null;
    var tomat = null;
    var startTime = null;
    var goalTimes = [];
    var displayStartTime = null;
    var elapsedTime = null;
    var rawr = null;
    var xd = null;
    var half = 0;
    var halfLength = null;
    // For finding elapsed time
    var elapsedTools = {
      date: null,
      time: null,
      elapsedTime: null,
      elapsedMinutes: null
    };
    // A row in the table to make creating the table much simpler
    var playerRow = "<tr><td><input type='text' placeholder='Name' class='pName'/></td><td><input type='text' placeholder='Number (1, 42, etc.)' class='pNumber'/></td><td><select placeholder='Position' class='pPosition'><option hidden selected>Select Position (optional, not recommended on teams were players play many positions)</option><option value='0'>Goalkeeper</option><option value='1'>Defender</option><option value='2'>Midfielder</option><option value='3'>Forward</option></select></td></tr>";
    var players = null;
    // Just a random name to store a document.getElementById value
    var papaya = null;
    
    function createTable () {
      // Get the player count based on user input
      teamName = document.getElementById("teamName").value;
      players = document.getElementById("playerCount").value;
      papaya = document.getElementById("containerOne");
      tomat = document.getElementById("halfLength");
      halfLength = tomat.value;
      document.getElementsByTagName("title")[0].innerHTML = teamName + " || footykeeper";
      document.getElementsByTagName("thead")[0].innerHTML = "<tr><th>Player</th><th>Number</th><th>Position</th></tr>";
      document.getElementsByTagName("tbody")[0].innerHTML = playerRow.repeat(players);
      document.getElementById("advancePrompt").innerHTML = "<span class='white'>When you are done inputing your roster and the referee has blown the starting whistle, click advance.</span><br/><br/><button onclick='prepForStart()'>Advance</button>";
      // Remove the start button and player count input
      papaya.removeChild(document.getElementById("teamName"));
      papaya.removeChild(document.getElementById("halfLength"));
      papaya.removeChild(document.getElementById("playerCount"));
      papaya.removeChild(document.getElementById("createTableButton"));
      papaya.removeChild(document.getElementById("pepe"));
      papaya.removeChild(document.getElementById("roblox"));
      papaya.removeChild(document.getElementById("shrek"));
      papaya.removeChild(document.getElementById("memez"));
    }
    // Empty array to be filled with player names
    var roster = [];
    // Empty array to be filled with player numbers
    var numbers = [];
    var rosterReps = null;
    
    function prepForStart () {
      date = new Date();
      startTime = date.getTime();
      displayStartTime = date;
      document.getElementById("displayTime").style.color = "#000";
      document.getElementById("displayTime").style.padding = "5px";
      document.getElementById("displayTime").style.backgroundColor = "#fff";
      document.getElementById("displayTime").style.borderRadius = "5px";
      document.getElementById("displayTime").innerHTML = "Start time: " + displayStartTime;
      for (rosterReps = 0; rosterReps < players; rosterReps++) {
        // Gets a player name from a row on the input table
        roster.push(document.getElementsByClassName("pName")[rosterReps].value);
        // Gets a player number from a row on the input table
        numbers.push(document.getElementsByClassName("pNumber")[rosterReps].value);
        // Creates a button that allows user to advance from table input
        document.getElementById("advancePrompt").innerHTML = "<span class='white'>Your team is saved, and the game has begun! Press 'GOAL!' when your team scores, or press 'END HALF' when the half is over.</span><br/><br/><button onclick='goal()'>GOAL!</button><br/><br/><button onclick='endHalf()'>END HALF</button>";
      }
    }
    
    function endHalf () {
      document.getElementById("advancePrompt").innerHTML = "";
      document.getElementById("containerTwo").innerHTML = "";
      document.getElementById("containerFour").innerHTML = "<button onclick='nextHalf()' id='nextHalfButton'>Begin next half</button>";
    }
    
    function nextHalf() {
      document.getElementById("displayTime").innerHTML += "<br/>Second half start time: " + new Date();
      document.getElementById("containerFour").removeChild(document.getElementById("nextHalfButton"));
      startTime = new Date().getTime();
      half = 1;
      document.getElementById("advancePrompt").innerHTML = "<span class='white'>Your team is saved, and the game has begun! Press 'GOAL!' when your team scores, or press 'END GAME' when the game is over.</span><br/><br/><button onclick='goal()'>GOAL!</button><br/><br/><button onclick='endGame()'>END GAME</button>";
    }
    
    // To be used in place/addition of i in later for loops
    var reps = null;
    // To be filled in later
    var dropdown = null;
    var scorerOption = "<option value='" + reps + "' class='scorerOption'>" + roster[reps] + "</option>";
    
    // To be triggered by user pressing a button when a player scores
    function goal () {
      elapsedTools.date = new Date();
      elapsedTools.time = elapsedTools.date.getTime();
      elapsedTools.elapsedTime = ((elapsedTools.time - startTime) / 1000);
      elapsedTools.elapsedMinutes = Math.round(elapsedTools.elapsedTime / 60);
      if (elapsedTools.elapsedMinutes <= halfLength) {
        elapsedTools.elapsedMinutes = String(elapsedTools.elapsedMinutes + 1 + half * halfLength + "'");
      } else if (elapsedTools.elapsedMinutes > halfLength) {
        elapsedTools.elapsedMinutes = parseInt(halfLength, 10) + parseInt(half, 10) * parseInt(halfLength, 10);
        elapsedTools.elapsedMinutes += "+";
      }
      goalTimes.push(elapsedTools.elapsedMinutes);
      // Adds opening select tag to scorer dropdown
      dropdown = "<select id='goalScorer'><option hidden>Select the scorer</option>";
      // Adds an option for each player
      for (reps = 0; reps < roster.length; reps++) {
        dropdown += "<option value='" + reps + "'>" + roster[reps] + "</option>";
      }
      dropdown += "</option></select>";
      dropdown += "<br/><br/>";
      // Essentially repeating the previous process, except prompting user for who made the assist
      dropdown += "<select id='goalAssist'><option hidden>Select who made the assist (leave blank if solo goal, free kick, or penalty kick)</option>";
      for (reps = 0; reps < roster.length; reps++) {
        dropdown += "<option value='" + reps + "'>" + roster[reps] + "</option>";
      }
      // Adds submit button
      dropdown += "</select><br/><br/><button onclick='submitGoal()'>Submit</button>";
      // Inserts dropdown into document
      // Note the use of the String() method. Without using it, the HTML fills in everything added as "undefined"
      document.getElementById("goalPrompt").innerHTML = String(dropdown);
    }
    
    // To be filled in later
    var scorers = [];
    // To be filled in later
    var assists = [];
    // Added to each time a goal is submitted
    var goalCount = 0;
    
    function submitGoal () {
      // Accesses user input
      scorers.push(document.getElementById("goalScorer").value);
      assists.push(document.getElementById("goalAssist").value);
      // Adds to goalCount
      goalCount++;
      // Removes goal prompt, can be found again by pressing GOAL button
      document.getElementById("goalPrompt").innerHTML = "";
    }
    
    // To be filled in later
    var playerGoals = [];
    // To be filled in later
    var playerAssists = [];
    var endTable = "<table><thead><tr><th>Player</th><th>Number</th><th>Goals/Assists</th></tr></thead><tbody>";
    
    function assignGoals () {
      // Give each player 0 to begin
      for (reps = 0; reps < roster.length; reps++) {
        playerGoals.push(0);
      }
      // Possibly the most confusing part of the code, each player is on the roster as an integer.
      // The first player is 0, the next 1, and so on.
      // When a player scores, the scorer array has their number added to it.
      // This for loop selects a player
      for (reps = 0; reps < roster.length; reps++) {
        // This for loop selects a scorer
        for (i = 0; i < goalCount; i++) {
          // If the player's integer matches the scorers integer
          if (reps == scorers[i]) {
            // Add 1 goal to their slot on the playerGoals array
            playerGoals[reps]++;
          }
        }
      }
      // This is the same process as the scorer process, just assigning assists rather than goals
      for (reps = 0; reps < roster.length; reps++) {
        playerAssists.push(0);
      }
      
      for (reps = 0; reps < roster.length; reps++) {
        for (i = 0; i < goalCount; i++) {
          if (reps == assists[i]) {
            playerAssists[reps]++;
          }
        }
      }
      timeTable = "";
      for (reps = 0; reps < goalCount; reps++) {
        // The answer to life, the universe, and everything
        // timeTable = 42;
        timeTable += goalTimes[reps] + ": " + roster[scorers[reps]] + " scored.";
        timeTable += "<br/>";
      }
    }
    
    function endGame () {
      // Calls the monstrous function just above
      assignGoals();
      // Creates table displaying each player, their number, and their amount of goals/assists.
      for (reps = 0; reps < roster.length; reps++) {
        endTable += "<tr><td>" + roster[reps] + "</td><td>" + numbers[reps] + "</td><td>" + playerGoals[reps] + "/" + playerAssists[reps] + "</td>";
      }
      endTable += "</tbody></table><br/><p id='finalContainer'></p>";
      // Inserts table in document
      document.getElementsByTagName("body")[0].innerHTML = endTable;
      document.getElementById("finalContainer").style.backgroundColor = "#fff";
      document.getElementById("finalContainer").style.color = "#000";
      document.getElementById("finalContainer").style.padding = "5px";
      document.getElementById("finalContainer").innerHTML = timeTable;
    }
