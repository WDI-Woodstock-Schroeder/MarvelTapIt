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

    var heroDiv = '<div class="hero-health"data-total="1000" data-value="1000"><div class="bar"><div class="hit"></div></div></div>'

    $(".hero-bio").append(heroDiv);

    var nemesisDiv = '<div class="nemesis-health"data-total="1000" data-value="1000"><div class="bar"><div class="hit"></div></div></div>'

    $(".nemesis-bio").append(nemesisDiv);

    app.hero_health_bar();
    app.nemesis_health_bar();
    app.winlettering();
  })
}
