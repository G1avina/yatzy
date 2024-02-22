


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
    ones = one * 1;
    document.getElementById('ones').innerHTML = "ones: "+ones;

    twos = two * 2;
    document.getElementById('twos').innerHTML = "twos: "+twos;

    threes = three * 3;
    document.getElementById('threes').innerHTML = "threes: "+threes;

    fours = four * 4;
    document.getElementById('fours').innerHTML = "fours: "+fours;

    fives = five * 5;
    document.getElementById('fives').innerHTML = "fives: "+fives;

    sixes = six * 6;
    document.getElementById('sixes').innerHTML = "sixes: "+sixes;


    //Lower Section

    //Calculate One pair
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

    //Calculate Two pair

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


    //Calculate Three of a kind
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

    //Calculate Four of a kind
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

    //calculate full house
    fullHouse = 0;
    if (onePair != 0 && threeOfKind !=0){
        fullHouse = onePair + threeOfKind;
    }

    document.getElementById('fullHouse').innerHTML = "Full house: " + fullHouse;

    //small straight
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






    //long straight
    largeStraight = 0;
    if (one ==1 && two ==1 && three == 1 && four ==1 && five ==1){
        largeStraight=40;
    }else if(two ==1 && three == 1 && four ==1 && five ==1 && six == 1){
        largeStraight=40;
    }

    document.getElementById('largeStraight').innerHTML = "Large straight: " + largeStraight;




    //calculate chance 

    chance = d1+d2+d3+d4+d5;
    document.getElementById('chance').innerHTML = "Chance: " + chance;

    //calculate yatzy

    yatzy = 0;
    if(one ==5 ||  two == 5 ||three == 5 || four ==5 || five ==5 || six == 5){
        yatzy = 50;
    }

    document.getElementById('yatzy').innerHTML = "yatzy: " + yatzy;
    

}