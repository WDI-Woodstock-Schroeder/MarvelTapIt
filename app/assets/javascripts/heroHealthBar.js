var app = app || {};

var hamt = 100;

app.hero_health_bar = function attack(event){

  //below is code for damage by clicking on image
  $('.nemesis').on('click', function(event){
      hamt = hamt - 5;
      $('.heroBarValue').css('width', hamt + '%' );
      console.log(hamt);

      if( hamt <= 0 && hamt > -1 ){
        $('.hero').addClass('loser');
        $('.hero-bio').addClass('loser');
        app.nemesisWin();
        $('.newGame').show();
      };

    });

  /////////////////////////////////////////
  ///below is code for damage by keyboard
  /////////////////////////////////////////
  var keyClick = $(document).keypress(function(event){
      if(event.keyCode == 108 || event.keyCode == 76){

        hamt = hamt - 5;
        $('.heroBarValue').css('width', hamt + '%' );
        console.log(hamt);

        if( hamt <= 0 && hamt > -1 ){
          $('.hero').addClass('loser');
          $('.hero-bio').addClass('loser');
          app.nemesisWin();
          $('.newGame').show();
        }
      }
    })
};
