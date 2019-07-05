var comp = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var score = 0;
var chances = 4;
var keypresscapture = [];
var computerguessarray=[];


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

//Capture the keystroke 

var computersguess = guess();

document.onkeydown = function (event) {
  var userinput = event.key.toLowerCase();
  keypresscapture.push(event.key.toLowerCase());
  
  console.log(computerguessarray);
  console.log(computersguess);
  //Output the user key press
  document.getElementById("userinput1").innerHTML = "You entered: " + keypresscapture;

  //If userinput is same as computerguess then up the score,increase the chance and display alert

  if (userinput === computersguess && chances > 0) {
    computerguessarray.push(computersguess);
    score++;
    document.getElementById("score").innerHTML = "Score is: " + score
    alert("Congratulations. Your chances have been reset");
    document.getElementById("computerguessed").innerHTML = "Computer Guess: " + computerguessarray;
    computersguess = guess();
    chances++;
    document.getElementById("chancesleft").innerHTML = "Chances left: " + chances;
   
  }

  //else if chances still less than 4 
  else if (chances > 0) {
    chances--;
    document.getElementById("chancesleft").innerHTML = "Chances left: " + chances;
    alert("wrong. Try again");
  }

  //else if no chances left
  else {
    document.getElementById("gameover").innerHTML = "GAME OVER.<br>Press F5 to start a new game. ";
    document.getElementById("computerguessed").innerHTML = "Chances left: " + computerguessarray;
    stop();
  }
}