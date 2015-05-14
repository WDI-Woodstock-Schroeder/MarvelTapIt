$(document).ready(function(){

  // default setting of play button visibility
  $(".play").hide();

// call namespaced functions
  function setHandlers(){
    resetHeroThumbHandler();
    resetNemesisThumbHandler();
    app.heroClick();
    app.nemesisClick();
    app.reselectHero();
    app.reselectNem();
    app.resetHero();

  };

  setHandlers();

});
