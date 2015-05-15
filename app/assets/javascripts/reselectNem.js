var app = app || {};

app.reselectNem = function reselectNemesis(){

  $(".reselect-nemesis").on("click", function(){
    console.log('clicked!');

    $(".selected-nemesis").hide(500);
    $(".nemesis-thumb").show(500);

    var nemDiv = $(".nemesis-bio");
    $(".selected-nemesis").empty();

  })

};
