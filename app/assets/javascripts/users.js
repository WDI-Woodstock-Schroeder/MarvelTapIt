// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(document).ready(function() {

  $(".selected-hero").hide();
  $(".selected-hero").hide();
  $(".play").hide();

  $(".hero-thumb").on('click', function() {

    var char = $(this).data("character");
    var filename = $(this).data("filename");

    console.log(char)

    $.ajax({
      method: 'get',
      url: 'http://gateway.marvel.com:80/v1/public/characters/' + char + '?apikey=195de66a5cefd39b309c2eb0ca7463f1',
      dataType: 'json',
      success: function(data){
        // console.log(data);

        $(".hero-thumb").hide(500)
        $(".selected-hero").show(500)

        name = data.data.results[0].name;
        description = data.data.results[0].description;

        // remove any elements on the page with class of 'hero'
        $('.hero').remove()

        // create new img element with class 'hero'
        var img = document.createElement('img');
        img.src = filename;
        img.className = "hero";

        $('.selected-hero').prepend(img);

      }
    })

  });

// show list of hero thumbnails for player reselection
  $("#reselect-hero").click(function(){
    $(".selected-hero").hide(500);
    $(".hero-thumb").show(500);
  });



// nemesis list settings
// hide list of hero thumbnails after player selection
  $(".nemesis-thumb").on('click', function() {

    var char = $(this).data("character");
    var filename = $(this).data("filename");

    console.log(char)

    $.ajax({
      method: 'get',
      url: 'http://gateway.marvel.com:80/v1/public/characters/' + char + '?apikey=195de66a5cefd39b309c2eb0ca7463f1',
      dataType: 'json',
      success: function(data){
        // console.log(data);

        $(".nemesis-thumb").hide(500)
        $(".selected-nemesis").show(500)

        name = data.data.results[0].name;
        description = data.data.results[0].description;

        // remove any page elements with class 'nemesis'
        $('.nemesis').remove()

        // create new image element with class 'nemesis'
        var img = document.createElement('img');
        img.src = filename;
        img.className = "nemesis";

        $('.selected-nemesis').prepend(img);
      }
    })

  // show list of nemesis thumbnails for player reselection
    $("#reselect-nemesis").click(function(){
      $(".selected-nemesis").hide(500);
      $(".nemesis-thumb").show(500);
    });

    // hide all the heroes
    if ($(".nemesis") && $(".hero")){
      $(".play").show(500);
    };

  });
})
