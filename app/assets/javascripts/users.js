// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.


$(document).ready(function() {

  $(".hero-thumb").on('click', function() {

    var char = $(this).data("character");
    console.log(char)

    $.ajax({
      method: 'get',
      url: 'http://gateway.marvel.com:80/v1/public/characters/" + char + "?apikey=195de66a5cefd39b309c2eb0ca7463f1',
      dataType: 'json',
      success: function(data){
        console.log(data);
        name = data.data.results[0].name;
        description = data.data.results[0].description;
      }
    })

  });


  $(".nemesis-thumb").on('click', function() {

    var char = $(this).data("character");
    console.log(char)

    $.ajax({
      method: 'get',
      url: 'http://gateway.marvel.com:80/v1/public/characters/" + char + "?apikey=195de66a5cefd39b309c2eb0ca7463f1',
      dataType: 'json',
      success: function(data){
        console.log(data);
        name = data.data.results[0].name;
        description = data.data.results[0].description;
      }
    })

    // hide all the heroes
    /*if (heroes and villians are hidden) {
      //move on
    }*/

  });
})
