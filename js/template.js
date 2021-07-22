var msg = "Below are the players and their skills and power:";

var titleMsg = "Assignment 3";

function updateMessage() {
  var title = document.getElementById("title");
  var el = document.getElementById("message");
  el.textContent = msg;
  title.textContent = titleMsg;
}
updateMessage();

function Player(name, power, skill) {
  this.name = name;
  this.power = power;
  this.skill = skill;
  this.createPlayer = function () {
    return this.power, this.skill;
  };
}
const playerOne = new Player("Devvy", 86, 79);
const playerTwo = new Player("Levvy", 92, 59);

let playerDetails1 =
  playerOne.name + " power: " + playerOne.power + playerOne.skill;
playerDetails1 += playerOne.createPlayer();
let elPlayer1Name = document.getElementById("player1Name");
let elPlayer1Power = document.getElementById("player1Power");
let elPlayer1Skill = document.getElementById("player1Skill");
elPlayer1Name.textContent = playerOne.name;
elPlayer1Power.textContent = "Power: " + playerOne.power;
elPlayer1Skill.textContent = "Skill: " + playerOne.skill;

let playerDetails2 = playerTwo.name + playerTwo.power + playerTwo.skill;
playerDetails2 += playerTwo.createPlayer();
let elPlayer2Name = document.getElementById("player2Name");
let elPlayer2Power = document.getElementById("player2Power");
let elPlayer2Skill = document.getElementById("player2Skill");
elPlayer2Name.textContent = playerTwo.name;
elPlayer2Power.textContent = "Power: " + playerTwo.power;
elPlayer2Skill.textContent = "Skill: " + playerTwo.skill;
