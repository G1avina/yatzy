<?php
namespace yatzy;
//idk if this is going to be used because its suppose to be a used by the client side to memorise info.
//might have to translate in javascript
//will be usefull for server to build image of client game
class game{

    public $playerName;

    public $ones = ["value" => 0,"set" => 0];
    public $twos = ["value" => 0,"set" => 0];
    public $threes = ["value" => 0,"set" => 0];
    public $fours = ["value" => 0,"set" => 0];
    public $fives = ["value" => 0,"set" => 0];
    public $sixes = ["value" => 0,"set" => 0];

    public $onePair = ["value" => 0,"set" => 0];
    public $twoPair = ["value" => 0,"set" => 0];
    public $threeOfKind = ["value" => 0,"set" => 0];
    public $fourOfKind = ["value" => 0,"set" => 0];
    public $fullHouse = ["value" => 0,"set" => 0];
    public $smallStraight = ["value" => 0,"set" => 0];
    public $largeStraight =["value" => 0,"set" => 0];
    public $chance = ["value" => 0,"set" => 0];
    public $yatzy =["value" => 0,"set" => 0];

    public $total = 0;

}



