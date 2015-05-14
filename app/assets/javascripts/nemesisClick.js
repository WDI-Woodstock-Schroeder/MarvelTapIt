var app = app || {};

app.nemesisClick = function nemesisClickHandler(){

  $(".nemesis-thumb").on('click', function(){

    // remove any page elements with class 'nemesis'
    $('.nemesis').remove()
    
    var char = $(this).data("character");
    var filename = $(this).data("filename");
    var nemesis = {};

    $.ajax({
      method: 'get',
      url: 'http://gateway.marvel.com:80/v1/public/characters/' + char + '?apikey=195de66a5cefd39b309c2eb0ca7463f1',
      dataType: 'json',
      success: function(data){

        $(".nemesis-thumb").hide(500)
        $(".selected-nemesis").show(500)

        // grab and assign name and description data from api
        nname = data.data.results[0].name;
        ndescription = data.data.results[0].description;

        // add key value pairs to hero object variable
        nemesis.name = nname;
        nemesis.description = ndescription;
        nemesis.health = 100;

        // create new image element with class 'nemesis'
        var img = document.createElement('img');
        img.src = filename;
        img.className = "nemesis";

        $('.selected-nemesis').prepend(img);
        app.renderNem();

        // if nemesis and hero exist, show play button
        if ($(".nemesis").length && $(".hero").length) {
          app.play();
        }
        else {
          $(".play").hide();
        };
      }
    });
  });
}
