var app = app || {};

app.renderNem = function renderNemBio(){

  var nemDiv = "<div class='nemesis-bio'><h5>" + nname + "</h5><p>" + ndescription + "</p><button type='button' class='reselect-nemesis'>Reselect</button></div>"

  $(".selected-nemesis").append(nemDiv);

};
