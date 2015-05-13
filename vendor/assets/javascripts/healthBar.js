$(document).ready(function(){
  var hitBtn = $('button.damage'),
      reset = $('button.reset'),
      hBar = $('.health-bar'),
      bar = hBar.find('.bar'),
      hit = hBar.find('.hit');

  hitBtn.on("click", function(){
    var total = hBar.data('total'),
        value = hBar.data('value');

    if( value < 0 ){
			log("you dead, reset");
      return;
    }
    // max damage is essentially quarter of max life
    var damage = Math.floor(Math.random()*total);
    damage = 100;
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
  });
});
