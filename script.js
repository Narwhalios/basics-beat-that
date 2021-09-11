// 1. There are 2 players and players take turns.
// 2. When a player clicks Submit, the game rolls 2 dice and shows the dice rolls, for example 3 and 6.
// 3. The player picks the order of the dice they want. For example, if they wanted the number 63, they would specify that the 2nd dice goes first. You can choose how the player specifies dice order.
// 4. After both players have rolled and chosen dice order, the player with the higher combined number wins.

//Global for the state of the game
var gameDiceRoll = "Dice roll for player";
var gamePickDiceOrder = "Player pick dice order";
var gameState = gameDiceRoll;

//The dice
//Random rolling of dice
var getDiceRoll = function () {
  var diceRoll = Math.ceil(Math.random() * 6);
  console.log(diceRoll);
  return diceRoll;
};
//Make two dice
var get2DiceRolls = function () {
  var theDiceRolls = [getDiceRoll(), getDiceRoll()];
  console.log(theDiceRolls);
  return theDiceRolls;
};

//The order of the number
//The order of the number that the player picked

var getPlayerOrder = function (numberOrder) {
  //Calling the 2 dice function
  var playerPickOrder = get2DiceRolls();
  var return01 = "" + playerPickOrder[0] + playerPickOrder[1];
  var return02 = "" + playerPickOrder[1] + playerPickOrder[0];
  var returnInvalid = "Press 1 or 2.";
  console.log(playerPickOrder);
  console.log(return01);
  console.log(return02);
  //Checking the numbers and forcing it to be a string

  if (numberOrder == "1") {
    console.log(return01);
    return return01;
  }
  if (numberOrder == "2") {
    console.log(return02);
    return return02;
  }
  if (numberOrder != "1" || numberOrder != "2") {
    return returnInvalid;
  }
};

var getReturns = function (insert) {
  var playerOrder = getPlayerOrder(insert);
  if (insert == "1") {
    return `You press 1. Your integer is ${playerOrder}`;
  }
  if (insert == "2") {
    return `You press 2. Your integer is ${playerOrder}`;
  }
  if (insert != "1" || insert != "2") {
    return "Invalid. Only type 1 or 2 in the input box.";
  }
};
//Main function
var main = function (input) {
  var returnMessage = getReturns();
  var twoDiceRolls = get2DiceRolls();
  if (gameState == gameDiceRoll) {
    if (input != "") {
      gameState = gameDiceRoll
      return "Click submit only!";
    }
    if (input == "") {
      gameState = gamePickDiceOrder
      return `Your roll ${twoDiceRolls} respectively. Press 1 or 2 to select the starting the number for your integer. `;
    }
  }
  if(gameState == gamePickDiceOrder){
};
// var popo = ["1", "2"];
// console.log(popo[0] + popo[1], popo[1]);
// var main = function (main) {
//   return popo;
// }
