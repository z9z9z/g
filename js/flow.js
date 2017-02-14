var $ = function(selector){
  return document.querySelectorAll(selector);
};
window.onload = function(){
  var panel = $('.panel');
  var click = $('.panel a');
  for(var i = 0; i < 3; i++){
    console.log(click[i]);
    click[i].onclick = (function(i){
      return function(e){
        console.log(panel[i]);
        panel[i+1].style.left = "0";
      };
    })(i);
  }
}
