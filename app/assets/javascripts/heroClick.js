var app = app || {};

app.heroClick = function heroClickHandler(){

  $(".hero-thumb").on('click', function() {

    // remove any elements on the page with class of 'hero'
    $('.hero').remove();

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
        hname = data.data.results[0].name;
        hdescription = data.data.results[0].description;

        // add key value pairs to hero object variable
        hero.name = hname;
        hero.description = hdescription;
        hero.health = 100;

        // create new img element with class 'hero'
        var img = document.createElement('img');
        img.src = filename;
        img.className = "hero";

        // prepend new image to class 'selected-hero'
        $('.selected-hero').prepend(img);
        app.renderHero();

        // if hero and nemesis exist, show play button
        if ($(".nemesis").length && $(".hero").length) {
          app.play();
        }
        else {
          $(".play").hide();
        };

        // $(".hero-bio")
      }
    });
  });
}
