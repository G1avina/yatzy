<?php

namespace yatzy;

class Dice {
    public $value;

    function roll()
    {
        //$this->value = rand(1,6);
        return rand(1,6);
    }
}
