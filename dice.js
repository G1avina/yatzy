

//generates a reandom number between 1 and 6
function rand(){
    return Math.floor(Math.random() * (7 - 1) + 1);
}



//If the Roll Dice button is pressed 
function rollDices(){

if(d1Status == true){
    let d1 =rand();
    document.getElementById('dice1').innerHTML = d1;
}

if(d2Status == true){
    let d2 =rand();
    document.getElementById('dice2').innerHTML = d2;
}

if(d3Status == true){
    let d3 =rand();
    document.getElementById('dice3').innerHTML = d3;
}

if(d4Status == true){
    let d4 =rand();
    document.getElementById('dice4').innerHTML = d4;
}

if(d5Status == true){
    let d5 =rand();
    document.getElementById('dice5').innerHTML = d5;
}
}

//Activates the Roll Dice button
function RollDiceActivate(){
    let diceRoll = document.getElementById('diceRoll');
    diceRoll.addEventListener('click',rollDices);
}

function RollDiceDeactivate(){
    let diceRoll = document.getElementById('diceRoll');
    diceRoll.removeEventListener('click',rollDices);
}

//Activate Status for button (If they are rolled or not)
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
    if (d1Status == true){
        let d1Status = false;
        document.getElementById('d1Status').innerHTML = "Saving";
    }else{
        document.getElementById('d1Status').innerHTML = "Rolling";
        let d1Status = true;
    }
}

function d2StatusSet(){
    if (d2Status == true){
        let d2Status = false;
        document.getElementById('d2Status').innerHTML = "Saving";
    }else{
        document.getElementById('d2Status').innerHTML = "Rolling";
        let d2Status = true;
    }
}

function d3StatusSet(){
    if (d3Status == true){
        let d3Status = false;
        document.getElementById('d3Status').innerHTML = "Saving";
    }else{
        document.getElementById('d3Status').innerHTML = "Rolling";
        let d3Status = true;
    }
}

function d4StatusSet(){
    if (d4Status == true){
        let d4Status = false;
        document.getElementById('d4Status').innerHTML = "Saving";
    }else{
        document.getElementById('d4Status').innerHTML = "Rolling";
        let d4Status = true;
    }
}

function d5StatusSet(){
    if (d5Status == true){
        let d5Status = false;
        document.getElementById('d5Status').innerHTML = "Saving";
    }else{
        document.getElementById('d5Status').innerHTML = "Rolling";
        let d5Status = true;
    }
}





//Main

let d1Status = true;
let d2Status = true;
let d3Status = true;
let d4Status = true;
let d5Status = true;


RollDiceActivate();
diceStatusActivate();


