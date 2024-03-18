<?php
require_once('_config.php');

use yatzy\Dice;

$d = new Dice();



for ($i=1; $i<=5; $i++) {
  echo "ROLL {$i}: {$d->roll()}<br>";
}

?>
<!DOCTYPE html>

<html>

<head>

<script src="gameImage.js" defer></script>
<script src="clientGame.js" defer></script>

<link rel="stylesheet" href="yatzy.css">

<title>index</title>




</head>


<body>

   Index.php<br><br>

<br><br><br>
<div id="output">--</div>
<button id="version">Version</button>

<script>
const output = document.getElementById("output");
const version = document.getElementById("version");
version.onclick = function(e) {
  const xmlhttp = new XMLHttpRequest();

  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == XMLHttpRequest.DONE) {
      if (xmlhttp.status == 200) {
        output.innerHTML = xmlhttp.responseText;
      }
    }
  };
  xmlhttp.open("GET", "/api.php", true);
  xmlhttp.send();
}
</script>

<br><br><br>

<div class= "diceBoard">
    <div class = "die" id="die1">dice 1: 0</div>
    <div class = "die" id="die2"> dice 2: 0</div>
    <div class = "die" id="die3">dice 3: 0</div>
    <div class = "die" id="die4">dice 4: 0</div>
    <div class = "die" id="die5">dice 5: 0</div>
</div>
<button id="roll">Roll</button>

<script>

//Script for the roll button
const die1 = document.getElementById("die1");
const die2 = document.getElementById("die2");
const die3 = document.getElementById("die3");
const die4 = document.getElementById("die4");
const die5 = document.getElementById("die5");
const roll = document.getElementById("roll");
roll.onclick = function() {

  const xmlhttp = new XMLHttpRequest();

  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == XMLHttpRequest.DONE) {
      if (xmlhttp.status == 200) {
        var jsonResponse = JSON.parse(xmlhttp.responseText);
        die1.innerHTML = "dice 1: " + jsonResponse.value1;
        die2.innerHTML = "dice 2: " + jsonResponse.value2;
        die3.innerHTML = "dice 3: " + jsonResponse.value3;
        die4.innerHTML = "dice 4: " + jsonResponse.value4;
        die5.innerHTML = "dice 5: " + jsonResponse.value5;

      }
    }
  };
  xmlhttp.open("GET", "/api.php?action=roll", true);
  xmlhttp.send();
}

</script>



<br><br><div id = "state1">state: 0</div><br>



<div class = "game" id ="game">
    <div class = gtitle>
        <div class = "gameTitle"><h1>YATZY</h1> </div>
        
        
        <div class = "rules"> <h4> &rarr; <a href = "https://en.wikipedia.org/wiki/Yatzy">The rules</a></h4></div>
    </div>
        <br><br>
    <div class ="state" id ="state"><h3>Roll dice 1</h3></div>


    <div class = "diceBoard">
        <!--Dice 1-->
        <div class = diceGroup>
        <div class ="dice1" id ="dice1"><svg width="120" height="120"><rect x="0" y="0" width="120" height="120" stroke="black" stroke-width="4" fill = "white" /></svg></div><br> <div class = "d1Status"><button class = "diceButton" id="d1Status">Rolling</button></div>
        </div>
        <!--Dice 2-->
        <div class = diceGroup>
        <div  class ="dice2" id ="dice2"><svg width="120" height="120"><rect x="0" y="0" width="120" height="120" stroke="black" stroke-width="4" fill = "white" /></svg></div><br> <div class = "d2Status"><button class = "diceButton" id="d2Status">Rolling</button></div>
        </div>
        <!--Dice 3-->
        <div class = diceGroup>
        <div  class ="dice3" id ="dice3"><svg width="120" height="120"><rect x="0" y="0" width="120" height="120" stroke="black" stroke-width="4" fill = "white" /></svg></div><br> <div class = "d3Status"><button class = "diceButton" id="d3Status">Rolling</button></div>
        </div>
        <!--Dice 4-->
        <div class = diceGroup>
        <div class ="dice4" id ="dice4"><svg width="120" height="120"><rect x="0" y="0" width="120" height="120" stroke="black" stroke-width="4" fill = "white" /></svg></div><br> <div class = "d4Status"><button class = "diceButton" id="d4Status">Rolling</button></div>
        </div>
        <!--Dice 5-->
        <div class = diceGroup>
        <div  class ="dice5" id ="dice5"><svg width="120" height="120"><rect x="0" y="0" width="120" height="120" stroke="black" stroke-width="4" fill = "white" /></svg></div><br> <div class = "d5Status"><button class = "diceButton" id="d5Status">Rolling</button></div>
        </div>
    </div>

   <div id = "diceRoll" class = "divdiceRoll"> <button id="diceRoll" class = diceRoll>Roll Dices!</button></div>

   <br>
   <!--<div class ="score">Score:</div>-->
   <!--<div  class ="scoreValue" id ="scoreValue">0</div>-->
   

    <br>


    <div class = "scoreBoardTitle"><h2>Score Board</h2></div>
    <div class = "scoreBoard">
        <br>
        <div class="upperSection">
            <div class = "scoreHov" id = "ones" >ones: 0</div>
            <div class = "scoreHov" id = "twos">twos: 0</div>
            <div class = "scoreHov" id = "threes">threes: 0</div>
            <div class = "scoreHov" id = "fours">fours: 0</div>
            <div class = "scoreHov" id = "fives">fives: 0</div>
            <div class = "scoreHov" id = "sixes">sixes: 0</div>
            <div id = "sum">sum: 0</div>
            <div id = "bonus">bonus: 0</div>
        </div>
        <br>
        <br>
        <br>
        <div class = "lowerSection">
            <div class = "scoreHov" id = "onePair">One Pair: 0</div>
            <div class = "scoreHov" id = "twoPair">Two Pair: 0</div>
            <div class = "scoreHov" id = "threeOfKind">Three of a kind: 0</div>
            <div class = "scoreHov" id = "fourOfKind">Four of a kind: 0</div>
            <div class = "scoreHov" id = "fullHouse">Full house: 0</div>
            <div class = "scoreHov" id = "smallStraight">Small straight: 0</div>
            <div class = "scoreHov" id = "largeStraight">Long straight: 0</div>
            <div class = "scoreHov" id = "chance">Chance: 0</div>
            <div class = "scoreHov" id = "yatzy">Yatzy: 0</div>
        </div>
        <br>
        <div id = "total">TOTAL SCORE:</div>
    </div>

</div>
<br><br>




</body>



</html>