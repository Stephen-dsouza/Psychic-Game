var comp = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var score = 0;
var chances = 4;
var keypresscapture = [];
var computercapture = [];

// Get the length of the array
var complen = comp.length;

// Computer to pick random from the array comp
function guess() {
  return comp[Math.floor(Math.random() * complen)];
}

//function to stop after x attempts
function stop() {
  return;
}

computercapture.push(guess());

//Capture the keystroke 

document.onkeydown = function (event) {
  var userinput = event.key.toLowerCase();
  keypresscapture.push(event.key.toLowerCase());

  //Output the user key press
  document.getElementById("userinput1").innerHTML = "You entered: " + keypresscapture;

  //If userinput is same as computerguess then up the score and display alert
  
  if (userinput === guess() && chances > 0) {
    score++;
    document.getElementById("score").innerHTML = "Score is: " + score
    alert("Congratulations");
    computerchoice = guess();

  }

  //else if chances still less than 4 
  else if(chances > 0){
    chances--;
    document.getElementById("chancesleft").innerHTML = "Chances left: " + chances;
    alert("wrong. Try again");
  }

  //else if no chances left
  else {
    document.getElementById("computerguessed").innerHTML = "Computer guessed character: " + computercapture;
    document.getElementById("gameover").innerHTML = "GAME OVER.<br>Press F5 to start a new game. ";
    stop();
  }
}