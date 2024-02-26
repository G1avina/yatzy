


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
    document.getElementById('scoreValue').innerHTML = score;


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


    //Lower Section

    //Calculate One pair
    if(SonePair.value == 0){
        if(six == 2){
            onePair = 6 * six;
        }else if(five == 2){
            onePair = 5 * five;
        }
        else if(four == 2){
            onePair = 4 * four;
        }
        else if(three == 2){
            onePair = 3 * three;
        }
        else if(two == 2){
            onePair = 2 * two;
        }else if(one == 2){
            onePair = 1 * one;
        }else{
            onePair = 0;
        }

        document.getElementById('onePair').innerHTML = "One Pair: " + onePair;
    }

    //Calculate Two pair

    if(StwoPair.value == 0){

        twoPair = 0;
        let numOfPair = 0;

        if(six == 2){
            twoPair = twoPair + 6 * six;
            numOfPair++;
        }
        if(five == 2){
            twoPair = twoPair + 5 * five;
            numOfPair++;
        }
        if(four == 2){
            twoPair = twoPair + 4 * four;
            numOfPair++;
        }
        if(three == 2){
            twoPair = twoPair +3 * three;
            numOfPair++;
        }
        if(two == 2){
            twoPair = twoPair +2 * two;
            numOfPair++;
        }
        if(one == 2){
            twoPair = twoPair + 1 * one;
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

        if(six == 3){
            threeOfKind = 6 * six;
        }
        if(five == 3){
            threeOfKind =  5 * five;
        }
        if(four == 3){
            threeOfKind =  4 * four;
        }
        if(three == 3){
            threeOfKind = 3 * three;
        }
        if(two == 3){
            threeOfKind = 2 * two;
        }
        if(one == 3){
            threeOfKind =  1 * one;
        }

        document.getElementById('threeOfKind').innerHTML = "Three of a kind: " + threeOfKind;
    }

    //Calculate Four of a kind
    if(SfourOfKind.value == 0){
        fourOfKind = 0;

        if(six == 4){
            fourOfKind = 6 * six;
        }
        if(five == 4){
            fourOfKind =  5 * five;
        }
        if(four == 4){
            fourOfKind =  4 * four;
        }
        if(three == 4){
            fourOfKind = 3 * three;
        }
        if(two == 4){
            fourOfKind = 2 * two;
        }
        if(one == 4){
            fourOfKind =  1 * one;
        }

        document.getElementById('fourOfKind').innerHTML = "Four of a kind: " + fourOfKind;
    }

    //calculate full house
    if(SfullHouse.value == 0){
        let fonePair =o;
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
    }

    document.getElementById('smallStraight').innerHTML = "Small straight: " + smallStraight;






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

    if(Syatz.value == 0){
        yatzy = 0;
        if(one ==5 ||  two == 5 ||three == 5 || four ==5 || five ==5 || six == 5){
            yatzy = 50;
        }

        document.getElementById('yatzy').innerHTML = "yatzy: " + yatzy;
    }
    

}

//FUNCTION Deactivate select score
function deactivateScore(idName){
    document.getElementById(idName).removeEventListener('click',clickHandler);
}

//
function activateAllScore(){
    if(Sones.value == 0){
        selectScore('ones',ones,Sones);
    }

    if(Stwos.value == 0){
        selectScore('twos',twos,Stwos);
    }

    if(Sthrees.value == 0){
        selectScore('threes',threes,Sthrees);
    }

    if(Sfours.value == 0){
        selectScore('fours',fours,Sfours);
    }

    if(Sfives.value == 0){
        selectScore('fives',fives,Sfives);
    }

    if(Ssixes.value == 0){
        selectScore('sixes',sixes,Ssixes);
    }

    if(SonePair.value == 0){
        selectScore('onePair',onePair,SonePair);
    }

    if(StwoPair.value == 0){
        selectScore('twoPair',twoPair,StwoPair);
    }

    if(SthreeOfKind.value == 0){
        selectScore('threeOfKind',threeOfKind,SthreeOfKind);
    }

    if(SfourOfKind.value == 0){
        selectScore('fourOfKind',fourOfKind,SfourOfKind);
    }

    if(SsmallStraight.value == 0){
        selectScore('smallStraight',smallStraight,SsmallStraight);
    }

    if(SlargeStraight.value == 0){
        selectScore('largeStraight',largeStraight,SlargeStraight);
    }

    if(SfullHouse.value == 0){
        selectScore('fullHouse',fullHouse,SfullHouse);
    }

    if(Schance.value == 0){
        selectScore('chance',chance,Schance);
    }

    if(Syatzy.value == 0){
        selectScore('yatzy',yatzy,Syatzy);
    }

}

//Slecting a score
function selectScore(idName,scoreCat,scoreStatus){

        clickHandler = function() {
        handleClick(idName, scoreCat,scoreStatus);
    };
    document.getElementById(idName).addEventListener('click',clickHandler);
}

function handleClick(idName,scoreCat,scoreStatus){
    document.getElementById(idName).style.color = "red";
    total = total + scoreCat;
    scoreStatus.value = 1;
    document.getElementById('total').innerHTML = "TOTAL SCORE: " + total;
    deactivateOnesScore(idName);  
}
