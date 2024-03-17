<?php
require_once('_config.php');

use yatzy\Dice;
use yatzy\Engine;

switch ($_GET["action"] ?? "version") {
case "roll":

  // Get the raw POST data
  $json_data = file_get_contents('php://input');
  // Decode the JSON data into a PHP array
  $data_array = json_decode($json_data, true);

  //json return data for dices
  $d = new Dice();

    if($data_array['d1Set'] == 0){
      $data["d1Value"] = $d->roll();
    }else{
      $data["d1Value"] = $data_array['d1Value'];
    }

    if($data_array['d2Set'] == 0){
      $data["d2Value"] = $d->roll();
    }else{
      $data["d2Value"] = $data_array['d2Value'];
    }

    if($data_array['d3Set'] == 0){
      $data["d3Value"] = $d->roll();
    }else{
      $data["d3Value"] = $data_array['d3Value'];
    }


    if($data_array['d4Set'] == 0){
      $data["d4Value"] = $d->roll();
    }else{
      $data["d4Value"] = $data_array['d4Value'];
    }


    if($data_array['d5Set'] == 0){
      $data["d5Value"] = $d->roll();
    }else{
      $data["d5Value"] = $data_array['d5Value'];
    }

    $eng = new Engine($data_array['d1Value'], $data_array['d2Value'], $data_array['d3Value'], $data_array['d4Value'], $data_array['d5Value']);
    $data["ones"] = $eng->ones();
    $data["twos"] = $eng->twos();
    $data["threes"] = $eng->threes();
    $data["fours"] = $eng->fours();
    $data["fives"] = $eng->fives();
    $data["sixes"] = $eng->sixes();

    break;



case "score":
  
  



case "version":
default:
    $data = ["version" => "1.0"];
}

header("Content-Type: application/json");
echo json_encode($data);