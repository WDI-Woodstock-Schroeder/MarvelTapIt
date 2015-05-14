var app = app || {};

app.reselectHero = function reselectHeroChar(){

  $(".reselect-hero").on("click", function(){
    console.log('clicked!');

    $(".selected-hero").hide(500);
    $(".hero-thumb").show(500);

    var heroDiv = $(".hero-bio");
    $(".selected-hero").empty(heroDiv);

  })

};
