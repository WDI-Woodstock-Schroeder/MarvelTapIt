$(document).ready(function(){

  $(".play").hide();

  $(".hero-thumb").on('click', function() {

    var char = $(this).data("character");
    var filename = $(this).data("filename");
    var hero = {};

    $.ajax({
      method: 'get',
      url: 'http://gateway.marvel.com:80/v1/public/characters/' + char + '?apikey=195de66a5cefd39b309c2eb0ca7463f1',
      dataType: 'json',
      success: function(data){

        $(".hero-thumb").hide(500)
        $(".selected-hero").show(500)

        // grab and assign name and description data from api
        name = data.data.results[0].name;
        description = data.data.results[0].description;


        // add key value pairs to hero object variable
        hero.name = hname;
        hero.description = hdescription;
        hero.health = 100;

        // remove any elements on the page with class of 'hero'
        $('.hero').remove()

        // create new img element with class 'hero'
        var img = document.createElement('img');
        img.src = filename;
        img.className = "hero";

        // prepend new image to class 'selected-hero'
        $('.selected-hero').prepend(img);

        // if hero and nemesis exist, show play button
        if ($(".nemesis").length && $(".hero").length) {
          app.play();
        };

        $(".hero-bio")
      }
    });
  });


// nemesis list settings
// hide list of hero thumbnails after player selection
  $(".nemesis-thumb").on('click', function(){

    var char = $(this).data("character");
    var filename = $(this).data("filename");
    var nemesis = {};

    var nemesis = {};

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

        nemesis.name = nname;
        nemesis.description = ndescription;
        nemesis.health = 100;

        // remove any page elements with class 'nemesis'
        $('.nemesis').remove()

        // create new image element with class 'nemesis'
        var img = document.createElement('img');
        img.src = filename;
        img.className = "nemesis";

        $('.selected-nemesis').prepend(img);

        // if nemesis and hero exist, show play button
        if ($(".nemesis").length && $(".hero").length) {
          app.play();
        };
      }
    });
  });

  function setHandlers(){
    resetHeroThumbHandler();
    resetNemesisThumbHandler();
    characterClickHandler();
    // playHandler();
  };

});

  // show list of hero thumbnails for player reselection

  // function resetHeroThumbHandler() {
  //   $("#reselect-hero").click(function(){
  //     $(".selected-hero").hide(500);
  //     $(".hero-thumb").show(500);
  //   });
  // }

  // show list of nemesis thumbnails for player reselection
  // function resetNemesisThumbHandler(){
  //   $("#reselect-nemesis").click(function(){
  //     $(".selected-nemesis").hide(500);
  //     $(".nemesis-thumb").show(500);
  //   });
  // }

// function playGame(){}
//   $(".play").on('click', function() {
//
//
//   })
// }
