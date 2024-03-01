


function scoreCalculate(){
    const dice = [d1,d2,d3,d4,d5];

    let one =0;
    let two =0;
    let three =0;
    let four =0;
    let five =0;
    let six =0;

    //analyse dices
    for(let x = 0;x<6;x++){

        let i = dice[x];
        if (i == 1){
            one = one +1;
        }else if(i == 2){
            two = two +1;
        }else if(i == 3){
            three = three +1;
        }else if(i == 4){
            four = four +1;
        }else if(i == 5){
            five = five +1;
        }else if(i == 6){
            six = six +1;
        }
    }

    score = d1+d2+d3+d4+d5;
    //document.getElementById('scoreValue').innerHTML = score;


    //Upper Section

    //Calculate basic ones, twos, threes, fours, fives, sixes
    if(Sones.value == 0){
        ones = one * 1;
        document.getElementById('ones').innerHTML = "ones: "+ones;
    }

    if(Stwos.value == 0){
        twos = two * 2;
        document.getElementById('twos').innerHTML = "twos: "+twos;
    }

    if(Sthrees.value == 0){
        threes = three * 3;
        document.getElementById('threes').innerHTML = "threes: "+threes;
    }

    if(Sfours.value == 0){
        fours = four * 4;
        document.getElementById('fours').innerHTML = "fours: "+fours;
    }


    if(Sfives.value == 0){
        fives = five * 5;
        document.getElementById('fives').innerHTML = "fives: "+fives;
    }

    if(Ssixes.value == 0){
        sixes = six * 6;
        document.getElementById('sixes').innerHTML = "sixes: "+sixes;
    }


   /* if(Sones.value == 1 && Stwos.value == 1 && Sthrees.value == 1 && Sfours.value == 1 && Sfives.value == 1 && Ssixes){
        sum = ones + twos + threes + fours + fives + sixes;
        document.getElementById('sum').innerHTML = "sum: "+sum;
    }

    if(sum >=63){

        bonus = 50;
        document.getElementById('bonus').innerHTML = "bonus: "+sum;
    }*/


    //Lower Section

    //Calculate One pair
    if(SonePair.value == 0){
        if(six >= 2){
            onePair = 6 * 2;
        }else if(five >= 2){
            onePair = 5 * 2;
        }
        else if(four >= 2){
            onePair = 4 * 2;
        }
        else if(three >= 2){
            onePair = 3 * 2;
        }
        else if(two >= 2){
            onePair = 2 * 2;
        }else if(one >= 2){
            onePair = 1 * 2;
        }else{
            onePair = 0;
        }

        document.getElementById('onePair').innerHTML = "One Pair: " + onePair;
    }

    //Calculate Two pair

    if(StwoPair.value == 0){

        twoPair = 0;
        let numOfPair = 0;

        if(six >= 2){
            twoPair = twoPair + 6 * 2;
            numOfPair++;
        }
        if(five >= 2){
            twoPair = twoPair + 5 * 2;
            numOfPair++;
        }
        if(four >= 2){
            twoPair = twoPair + 4 * 2;
            numOfPair++;
        }
        if(three >= 2){
            twoPair = twoPair +3 * 2;
            numOfPair++;
        }
        if(two >= 2){
            twoPair = twoPair +2 * 2;
            numOfPair++;
        }
        if(one >= 2){
            twoPair = twoPair + 1 * 2;
            numOfPair++;

        }

        if(numOfPair != 2){
            twoPair = 0;
        }



        document.getElementById('twoPair').innerHTML = "Two Pair: " + twoPair;
    }

    //Calculate Three of a kind
    if(SthreeOfKind.value == 0){
        threeOfKind = 0;

        if(six >= 3){
            threeOfKind = 6 * 3;
        }
        if(five >= 3){
            threeOfKind =  5 * 3;
        }
        if(four >= 3){
            threeOfKind =  4 * 3;
        }
        if(three >= 3){
            threeOfKind = 3 * 3;
        }
        if(two >= 3){
            threeOfKind = 2 * 3;
        }
        if(one >= 3){
            threeOfKind =  1 * 3;
        }

        document.getElementById('threeOfKind').innerHTML = "Three of a kind: " + threeOfKind;
    }

    //Calculate Four of a kind
    if(SfourOfKind.value == 0){
        fourOfKind = 0;

        if(six >= 4){
            fourOfKind = 6 * 4;
        }
        if(five >= 4){
            fourOfKind =  5 * 4;
        }
        if(four >= 4){
            fourOfKind =  4 * 4;
        }
        if(three >= 4){
            fourOfKind = 3 * 4;
        }
        if(two >= 4){
            fourOfKind = 2 * 4;
        }
        if(one >= 4){
            fourOfKind =  1 * 4;
        }

        document.getElementById('fourOfKind').innerHTML = "Four of a kind: " + fourOfKind;
    }

    //calculate full house
    if(SfullHouse.value == 0){
        let fonePair =0;
        if(six == 2){
            fonePair = 6 * six;
        }else if(five == 2){
            fonePair = 5 * five;
        }
        else if(four == 2){
            fonePair = 4 * four;
        }
        else if(three == 2){
            fonePair = 3 * three;
        }
        else if(two == 2){
            fonePair = 2 * two;
        }else if(one == 2){
            fonePair = 1 * one;
        }

        let fthreeOfKind = 0;
    
        if(six == 3){
            fthreeOfKind = 6 * six;
        }
        if(five == 3){
            fthreeOfKind =  5 * five;
        }
        if(four == 3){
            fthreeOfKind =  4 * four;
        }
        if(three == 3){
            fthreeOfKind = 3 * three;
        }
        if(two == 3){
            fthreeOfKind = 2 * two;
        }
        if(one == 3){
            fthreeOfKind =  1 * one;
        }

        fullHouse = 0;
        if (fonePair != 0 && fthreeOfKind !=0){
            fullHouse = fonePair + fthreeOfKind;
        }

        document.getElementById('fullHouse').innerHTML = "Full house: " + fullHouse;

        
    }

    //small straight
    if(SsmallStraight.value == 0){
        smallStraight = 0;
        let temp = 0;
        const temp2 = [one,two,three,four,five,six];
        for(i =0; i<6;i++){
            if(temp2[i]>=1){
                temp = temp + 1;
            }else{
                temp = 0;
            }
            if(temp == 4){
                smallStraight =30;
                break;
            }
        }
    

        document.getElementById('smallStraight').innerHTML = "Small straight: " + smallStraight;
    }






    //long straight
    if(SlargeStraight.value == 0){
        largeStraight = 0;
        if (one ==1 && two ==1 && three == 1 && four ==1 && five ==1){
            largeStraight=40;
        }else if(two ==1 && three == 1 && four ==1 && five ==1 && six == 1){
            largeStraight=40;
        }

        document.getElementById('largeStraight').innerHTML = "Large straight: " + largeStraight;
    }




    //calculate chance 
    if(Schance.value == 0){
        chance = d1+d2+d3+d4+d5;
        document.getElementById('chance').innerHTML = "Chance: " + chance;
    }

    //calculate yatzy

    if(Syatzy.value == 0){
        yatzy = 0;
        if(one ==5 ||  two == 5 ||three == 5 || four ==5 || five ==5 || six == 5){
            yatzy = 50;
        }

        document.getElementById('yatzy').innerHTML = "yatzy: " + yatzy;
    }
    

}
function calcSum(){
    if(Sones.value == 1 && Stwos.value == 1 && Sthrees.value == 1 && Sfours.value == 1 && Sfives.value == 1 && Ssixes){
        sum = ones + twos + threes + fours + fives + sixes;
        document.getElementById('sum').innerHTML = "sum: "+sum;
    }

    if(sum >=63){

        bonus = 50;
        document.getElementById('bonus').innerHTML = "bonus: "+bonus;
    }
}

