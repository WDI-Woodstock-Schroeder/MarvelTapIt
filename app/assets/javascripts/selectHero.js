// function selectHero(){
//   $(".hero-thumb").on('click', function() {
//
//     var char = $(this).data("character");
//     var filename = $(this).data("filename");
//
//     // console.log(char)
//
//     var hero = {};
//
//     $.ajax({
//       method: 'get',
//       url: 'http://gateway.marvel.com:80/v1/public/characters/' + char + '?apikey=195de66a5cefd39b309c2eb0ca7463f1',
//       dataType: 'json',
//       success: function(data){
//         // console.log(data);
//
//         $(".hero-thumb").hide(500)
//         $(".selected-hero").show(500)
//
//         name = data.data.results[0].name;
//         description = data.data.results[0].description;
//
//         hero.name = name;
//         hero.description = description;
//         hero.health = 100;
//
//         // remove any elements on the page with class of 'hero'
//         $('.hero').remove()
//
//         // create new img element with class 'hero'
//         var img = document.createElement('img');
//         img.src = filename;
//         img.className = "hero";
//
//         $('.selected-hero').prepend(img);
//
//         // if hero and nemesis exist, show play button
//         if ($(".nemesis").length && $(".hero").length) {
//           app.play;
//         };
//
//         $(".hero-bio")
//
//       }
//     })
//
//   });
// }
