// game functions
var app = app || {};

app.playGame = function playHandler(){
  $('h4').hide();
  $(".play").show(500);
  $(".play").on('click', function() {
    $(".play").hide(500);

    // <div class="six column selected-nemesis"></div>
    $(".hero-bio").empty();

    // <div class="six column selected-hero"></div>
    $(".nemesis-bio").empty();

    var heroDiv = '<div class="heroBarValue"></div>'

    $(".hero-bio").append(heroDiv);

    var nemesisDiv = '<div class="nemesisBarValue"></div>'

    $(".nemesis-bio").append(nemesisDiv);

    app.hero_health_bar();
    app.nemesis_health_bar();
  })
}
