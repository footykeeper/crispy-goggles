    // Created by footykeeper Copyright (c) 2017
    // View orginal source code: https://github.com/footykeeper/crispy-goggles
    // View website: http://footykeeper.com
    var teamName = null;
    var penalties = false;
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
    var extraTimeHalfLength = null;
    var extraTimeHalf = null;
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
    var wallpaperChoice = null;
    var redoSelection = true;
    var wallpapers = [
      {
        name: "messi",
        url: "http://99pcwallpapers.com/wp-content/uploads/lionel-messi-black-and-white-wallpaper.jpg",
        credit: "99 PC Wallpapers"
      },
      
      {
        name: "ronaldo",
        url: "https://images6.alphacoders.com/614/614633.jpg",
        credit: "Wallpaper Abyss"
      },
      
      {
        name: "original",
        url: "http://yesofcorsa.com/wp-content/uploads/2015/08/1713_soccer.jpg",
        credit: "WHQ: Wallpapers High Quality"
      },
      
      {
        name: "ibrahimovic",
        url: "http://www.hdwallpaper.nu/wp-content/uploads/2016/01/zlatan_ibrahimovic_wallpaper_93600.jpg",
        credit: "HDWallpaper.nu"
      },
      
      {
        name: "suarez",
        url: "http://www.hdwallpaper.nu/wp-content/uploads/2016/01/luis_suarez_wallpaper_1452.jpg",
        credit: "HDWallpaper.nu"
      },
      
      {
        name: "rooney",
        url: "http://wallpapercave.com/wp/wc1672951.jpg",
        credit: "Wallpaper Cave"
      },
      
      {
        name: "neymar",
        url: "http://wallpapercave.com/wp/wc1697553.jpg",
        credit: "Wallpaper Cave"
      },
      
      {
        name: "bale",
        url: "http://wallpapersdsc.net/wp-content/uploads/2016/01/Gareth-Bale-Wallpapers.jpg",
        credit: "Wallpaper Cave"
      }
    ];

    var asdf = null;
    var santiago = null;
    function selectWallpaper () {
      asdf = "Which wallpaper would you like? Options: ";
      for (i = 0; i < wallpapers.length; i++) {
        asdf += "'" + wallpapers[i].name.toUpperCase() + "' ";
      }
      wallpaperChoice = prompt(asdf);
      // wallpaperChoice = prompt("Which wallpaper would you like? You may choose 'STANDARD', 'MESSI', 'RONALDO', 'NEYMAR', 'IBRAHIMOVIC', 'ROONEY', or 'SUAREZ'. Please spell names letter-for-letter, however, it is not case-sensitive.");
      for (i = 0; i < wallpapers.length; i++) {
        if (wallpapers[i].name == wallpaperChoice.toLowerCase()) {
          document.getElementsByTagName("body")[0].style.backgroundImage = "url('" + String(wallpapers[i].url) + "')";
          alert("You have selected the " + wallpapers[i].name + " wallpaper, from " + wallpapers[i].credit);
          redoSelection = false;
        }
      } if (wallpaperChoice.toLowerCase() == "standard") {
        redoSelection = false;
      } else if (redoSelection) {
        santiago = prompt("Your input was either not valid or processed incorrectly. Would you like to try again? 'YES' or 'NO', please.");
        if (santiago.toLowerCase() == "yes") {
          selectWallpaper();
        }
      }
      createLinks();
    }
    
    function createTable () {
      // Get the player count based on user input
      teamName = document.getElementById("teamName").value;
      players = document.getElementById("playerCount").value;
      papaya = document.getElementById("containerOne");
      tomat = document.getElementById("halfLength");
      halfLength = tomat.value;
      document.getElementsByTagName("title")[0].innerHTML = teamName + " || footykeeper";
      document.getElementById("rosterHead").innerHTML = "<tr><th>Player</th><th>Number</th><th>Position</th></tr>";
      for (i = 0; i < players; i++) {
        document.getElementById("rosterBody").innerHTML += playerRow;
      }
      // document.getElementById("rosterBody").innerHTML = playerRow.repeat(players);
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
      document.getElementById("advancePrompt").innerHTML = "<span class='white'>The second half has begun! Press 'GOAL!' when your team scores, press 'BEGIN EXTRA TIME', or press 'END GAME' when the game is over.</span><br/><br/><button onclick='goal()'>GOAL!</button><br/><br/><button onclick='beginExtraTime()'>BEGIN EXTRA TIME</button><br/><br/><button onclick='endGame()'>END GAME</button>";
    }
    
    // To be used in place/addition of i in later for loops
    var reps = null;
    // To be filled in later
    var dropdown = null;
    var scorerOption = "<option value='" + reps + "' class='scorerOption'>" + roster[reps] + "</option>";
    
    function beginExtraTime () {
      document.getElementById("advancePrompt").innerHTML = "<select id='overTimeHalfLength'><option hidden>Select extra time half length</option><option value='5'>5 Minutes</option><option value='10'>10 Minutes</option><option value='15'>15 Minutes</option></select><br/><br/><span class='white'>When the referee blows the starting whistle, press 'START EXTRA TIME'. Press 'GOAL' when your team scores, or press 'END HALF' when this half of extra time is over.</span><br/><br/><button onclick='startExtraTime()'>START EXTRA TIME</button>";
    }

    function startExtraTime () {
      extraTimeHalfLength = document.getElementById("overTimeHalfLength").value;
      document.getElementById("displayTime").innerHTML += "<br/>First half of extra time start time: " + new Date();
      document.getElementById("advancePrompt").innerHTML = "<span class='white'>Press 'GOAL!' when your team scores, or press 'END HALF' when the half ends.</span><br/><br/><button onclick='goal()'>GOAL!</button><br/><br/><button onclick='endExtraTimeHalf()'>END HALF</button>";
      startTime = new Date().getTime();
      half = 2;
      extraTimeHalf = 0;
    }

    function endExtraTimeHalf () {
      document.getElementById("advancePrompt").innerHTML = "<span class='white'>Press 'BEGIN HALF' to start the final period of extra time.</span><br/><br/><button onclick='finalExtraTime()'>BEGIN HALF</button>";
    }

    function finalExtraTime () {
      extraTimeHalf = 1;
      startTime = new Date().getTime();
      document.getElementById("displayTime").innerHTML += "<br/>Second half of extra time start time: " + new Date();
      document.getElementById("advancePrompt").innerHTML = "<span class='white'>Press 'GOAL!' when your team scores, press 'BEGIN SHOOTOUT' to begin a penalty shootout, or press 'END GAME' to end the game.</span><br/><br/><button onclick='goal()'>GOAL!</button><br/><br/><button onclick='shootout()'>BEGIN SHOOTOUT</button><br/><br/><button onclick='endGame()'>END GAME</button>";
    }

    function shootout () {
      penalties = true;
      document.getElementById("advancePrompt").innerHTML = "<span class='white'>Press 'SHOOT' when one of your players shoot their penalty, or press 'END GAME' when the shootout is over.</span><br/><br/><button onclick='shoot()'>SHOOT</button><br/><br/><button onclick='endGame()'>END GAME</button>";
    }
    
    var penaltyPrompt = null;
    // To be filled in later
    var shooters = [];
    // To be filled in later
    var results = [];
    
    function shoot () {
      penaltyPrompt = "<select id='pShooter'><option hidden>Select Shooter</option>";
      for (reps = 0; reps < roster.length; reps++) {
        penaltyPrompt += "<option value='" + reps + "'>" + roster[reps] + "</option>";
      }
      penaltyPrompt += "</select><br/><br/><select id='result'><option hidden>Did they score?</option><option value='0'>No</option><option value='1'>Yes</option></select><br/><br/><button onclick='submitPenalty()'>Submit</button>";
      document.getElementById("goalPrompt").innerHTML = String(penaltyPrompt);
    }

    function submitPenalty () {
      shooters.push(document.getElementById("pShooter").value);
      results.push(document.getElementById("result").value);
      document.getElementById("goalPrompt").innerHTML = "";
    }

    // To be triggered by user pressing a button when a player scores
    function goal () {
      elapsedTools.date = new Date();
      elapsedTools.time = elapsedTools.date.getTime();
      elapsedTools.elapsedTime = ((elapsedTools.time - startTime) / 1000);
      elapsedTools.elapsedMinutes = Math.round(elapsedTools.elapsedTime / 60);
      if (elapsedTools.elapsedMinutes <= halfLength) {
        elapsedTools.elapsedMinutes = String(elapsedTools.elapsedMinutes + 1 + half * halfLength + extraTimeHalf * extraTimeHalfLength + "'");
      } else if (elapsedTools.elapsedMinutes > halfLength) {
        elapsedTools.elapsedMinutes = parseInt(halfLength, 10) + parseInt(half, 10) * parseInt(halfLength, 10) + parseInt(extraTimeHalf, 10) * parseInt(extraTimeHalfLength, 10);
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
    
    // To be filled in later via pushes
    var playerGoals = [];
    // To be filled in later via pushes
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
    
    var penTable = null;
    var penGoals = [];
    var penAttempts = [];

    function endGame () {
      // Calls the monstrous function just above
      assignGoals();
      // Creates table displaying each player, their number, and their amount of goals/assists.
      for (reps = 0; reps < roster.length; reps++) {
        endTable += "<tr><td>" + roster[reps] + "</td><td>" + numbers[reps] + "</td><td>" + playerGoals[reps] + "/" + playerAssists[reps] + "</td>";
      }
      endTable += "</tbody></table><br/><p id='finalContainer'></p><p id='penContainer'></p><br/><br/><button onclick='print()' id='print'>Print Page</button>";
      // Inserts table in document
      document.getElementsByTagName("body")[0].innerHTML = endTable;
      document.getElementById("finalContainer").style.backgroundColor = "#fff";
      document.getElementById("finalContainer").style.color = "#000";
      document.getElementById("finalContainer").style.padding = "5px";
      document.getElementById("finalContainer").innerHTML = timeTable;
      // Check for penalty shootout and address it
      if (penalties === true) {
        for (i = 0; i < roster.length; i++) {
          penGoals.push(0);
          penAttempts.push(0);
        }
        penTable = "";
        for (reps = 0; reps < roster.length; reps++) {
          for (i = 0; i < shooters.length; i++) {
            if (reps == shooters[i]) {
              penAttempts[reps]++;
              if (results[i] === 0) {
                // Do nothing, 0 means they missed or were blocked
              } else if (results[i] == 1) {
                // Add a goal, 1 means they scored
                penGoals[reps]++;
              }
            }
          }
        }
        penTable = "<table><thead><tr><th>Player</th><th>Number</th><th>Penalty Attempts/Penalty Goals</th></tr></thead><tbody>";
        for (reps = 0; reps < roster.length; reps++) {
          penTable += "<tr><td>" + roster[reps] + "</td><td>" + numbers[reps] + "</td><td>" + penAttempts[reps] + "/" + penGoals[reps] + "</td></tr>";
        }
        penTable += "</tbody><table>";
        document.getElementById("penContainer").innerHTML = String(penTable);
      }
    }
