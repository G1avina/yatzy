class Game {
    constructor(name) {
        this.playerName = name;

        this.dice1 = { value: 0, set: 0 };
        this.dice2 = { value: 0, set: 0 };
        this.dice3 = { value: 0, set: 0 };
        this.dice4 = { value: 0, set: 0 };
        this.dice5 = { value: 0, set: 0 };

        this.ones = { value: 0, set: 0 };
        this.twos = { value: 0, set: 0 };
        this.threes = { value: 0, set: 0 };
        this.fours = { value: 0, set: 0 };
        this.fives = { value: 0, set: 0 };
        this.sixes = { value: 0, set: 0 };

        this.onePair = { value: 0, set: 0 };
        this.twoPair = { value: 0, set: 0 };
        this.threeOfKind = { value: 0, set: 0 };
        this.fourOfKind = { value: 0, set: 0 };
        this.fullHouse = { value: 0, set: 0 };
        this.smallStraight = { value: 0, set: 0 };
        this.largeStraight = { value: 0, set: 0 };
        this.chance = { value: 0, set: 0 };
        this.yatzy = { value: 0, set: 0 };

        this.total = 0;
    }
}


//Server request created when you press the roll button----------------------------------------------

const d1 = document.getElementById("dice1");
const d2 = document.getElementById("dice2");
const d3 = document.getElementById("dice3");
const d4 = document.getElementById("dice4");
const d5 = document.getElementById("dice5");

function clickRoll() {
    //json data for roll
    let jsonData = {
        d1Value: game.dice1["value"],
        d1Set: game.dice1["set"],

        d2Value: game.dice2["value"],
        d2Set: game.dice2["set"],

        d3Value: game.dice3["value"],
        d3Set: game.dice3["set"],

        d4Value: game.dice4["value"],
        d4Set: game.dice4["set"],

        d5Value: game.dice5["value"],
        d5Set: game.dice5["set"],
    };

    const xmlhttp = new XMLHttpRequest();
  
    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == XMLHttpRequest.DONE) {
        if (xmlhttp.status == 200) {
        //console.log(xmlhttp.responseText);
          var jsonResponse = JSON.parse(xmlhttp.responseText);

          game.dice1.value = jsonResponse.d1Value;
          d1.innerHTML = drawDice(jsonResponse.d1Value);

          game.dice2.value = jsonResponse.d2Value;
          d2.innerHTML = drawDice(jsonResponse.d2Value);

          game.dice3.value = jsonResponse.d3Value;
          d3.innerHTML = drawDice(jsonResponse.d3Value);

          game.dice4.value = jsonResponse.d4Value;
          d4.innerHTML = drawDice(jsonResponse.d4Value);

          game.dice5.value = jsonResponse.d5Value;
          d5.innerHTML = drawDice(jsonResponse.d5Value);

         document.getElementById('ones').innerHTML = "ones: "+jsonResponse.ones;
          document.getElementById('twos').innerHTML = "twos: "+jsonResponse.twos;
          document.getElementById('threes').innerHTML = "threes: "+jsonResponse.threes;
          document.getElementById('fours').innerHTML = "fours: "+jsonResponse.fours;
          document.getElementById('fives').innerHTML = "fives: "+jsonResponse.fives;
          document.getElementById('sixes').innerHTML = "sixes: "+jsonResponse.sixes;
  
        }
      }
    
        
    };
    xmlhttp.open("POST", "/api.php?action=roll", true);
    xmlhttp.setRequestHeader('Content-Type', 'application/json');
    xmlhttp.send(JSON.stringify(jsonData));
}













