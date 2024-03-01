

//generates a reandom number between 1 and 6
function rand(){
    return Math.floor(Math.random() * (7 - 1) + 1);
}



//If the Roll Dice button is pressed 
function rollDices(){

if(d1Status == true){
    d1 =rand();
    document.getElementById('dice1').innerHTML = drawDice(d1);
}

if(d2Status == true){
    d2 =rand();
    document.getElementById('dice2').innerHTML = drawDice(d2);
}

if(d3Status == true){
    d3 =rand();
    document.getElementById('dice3').innerHTML = drawDice(d3);
}

if(d4Status == true){
    d4 =rand();
    document.getElementById('dice4').innerHTML = drawDice(d4);
}

if(d5Status == true){
    d5 =rand();
    document.getElementById('dice5').innerHTML = drawDice(d5);
}


}

//Activates the Roll Dice button
function RollDiceActivate(){
    let diceRoll = document.getElementById('diceRoll');
    diceRoll.addEventListener('click',rollDices);
    diceRoll.addEventListener('click',scoreCalculate);
}

function RollDiceDeactivate(){
    let diceRoll = document.getElementById('diceRoll');
    diceRoll.removeEventListener('click',rollDices);
    diceRoll.removeEventListener('click',scoreCalculate);
}

//Activate Status for button (If they are rolled or not)
function diceStatusActivate(){
    let diceRoll1 = document.getElementById('d1Status');
    //generic
    /*
    document.getElementById('d1Status').addEventListener('click',function(){
    diceStatusSet(d1Status,'d1Status');
    });*/
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


//Dice Status
/*
function diceStatusSet(dStatus,dID){
    if (dStatus == true){
        dStatus = false;
        document.getElementById(dID).innerHTML = "Saving";
    }else{
        document.getElementById(dID).innerHTML = "Rolling";
        dStatus = true;
    }

}*/

function resetDiceStatus(){
    d1Status = true;
    document.getElementById('d1Status').innerHTML = "Rolling";

    d2Status = true;
    document.getElementById('d2Status').innerHTML = "Rolling";

    d3Status = true;
    document.getElementById('d3Status').innerHTML = "Rolling";

    d4Status = true;
    document.getElementById('d4Status').innerHTML = "Rolling";

    d5Status = true;
    document.getElementById('d5Status').innerHTML = "Rolling";

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



function drawDice(x){

    //return display info of dice 1
    if(x == 1){

        return `<div class = "gdice" id = "gdice">
            <svg width="120" height="120">
            <rect x="0" y="0" width="120" height="120" stroke="black" stroke-width="4" fill = "white" />
            <circle cx='60' cy="60" r="5" stroke="black" stroke-width="4" fill="black" />
            </svg>
        </div>`
    }
    //return display info of dice 2
    if(x == 2){

        return `<div class = "gdice" id = "gdice">
        <svg width="120" height="120">
            <rect x="0" y="0" width="120" height="120" stroke="black" stroke-width="4" fill = "white" />
            <circle cx="30" cy="30" r="5" stroke="black" stroke-width="4" fill="black" />
            <circle cx="90" cy="90" r="5" stroke="black" stroke-width="4" fill="black" />
        </svg>
    </div>`
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
    </div>`
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
    </div>`
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
    </div>`
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
    </div>`
    }
}

//Main




//RollDiceActivate();
//diceStatusActivate();


