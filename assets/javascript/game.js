var comp = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var score = 0;
var chances = 4;
var keypresscapture = [];
var computerguessarray=[];
var chancesover=false;

// Get the length of the array
var complen = comp.length;

// Computer to pick random from the array comp
function guess() {
  return comp[Math.floor(Math.random() * complen)];
}





var computersguess = guess();

document.onkeydown = function (event) {
  //check if there are still chances left
  if(chances>0){
    //Capture the keystroke 
  var userinput = event.key.toLowerCase();
  
  keypresscapture.push(event.key.toLowerCase());
  
  console.log(computerguessarray);
  console.log(computersguess);
  
  //Output the user key press
  document.getElementById("userinput1").innerHTML = "You entered: " + keypresscapture;

  //If userinput is same as computerguess then up the score,increase the chance and display alert

  if (userinput === computersguess ) {
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
  else  {
    chances--;
    document.getElementById("chancesleft").innerHTML = "Chances left: " + chances;
    alert("wrong. Try again");
  }
}

//if chances are 0 then no more iterations 
else {
 
    document.getElementById("gameover").innerHTML = "GAME OVER.Press F5 to start a new game. ";
    computerguessarray.push(computersguess);

    document.getElementById("computerguessed").innerHTML = "Computers Guess: " + computerguessarray;
    chancesover=false;
    computerguessarray=[];
  }
}

//else if no chances le

