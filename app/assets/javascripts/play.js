// game functions
var app = app || {};

app.play = function playHandler(){
  $(".play").show(500);
  $(".play").on('click', function() {
    $(".play").hide(500);


  })
}
