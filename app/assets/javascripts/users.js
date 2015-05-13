// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.


$(document).ready(function() {

  $(".selected-hero").hide()
  $(".selected-nemesis").hide()

  $(".hero-thumb").on('click', function() {

    var char = $(this).data("character");
    console.log(char)

    $.ajax({
      method: 'get',
      url: 'http://gateway.marvel.com:80/v1/public/characters/' + char + '?apikey=195de66a5cefd39b309c2eb0ca7463f1',
      dataType: 'json',
      success: function(data){
        console.log(data);

          $(".hero-thumb").hide(700)
          $(".selected-hero").show(700)


          name = data.data.results[0].name;
          description = data.data.results[0].description;
          path = data.data.results[0].thumbnail.path;
          extension = data.data.results[0].thumbnail.extension;
          thumbnail = path + "." + extension;


          $(".selected-hero").html(function() {
              return "<img src=" + thumbnail + "/><div class='hero-bio'><p>THIS IS DATARS for selection 1</p><button type='button' id='reselect-hero'>Reselect</button></div>";
            });
      }
    })

  });

// show list of hero thumbnails for player reselection
  $("#reselect-hero").click(function(){
    $(".selected-hero").hide(700);
    $(".hero-thumb").show(700);
  });



// nemesis list settings
// hide list of hero thumbnails after player selection
  $(".nemesis-thumb").on('click', function() {

    var char = $(this).data("character");
    console.log(char)

    $.ajax({
      method: 'get',
      url: 'http://gateway.marvel.com:80/v1/public/characters/' + char + '?apikey=195de66a5cefd39b309c2eb0ca7463f1',
      dataType: 'json',
      success: function(data){
        console.log(data);

        $(".nemesis-thumb").hide(700)
        $(".selected-nemesis").show(700)

        name = data.data.results[0].name;
        description = data.data.results[0].description;
        path = data.data.results[0].thumbnail.path;
        extension = data.data.results[0].thumbnail.extension;
        thumbnail = path + "." + extension;
      }
    })

  // show list of nemesis thumbnails for player reselection
    $("#reselect-nemesis").click(function(){
      $(".selected-nemesis").hide(700);
      $(".nemesis-thumb").show(700);
    });

    // hide all the heroes
    /*if (heroes and villians are hidden) {
      //move on
    }*/

  });
})
