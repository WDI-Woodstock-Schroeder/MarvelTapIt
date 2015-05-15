var app = app || {};

app.nemesisWin = function newGame(){

  var rematchDiv = "<div class='winMessage'><h1>" + nname + " WINS!!!" + "</h1>"


  $('.selected-hero').append(rematchDiv);


}
