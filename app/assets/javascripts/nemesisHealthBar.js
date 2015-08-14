var app = app || {};

var namt = 100;

app.nemesis_health_bar = function health(){

  //below is code for damage by clicking on image
  $('.hero').on('click', function(event){
      namt = namt - 5;
      $('.nemesisBarValue').css('width', namt + '%' )
      console.log(namt);

      if( namt <= 0 && namt > -1 ){
        $('.nemesis').addClass('loser');
        $('.nemesis-bio').addClass('loser');
        app.heroWin();
        $('.newGame').show();

      };

    });


    // max damage is essentially quarter of max life



/////////////////////////////////////////
///below is code for damage by keyboard
/////////////////////////////////////////
  var keyClick = $(document).keypress(function(event){
      if(event.keyCode == 97 || event.keyCode == 65){

        namt = namt - 5;
        $('.nemesisBarValue').css('width', namt + '%' )
        console.log(namt);

        if( namt <= 0 && namt > -1 ){
          $('.nemesis').addClass('loser');
          $('.nemesis-bio').addClass('loser');
          app.heroWin();
          $('.newGame').show();
        }
      }
    })
};
