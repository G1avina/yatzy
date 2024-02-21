

//generates a reandom number between 1 and 6
function rand(){
    return Math.floor(Math.random() * (7 - 1) + 1);
}


d1 =rand();
d2 =rand();
d3 =rand();
d4 =rand();
d5 =rand();
document.getElementById('dice1').textContent = d1;
document.getElementById('dice2').textContent = d2;
document.getElementById('dice3').textContent = d3;
document.getElementById('dice4').textContent = d4;
document.getElementById('dice5').textContent = d5;