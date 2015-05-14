$(document).ready(function(){

  // default setting of play button visibility
  $(".play").hide();
  $(".newGame").hide();

// call namespaced functions
  function setHandlers(){
    app.heroClick();
    app.nemesisClick();
  };

  setHandlers();

});