function calcTotal(){

    total = sum +bonus + onePair+twoPair+threeOfKind+fourOfKind+fullHouse+smallStraight+largeStraight+chance+yatzy;
    document.getElementById('total').innerHTML = "TOTAL SCORE: " + total;
}

//FUNCTION Deactivate select score
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
let scoreDictionary = {key1: "test"};
function activateAllScore(){
    if(Sones.value == 0){
        scoreDictionary.ones = selectScore('ones',ones,Sones);
    }

    if(Stwos.value == 0){
        scoreDictionary.twos = selectScore('twos',twos,Stwos);
    }

    if(Sthrees.value == 0){
        scoreDictionary.threes = selectScore('threes',threes,Sthrees);
    }

    if(Sfours.value == 0){
        scoreDictionary.fours = selectScore('fours',fours,Sfours);
    }

    if(Sfives.value == 0){
        scoreDictionary.fives = selectScore('fives',fives,Sfives);
    }

    if(Ssixes.value == 0){
        scoreDictionary.sixes = selectScore('sixes',sixes,Ssixes);
    }

    if(SonePair.value == 0){
        scoreDictionary.onePair = selectScore('onePair',onePair,SonePair);
    }

    if(StwoPair.value == 0){
        scoreDictionary.twoPair = selectScore('twoPair',twoPair,StwoPair);
    }

    if(SthreeOfKind.value == 0){
        scoreDictionary.threeOfKind = selectScore('threeOfKind',threeOfKind,SthreeOfKind);
    }

    if(SfourOfKind.value == 0){
        scoreDictionary.fourOfKind = selectScore('fourOfKind',fourOfKind,SfourOfKind);
    }

    if(SsmallStraight.value == 0){
        scoreDictionary.smallStraight = selectScore('smallStraight',smallStraight,SsmallStraight);
    }

    if(SlargeStraight.value == 0){
        scoreDictionary.largeStraight = selectScore('largeStraight',largeStraight,SlargeStraight);
    }

    if(SfullHouse.value == 0){
        scoreDictionary.fullHouse = selectScore('fullHouse',fullHouse,SfullHouse);
    }

    if(Schance.value == 0){
        scoreDictionary.chance = selectScore('chance',chance,Schance);
    }

    if(Syatzy.value == 0){
        scoreDictionary.yatzy = selectScore('yatzy',yatzy,Syatzy);
    }

}

