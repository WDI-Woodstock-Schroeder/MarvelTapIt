// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .


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
