// game functions
var app = app || {};

app.play = function playHandler(){
  $(".play").show(500);
  $(".play").on('click', function() {
    $(".play").hide(500);


    // <div class="six column selected-nemesis"></div>
    $(".hero-bio").empty();

    // <div class="six column selected-hero"></div>
    $(".nemesis-bio").empty();
  })
}
