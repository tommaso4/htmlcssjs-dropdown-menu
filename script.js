
function firstMenu() {
  var help = $(".help");
  var subMenu = $(".sub-menu")
  help.click(function(){
    subMenu.toggle();
  })
}

function secondMenu(){
  var subElem = $(".sub-elem1");
  var subSub = $(".sub-sub-menu");
  subElem.hover(
    function(){
    subSub.show();
  },
  function(){
    subSub.hide();
  })
}

function init () {

firstMenu();
secondMenu();
}

$(document).ready(init);
