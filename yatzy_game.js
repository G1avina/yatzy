
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
        stage3();
    }

    
    if (stage == 2){
        state2();
    }

    if (stage == 1){
        state1();
    }

}

function state1(){
    document.getElementById('state').innerHTML = "<h3>State 1<h3>";
    RollDiceActivate();
    //diceStatusActivate();
    //activateAllScore()
    advance = function(){
        advanceGameState(2);
    }
    document.getElementById('diceRoll').addEventListener('click',advance);
    
}

function state2(){
    document.getElementById('diceRoll').removeEventListener('click',advance);
    document.getElementById('state').innerHTML = "<h3>State 2<h3>";
    diceStatusActivate();
    activateAllScore()
    document.getElementById('diceRoll').addEventListener('click',advanceGameState);
    gameState =1;
    //RollDiceDeactivate();
}

function state3(){
    document.getElementById('state').innerHTML = "<h3>State 2<h3>";
    diceStatusActivate();
    activateAllScore()
    RollDiceDeactivate();
}


state1();



