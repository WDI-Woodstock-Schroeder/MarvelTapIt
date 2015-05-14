var app = app || {};

app.renderHero = function renderHeroBio(){

  var heroDiv = "<div class='hero-bio'><h5>" + hname + "</h5><p>" + hdescription + "</p><button type='button' class='reselect-hero'>Reselect</button></div>"

  $(".selected-hero").append(heroDiv);

};
