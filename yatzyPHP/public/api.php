<?php
require_once('_config.php');
require_once('../app/models/YatzyEngine.php');
require_once('../app/models/YatzyGame.php');

use yatzy\Dice;
use yatzy\Engine;
use yatzy\Game;

switch ($_GET["action"] ?? "version") {
case "roll":

  // Get the raw POST data
  $json_data = file_get_contents('php://input');
  // Decode the JSON data into a PHP array
  $data_array = json_decode($json_data, true);

  $gameImage = new Game($data_array);
    $gameImage->rollDice();
    $gameImage->calcScore();
    $gameImage->calcState("roll");
    $gameImage->checkEnd();
    

    $data = $gameImage->createJson();


break;



case "score":
  // Get the raw POST data
  $json_data = file_get_contents('php://input');
  // Decode the JSON data into a PHP array
  $data_array = json_decode($json_data, true);
  $gameImage = new Game($data_array);
  $gameImage->calcScore();
  $gameImage->calcState("score");
  $gameImage->checkEnd();
  $data = $gameImage->createJson();



break;
  
  



case "version":
default:
    $data = ["version" => "1.0"];
}

header("Content-Type: application/json");
echo json_encode($data);