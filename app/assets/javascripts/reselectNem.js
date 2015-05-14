var app = app || {};

app.reselectNem = function reselectNem(){

  $(".reselect-nemesis").on("click", function(){

    var nemDiv = $(".nemesis-bio");

    $(".selected-nemesis").remove(nemDiv);

    resetNemThumbHandler();

  })

};
