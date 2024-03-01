
//Score Value
let score = 0;

let ones = 0;
let twos = 0;
let threes = 0;
let fours = 0;
let fives = 0;
let sixes = 0;
let sum = 0;
let bonus = 0;


let onePair = 0;
let twoPair = 0;
let threeOfKind = 0;
let fourOfKind = 0; 
let fullHouse = 0;
let smallStraight = 0;
let largeStraight =0;
let chance = 0;
let yatzy =0;

let total = 0;

//selected as score
let Sones = {value: 0};
let Stwos = {value: 0};
let Sthrees = {value: 0};
let Sfours = {value: 0};
let Sfives = {value: 0};
let Ssixes = {value: 0};
let Ssum = {value: 0};


let SonePair = {value: 0};
let StwoPair = {value: 0};
let SthreeOfKind = {value: 0};
let SfourOfKind = {value: 0}; 
let SfullHouse = {value: 0};
let SsmallStraight = {value: 0};
let SlargeStraight = {value: 0};
let Schance = {value: 0};
let Syatzy = {value: 0};

let scoreSelected=[Sones,Stwos,Sthrees,Sfours,Sfives,Ssixes,Ssum,SonePair ,StwoPair,
    SthreeOfKind ,SfourOfKind ,SfullHouse, SsmallStraight ,SlargeStraight,Schance ,Syatzy];




//Dice status
let d1Status = true;
let d2Status = true;
let d3Status = true;
let d4Status = true;
let d5Status = true;

//Dice value
let d1 = 1;
let d2 = 1;
let d3 = 1;
let d4 = 1;
let d5 = 1;

let gameState =1;

function advanceGameState(stage){
    gameState +=1;
    if (gameState == 4){
        gamesState =1;
        state3();
        return;
    }

    if(gameState == 2){
        state2();
    }

    
    //if (stage == 2){
    //    state2();
    //}

   // if (stage == 1){
    //    state1();
   // }

}

let advance = function(){
    advanceGameState(2);
}

function state0(){
    document.getElementById('state').innerHTML = "<h3>Roll the dices<h3>";
    RollDiceActivate();
    //diceStatusActivate();
    //deactivateAllScore();
    //diceStatusActivate();
    //activateAllScore()
    document.getElementById('diceRoll').addEventListener('click',advance);
}

function state1(){
    document.getElementById('state').innerHTML = "<h3>Roll the dices<h3>";
    RollDiceActivate();
    deactivateAllScore();
    diceStatusDeActivate();
    //diceStatusActivate();
    //activateAllScore()
    document.getElementById('diceRoll').removeEventListener('click',advance);
    document.getElementById('diceRoll').addEventListener('click',advance);
}

function state2(){
    //document.getElementById('diceRoll').removeEventListener('click',advance);
    document.getElementById('state').innerHTML = "<h3>Roll the dices or Pick a score<h3>";
    diceStatusActivate();
    activateAllScore();
    RollDiceActivate();
    //document.getElementById('diceRoll').addEventListener('click',advanceGameState);
    //RollDiceDeactivate();
}

function state3(){
    document.getElementById('state').innerHTML = "<h3>Pick a score<h3>";
    diceStatusDeActivate();
    //activateAllScore();
    RollDiceDeactivate();
    document.getElementById('diceRoll').removeEventListener('click',advance);
}

function state4(){
    calcTotal();
    document.getElementById('state').innerHTML = "<h3>CONGRATS your score is "+total+"<h3>"+"<br> Reload the page if you want to play again";
    diceStatusDeActivate();
    deactivateAllScore();
    RollDiceDeactivate();

}


function resetState(){
    diceStatusDeActivate();
    resetDiceStatus();
    if(isGameFinished()){
        state4();
        return;
    }
    gameState =1;
    state1();
}


state0();