//Server request created when you press a score----------------------------------------------------------
function clickScore() {

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

//event handlers for dice sets-----------------------------------------------------------

function diceStatusActivate(){
    let diceRoll1 = document.getElementById('d1Status');
    diceRoll1.addEventListener('click',d1StatusSet);

    let diceRoll2 = document.getElementById('d2Status');
    diceRoll2.addEventListener('click',d2StatusSet);

    let diceRoll3 = document.getElementById('d3Status');
    diceRoll3.addEventListener('click',d3StatusSet);

    let diceRoll4 = document.getElementById('d4Status');
    diceRoll4.addEventListener('click',d4StatusSet);

    let diceRoll5 = document.getElementById('d5Status');
    diceRoll5.addEventListener('click',d5StatusSet);
}

function diceStatusDeActivate(){
    let diceRoll1 = document.getElementById('d1Status');
    diceRoll1.removeEventListener('click',d1StatusSet);

    let diceRoll2 = document.getElementById('d2Status');
    diceRoll2.removeEventListener('click',d2StatusSet);

    let diceRoll3 = document.getElementById('d3Status');
    diceRoll3.removeEventListener('click',d3StatusSet);

    let diceRoll4 = document.getElementById('d4Status');
    diceRoll4.removeEventListener('click',d4StatusSet);

    let diceRoll5 = document.getElementById('d5Status');
    diceRoll5.removeEventListener('click',d5StatusSet);
}

function d1StatusSet(){
    if (game.dice1["set"] == 0){
        game.dice1["set"] = 1;
        document.getElementById('d1Status').innerHTML = "Saving";
    }else{
        document.getElementById('d1Status').innerHTML = "Rolling";
        game.dice1["set"] = 0;
    }
}

function d2StatusSet(){
    if (game.dice2["set"] == 0){
        game.dice2["set"] = 1;
        document.getElementById('d2Status').innerHTML = "Saving";
    }else{
        document.getElementById('d2Status').innerHTML = "Rolling";
        game.dice2["set"] = 0;
    }
}

function d3StatusSet(){
    if (game.dice3["set"] == 0){
        game.dice3["set"] = 1;
        document.getElementById('d3Status').innerHTML = "Saving";
    }else{
        document.getElementById('d3Status').innerHTML = "Rolling";
        game.dice3["set"] = 0;
    }
}

function d4StatusSet(){
    if (game.dice4["set"] == 0){
        game.dice4["set"] = 1;
        document.getElementById('d4Status').innerHTML = "Saving";
    }else{
        document.getElementById('d4Status').innerHTML = "Rolling";
        game.dice4["set"] = 0;
    }
}

function d5StatusSet(){
    if (game.dice5["set"] == 0){
        game.dice5["set"] = 1;
        document.getElementById('d5Status').innerHTML = "Saving";
    }else{
        document.getElementById('d5Status').innerHTML = "Rolling";
        game.dice5["set"] = 0;
    }
}

//Draw function for dices 

function drawDice(x){
    //return display info of blank dice
    if(x == 0){
       return `<div class = "gdice" id = "gdice">
        <svg width="120" height="120">
        <rect x="0" y="0" width="120" height="120" stroke="black" stroke-width="4" fill = "white" />
        </svg>
        </div>`;
    }

    //return display info of dice 1
    if(x == 1){

        return `<div class = "gdice" id = "gdice">
            <svg width="120" height="120">
            <rect x="0" y="0" width="120" height="120" stroke="black" stroke-width="4" fill = "white" />
            <circle cx='60' cy="60" r="5" stroke="black" stroke-width="4" fill="black" />
            </svg>
        </div>`;
    }
    //return display info of dice 2
    if(x == 2){

        return `<div class = "gdice" id = "gdice">
        <svg width="120" height="120">
            <rect x="0" y="0" width="120" height="120" stroke="black" stroke-width="4" fill = "white" />
            <circle cx="30" cy="30" r="5" stroke="black" stroke-width="4" fill="black" />
            <circle cx="90" cy="90" r="5" stroke="black" stroke-width="4" fill="black" />
        </svg>
    </div>`;
    }

    //return display info of dice 3
    if(x == 3){

        return `<div class = "gdice" id = "gdice">
        <svg width="120" height="120">
            <rect x="0" y="0" width="120" height="120" stroke="black" stroke-width="4" fill = "white" />
            <circle cx="30" cy="30" r="5" stroke="black" stroke-width="4" fill="black" />
            <circle cx="60" cy="60" r="5" stroke="black" stroke-width="4" fill="black" />
            <circle cx="90" cy="90" r="5" stroke="black" stroke-width="4" fill="black" />
        </svg>
    </div>`;
    }

    //return display info of dice 4
    if(x == 4){

        return `<div class = "gdice" id = "gdice">
        <svg width="120" height="120">
            <rect x="0" y="0" width="120" height="120" stroke="black" stroke-width="4" fill = "white" />
            <circle cx="30" cy="30" r="5" stroke="black" stroke-width="4" fill="black" />
            <circle cx="90" cy="30" r="5" stroke="black" stroke-width="4" fill="black" />
            <circle cx="90" cy="90" r="5" stroke="black" stroke-width="4" fill="black" />
            <circle cx="30" cy="90" r="5" stroke="black" stroke-width="4" fill="black" />
        </svg>
    </div>`;
    }

    //return display info of dice 5
    if(x == 5){

        return `<div class = "gdice" id = "gdice">
        <svg width="120" height="120">
            <rect x="0" y="0" width="120" height="120" stroke="black" stroke-width="4" fill = "white" />
            <circle cx="30" cy="30" r="5" stroke="black" stroke-width="4" fill="black" />
            <circle cx="90" cy="30" r="5" stroke="black" stroke-width="4" fill="black" />
            <circle cx="90" cy="90" r="5" stroke="black" stroke-width="4" fill="black" />
            <circle cx="30" cy="90" r="5" stroke="black" stroke-width="4" fill="black" />
            <circle cx="60" cy="60" r="5" stroke="black" stroke-width="4" fill="black" />
        </svg>
    </div>`;
    }

    //return display info of dice 6
    if(x == 6){

        return `<div class = "gdice" id = "gdice">
        <svg width="120" height="120">
            <rect x="0" y="0" width="120" height="120" stroke="black" stroke-width="4" fill = "white" />
            <circle cx="30" cy="30" r="5" stroke="black" stroke-width="4" fill="black" />
            <circle cx="90" cy="30" r="5" stroke="black" stroke-width="4" fill="black" />
            <circle cx="90" cy="90" r="5" stroke="black" stroke-width="4" fill="black" />
            <circle cx="30" cy="90" r="5" stroke="black" stroke-width="4" fill="black" />
            <circle cx="30" cy="60" r="5" stroke="black" stroke-width="4" fill="black" />
            <circle cx="90" cy="60" r="5" stroke="black" stroke-width="4" fill="black" />
        </svg>
    </div>`;
    }
}


//event handlers for scores ---------------------------------------------------------------



function deactivateScore(idName,fun){
    document.getElementById(idName).removeEventListener('click',fun);
}


function deactivateAllScore(){
    deactivateScore('ones',scoreDictionary.ones);
    deactivateScore('twos',scoreDictionary.twos);
    deactivateScore('threes',scoreDictionary.threes);
    deactivateScore('fours',scoreDictionary.fours);
    deactivateScore('fives',scoreDictionary.fives);
    deactivateScore('sixes',scoreDictionary.sixes);
    deactivateScore('onePair',scoreDictionary.onePair);
    deactivateScore('twoPair',scoreDictionary.twoPair);
    deactivateScore('threeOfKind',scoreDictionary.threeOfKind);
    deactivateScore('fourOfKind',scoreDictionary.fourOfKind);
    deactivateScore('smallStraight',scoreDictionary.smallStraight);
    deactivateScore('largeStraight',scoreDictionary.largeStraight);
    deactivateScore('fullHouse',scoreDictionary.fullHouse);
    deactivateScore('chance',scoreDictionary.chance);
    deactivateScore('yatzy',scoreDictionary.yatzy);

}

//
function activateAllScore(){
    if(game.ones.set == 0){
        document.getElementById("ones").addEventListener('click',clickHandler);
    }

    if(game.twos.set == 0){
        document.getElementById("twos").addEventListener('click',clickHandler);
    }

    if(game.threes.set == 0){
        document.getElementById("threes").addEventListener('click',clickHandler);
    }

    if(game.fours.set == 0){
        document.getElementById("fours").addEventListener('click',clickHandler);
    }

    if(game.fives.set == 0){
        document.getElementById("fives").addEventListener('click',clickHandler);
    }

    if(game.sixes.set == 0){
        document.getElementById("sixes").addEventListener('click',clickHandler);
    }

    if(game.onePair.set == 0){
        document.getElementById("onePair").addEventListener('click',clickHandler);
    }

    if(game.twoPair.set == 0){
        document.getElementById("twoPair").addEventListener('click',clickHandler);
    }

    if(game.threeOfKind.set == 0){
        document.getElementById("threeOfKind").addEventListener('click',clickHandler);
    }

    if(game.fourOfKind.set == 0){
        document.getElementById("fourOfKind").addEventListener('click',clickHandler);
    }

    if(game.smallStraight.set == 0){
        document.getElementById("smallStraight").addEventListener('click',clickHandler);
    }

    if(game.largeStraight.set == 0){
        document.getElementById("largeStraight").addEventListener('click',clickHandler);
    }

    if(game.fullHouse.set == 0){
        document.getElementById("fullHouse").addEventListener('click',clickHandler);
    }

    if(game.chance.set == 0){
        document.getElementById("chance").addEventListener('click',clickHandler);
    }

    if(game.yatzy.set == 0){
        document.getElementById("yatzy").addEventListener('click',clickHandler);
    }
}



function clickHandler(){
    console.log("clicked");
}




//----------------------------------Things that are executed when game starts---------------------------
var game = new Game("player");
diceStatusActivate();

let diceRoll = document.getElementById('diceRoll');
diceRoll.addEventListener('click',clickRoll);
activateAllScore();
console.log("javascript executed");


