function resetHeroThumbHandler() {
  $("#reselect-hero").click(function(){
    $(".selected-hero").hide(500);
    $(".hero-thumb").show(500);
  });
}


function resetNemesisThumbHandler(){
  $("#reselect-nemesis").click(function(){
    $(".selected-nemesis").hide(500);
    $(".nemesis-thumb").show(500);
  });
}
