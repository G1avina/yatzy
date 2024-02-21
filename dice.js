

//generates a reandom number between 1 and 6
function rand(){
    return Math.floor(Math.random() * (7 - 1) + 1);
}



//If the Roll Dice button is pressed 
function rollDices(){

if(d1Status == true){
    d1 =rand();
    document.getElementById('dice1').innerHTML = d1;
}

if(d2Status == true){
    d2 =rand();
    document.getElementById('dice2').innerHTML = d2;
}

if(d3Status == true){
    d3 =rand();
    document.getElementById('dice3').innerHTML = d3;
}

if(d4Status == true){
    d4 =rand();
    document.getElementById('dice4').innerHTML = d4;
}

if(d5Status == true){
    d5 =rand();
    document.getElementById('dice5').innerHTML = d5;
}
}

//Activates the Roll Dice button
function RollDiceActivate(){
    var diceRoll = document.getElementById('diceRoll');
    diceRoll.addEventListener('click',rollDices);
}

function RollDiceDeactivate(){
    var diceRoll = document.getElementById('diceRoll');
    diceRoll.removeEventListener('click',rollDices);
}

//Activate Status for button (If they are rolled or not)
function diceStatusActivate(){
    var diceRoll1 = document.getElementById('d1Status');
    diceRoll1.addEventListener('click',d1StatusSet);

    var diceRoll2 = document.getElementById('d2Status');
    diceRoll2.addEventListener('click',d2StatusSet);

    var diceRoll3 = document.getElementById('d3Status');
    diceRoll3.addEventListener('click',d3StatusSet);

    var diceRoll4 = document.getElementById('d4Status');
    diceRoll4.addEventListener('click',d4StatusSet);

    var diceRoll5 = document.getElementById('d5Status');
    diceRoll5.addEventListener('click',d5StatusSet);
}

function diceStatusDeActivate(){
    var diceRoll1 = document.getElementById('d1Status');
    diceRoll1.removeEventListener('click',d1StatusSet);

    var diceRoll2 = document.getElementById('d2Status');
    diceRoll2.removeEventListener('click',d2StatusSet);

    var diceRoll3 = document.getElementById('d3Status');
    diceRoll3.removeEventListener('click',d3StatusSet);

    var diceRoll4 = document.getElementById('d4Status');
    diceRoll4.removeEventListener('click',d4StatusSet);

    var diceRoll5 = document.getElementById('d5Status');
    diceRoll5.removeEventListener('click',d5StatusSet);
}

function d1StatusSet(){
    if (d1Status == true){
        d1Status = false;
        document.getElementById('d1Status').innerHTML = "Saving";
    }else{
        document.getElementById('d1Status').innerHTML = "Rolling";
        d1Status = true;
    }
}

function d2StatusSet(){
    if (d2Status == true){
        d2Status = false;
        document.getElementById('d2Status').innerHTML = "Saving";
    }else{
        document.getElementById('d2Status').innerHTML = "Rolling";
        d2Status = true;
    }
}

function d3StatusSet(){
    if (d3Status == true){
        d3Status = false;
        document.getElementById('d3Status').innerHTML = "Saving";
    }else{
        document.getElementById('d3Status').innerHTML = "Rolling";
        d3Status = true;
    }
}

function d4StatusSet(){
    if (d4Status == true){
        d4Status = false;
        document.getElementById('d4Status').innerHTML = "Saving";
    }else{
        document.getElementById('d4Status').innerHTML = "Rolling";
        d4Status = true;
    }
}

function d5StatusSet(){
    if (d5Status == true){
        d5Status = false;
        document.getElementById('d5Status').innerHTML = "Saving";
    }else{
        document.getElementById('d5Status').innerHTML = "Rolling";
        d5Status = true;
    }
}





//Main

d1Status = true;
d2Status = true;
d3Status = true;
d4Status = true;
d5Status = true;


RollDiceActivate();
diceStatusActivate();


