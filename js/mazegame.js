function fnStart() {
  var headline = document.getElementById("H1");
  headline.innerHTML = "The game has started - GOOD LUCK";
}

function fnGameOver() {
  var headline = document.getElementById("H1");
  headline.innerHTML = "The game is over - YOU HAVE FAILED";
}

function fnFinish() {
  var headline = document.getElementById("H1");
  headline.innerHTML = "The game has finished - YOU WON";
}

function reset() {
  var headline = document.getElementById("H1");
  headline.innerHTML = "The Maze";
}
