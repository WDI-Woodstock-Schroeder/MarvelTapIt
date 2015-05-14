var app = app || {};

app.nemesis_health_bar = function health(){

  var hitBtn = $('.nemesis').click(),
      reset = $('button.reset'),
      hBar = $('.nemesis-health'),
      bar = hBar.find('.bar'),
      hit = hBar.find('.hit');

  hitBtn.on("click", function(){
    var total = hBar.data('total'),
        value = hBar.data('value');

    if( value <= 0 ){
      $('.nemesis').addClass('loser');
      $('.nemesis-bio').addClass('loser');
      app.heroWin();
    }
    // max damage is essentially quarter of max life
    var damage = Math.floor(Math.random()*total);
    damage = 1000;
    var newValue = value - damage;
    // calculate the percentage of the total width
    var hitWidth = (damage / total ) * 100 + "%";
    var barWidth = (newValue / total) * 100 + "%";

    // show hit bar and set the width
    hit.css({'display':'block','width':hitWidth});
    hBar.data('value', newValue);

    setTimeout(function(){
      hit.css({'width': '0'});
      bar.css('width', barWidth + "%");
    }, 500);
    //bar.css('width', total - value);

    log(value, damage, hitWidth);

    if( value < 0){
      log("DEAD");
    }
  });

  reset.on('click', function(e){
    hBar.data('value', hBar.data('total'));

    hit.css({'width': '0'});

		bar.css('width', '100%');
		log("resetting health to 1000");
  });
}; //removed parenthse AND FIXED IT!!!



function log(_total, _damage, _hitWidth){
  var log = $('.log');

  if(_damage !== undefined && _hitWidth !== undefined) {
	  log.append("<div>H:"+_total+" D:"+_damage+" W:"+_hitWidth+" = " + (_total - _damage) + "</div>");
  } else {
    log.append("<div>"+_total+"</div>");
  }
};
