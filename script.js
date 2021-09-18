// 1. There are 2 players and players take turns.
// 2. When a player clicks Submit, the game rolls 2 dice and shows the dice rolls, for example 3 and 6.
// 3. The player picks the order of the dice they want. For example, if they wanted the number 63, they would specify that the 2nd dice goes first. You can choose how the player specifies dice order.
// 4. After both players have rolled and chosen dice order, the player with the higher combined number wins.

//Global for the states of the game
var gameDiceRollforPlayer1 = "Dice roll for player 1";
var gameUserOrderforPlayer1 = "Player 1 pick dice order";
var gameDiceRollforPlayer2 = "Dice roll for player 2";
var gameUserOrderforPlayer2 = "Player 2 pick dice order";
var compareNumbers = "Winning condition";

var gameState = gameDiceRollforPlayer1;

//Global for storing the number that the user selected
var player01Number = [];
var player02Number = [];

//The dice

var getDiceRoll = function () {
  return Math.ceil(Math.random() * 6);
};

//Player 1 Dice
var player01DiceRolls = [getDiceRoll(), getDiceRoll()];
var player01firstChoice = "" + player01DiceRolls[0] + player01DiceRolls[1];
var player01secondChoice = "" + player01DiceRolls[1] + player01DiceRolls[0];

//Player 2 Dice
var player02DiceRolls = [getDiceRoll(), getDiceRoll()];
var player02firstChoice = "" + player02DiceRolls[0] + player02DiceRolls[1];
var player02secondChoice = "" + player02DiceRolls[1] + player02DiceRolls[0];

// Function for when the player selects their choice
//Player 1 Choice
var getPlayers01Choice = function (arrangement) {
  if (arrangement == "1") {
    player01Number.push(player01firstChoice);
    return player01firstChoice + ". Player 2 turn now! Click submit.";
  }
  if (arrangement == "2") {
    player01Number.push(player01secondChoice);
    return player01secondChoice + ". Player 2 turn now! Click submit.";
  }
  return (
    "Press 1 for " +
    player01firstChoice +
    " or 2 for " +
    player01secondChoice +
    "."
  );
};

//Player 2 Choice
var getPlayers02Choice = function (arrangement) {
  if (arrangement == "1") {
    player02Number.push(player02firstChoice);
    return player02firstChoice;
  }
  if (arrangement == "2") {
    player02Number.push(player02secondChoice);
    return player02secondChoice;
  }
  return (
    "Press 1 for " +
    player02firstChoice +
    " or 2 for " +
    player02secondChoice +
    "."
  );
};

//Main function
var main = function (input) {
  var player01Choice = getPlayers01Choice(input);
  var player02Choice = getPlayers02Choice(input);
  if (gameState == gameDiceRollforPlayer1)
    if (input == "") {
      gameState = gameUserOrderforPlayer1;
      return `Dices are ${player01DiceRolls[0]} and ${player01DiceRolls[1]}. Press 1 for ${player01firstChoice} or 2 for ${player01secondChoice} to be your number.`;
    }

  if (gameState == gameUserOrderforPlayer1) {
    gameState = gameDiceRollforPlayer2;
    return player01Choice;
  }

  if (gameState == gameDiceRollforPlayer2) {
    gameState = gameUserOrderforPlayer2;
    return `Dices are ${player02DiceRolls[0]} and ${player02DiceRolls[1]}. Press 1 for ${player02DiceRolls[0]} or 2 for ${player02DiceRolls[1]} to be your first number.`;
  }

  if (gameState == gameUserOrderforPlayer2) {
    gameState = compareNumbers;
    console.log("Player 1" + player01Number);
    console.log("Player 2" + player02Number);
    return player02Choice + "<br> So the winner is..";
  }
  if (gameState == compareNumbers) {
    if (player01Number[0] > player02Number[0]) {
      return "PLAYER 1 WON! Press F5 to restart the game.";
    }
    if (player01Number[0] < player02Number[0]) {
      return "PLAYER 2 WON! Press F5 to restart the game.";
    }
  }
};