function isGameFinished(){
    
    if(Sones.value == 0){return false;}
    if(Stwos.value == 0){return false;}
    if(Sthrees.value == 0){return false;}
    if(Sfours.value == 0){return false;}
    if(Sfives.value == 0){return false;}
    if(Ssixes.value == 0){return false;}
    if(SonePair.value == 0){return false;}
    if(StwoPair.value == 0){return false;}
    if(SthreeOfKind.value == 0){return false;}
    if(SfourOfKind.value == 0){return false;}
    if(SsmallStraight.value == 0){return false;}
    if(SlargeStraight.value == 0){return false;}
    if(SfullHouse.value == 0){return false;}
    if(Schance.value == 0){return false;}
    if(Syatzy.value == 0){return false;}
    return true;
    

}

//Slecting a score

//selectOnes = function() {
  //  handleClick('ones', ones,Sones);
//};


function selectScore(idName,scoreCat,scoreStatus){

        clickHandler = function() {
        handleClick(idName, scoreCat,scoreStatus);
    };
    document.getElementById(idName).addEventListener('click',clickHandler);
    return clickHandler;
}

function handleClick(idName,scoreCat,scoreStatus){
    document.getElementById(idName).style.color = "red";
    scoreStatus.value = 1;
    calcSum();
    //document.getElementById('total').innerHTML = "TOTAL SCORE: " + total;
    resetState();
    //deactivateOnesScore(idName);  
}
