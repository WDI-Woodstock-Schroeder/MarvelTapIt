var app = app || {};

app.heroWin = function newGame(){
  $('.newGame').show();
  
  var rematchDiv = "<div class='winMessage'><h1>" + hname + " WINS!!!" + "</h1>"


  $('.selected-nemesis').append(rematchDiv);

}
