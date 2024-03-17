<?php

namespace yatzy;

class Dice {
    public $value;

    function roll()
    {
        $this->value = rand(1,6);
        return $this->value;
    }
}

class Engine{

    public $one = 0;
    public $two = 0;
    public $three = 0;
    public $four = 0;
    public $five = 0;
    public $six = 0;

    //public $sum;
    //public $score;

        /*const dice = [d1,d2,d3,d4,d5];

        let one =0;
        let two =0;
        let three =0;
        let four =0;
        let five =0;
        let six =0;*/

        //analyse dices
        public function __construct($d1,$d2,$d3,$d4,$d5){

            $dice = array($d1,$d2,$d3,$d4,$d5);

            
            for($x = 0; $x<5; $x++){   

                $i = $dice[$x];
                if ($i == 1){
                    $this->one = $this->one +1;
                }else if($i == 2){
                    $this->two = $this->two +1;
                }else if($i == 3){
                    $this->three = $this->three +1;
                }else if($i == 4){
                    $this->four = $this->four +1;
                }else if($i == 5){
                    $this->five = $this->five +1;
                }else if($i == 6){
                    $this->six = $this->six +1;
                }
            }
        }
        //document.getElementById('scoreValue').innerHTML = score;*/


        //Upper Section

        //Calculate basic ones, twos, threes, fours, fives, sixes
        function ones(){
            return $this->one;
        }

        function twos (){
            return $this->two * 2;
        }
        

        function threes(){
            return $this->three * 3;
            
        }

        function fours(){
            return $this->four * 4;
            
        }


        function fives(){
            return $this->five * 5;
        }

        function sixes(){
            return $this->six * 6;
        }


    

    //takes in a game object created in yatzyGame.php
    function calcSum($game){
        
        $sum = $game->ones["values"] + $game->twos["values"] + $game->threes["values"] + $game->fours["values"] + $game->fives["values"] + $game->sixes["values"];

        if($sum >=63){
            return $sum + 50;
        }else{
            return $sum;
        }
    }
}