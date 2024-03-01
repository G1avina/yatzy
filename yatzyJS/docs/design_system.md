
# How to play my yatzy game

1. roll the dices

2. you can select a score by clicking on it

3. or you can reroll the dice up to three times

4. you can click a button next to a dice to save that dice (it wont get rerolled)

5. once you have rolled the dices 3 times you must pick a score

6. the game ends when all possible scores are picked

## Decription of yatzy.html and yatzy.css

- yatzy.html houses the content to render
- yatzy.css styles the content

## Description of dice.js

#### dice.js handles all things dices. 

- It handles randomly assigning a value from 1 to 6 with rand()
- It handles rendering de dices 
- It handles the status of a dice (If the value gets saved or rerolled)


## Description of yatzy_engine.js

#### yatzy_engine.js handles all things scored. 

- It handles calculating all possible scores
- It handles rendering de scores
- It handles the selection of a score
- It handles the status of a score (If the score has been picked yet or not)
- It also determines when the game has finished (when all the possible scores have been picked)


## Description of yatzy_game.js

#### yatzy_game.js handles the general game. 

- It initialises all variable and data structures that will be used
- It handles the different states the game has
- Starts the first phase for the game







