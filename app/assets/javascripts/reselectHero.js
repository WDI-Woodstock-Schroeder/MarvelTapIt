var app = app || {};

app.reselectHero = function reselectHero(){

  $(".reselect-hero").on("click", function(){
    console.log('clicked!');
    var heroDiv = $(".hero-bio");

    $(".selected-hero").remove(heroDiv);

    resetHeroThumbHandler();

  })

};
