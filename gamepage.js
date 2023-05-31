// generation of random value
var y = Math.floor(Math.random() * 10 - 1);
console.log(y);

// count of attempts
guess = 1;
// until hit

playername = localStorage.getItem("player_name");

// function for the number sent by the user


console.log(x);
function submit() {

  var x = document.getElementById("Guess_text").value;

    if (x == y) {
        alert(
          " CONGRATULATIONS!!! " + playername + " YOU GUESSED IT RIGHT IN " + guess +" GUESS"
        );
      }
      
      if (x > y) {
        guess++;
        alert("OOPS SORRY!! TRY A SMALLER NUMBER");
      } else {
        guess++;
        alert("OOPS SORRY!! TRY A GREATER NUMBER");
      }
}

function playAgain() {
  y = Math.floor(Math.random() * 10 - 1);
}
