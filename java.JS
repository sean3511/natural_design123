var overlay = document.getElementById("full_pop");
var closer =document.getElementsByClassName("close")[0];
var background =document.getElementById("home");

function showoverlay(){
    overlay.style.display="block";
    var tops = $(document).scrollTop();//当页面滚动时，把当前距离赋值给页面，这样保持页面滚动条不动
$(document).bind("scroll",function (){$(document).scrollTop(tops); });
    // document.body.style.overflow = "hidden";
}
function closeoverlay(){
    $(document).unbind("scroll");
    overlay.style.display="none";
    // document.body.style.overflow = "auto";
  
}
window.onclick = function(event){
    if(event.target == overlay){
        $(document).unbind("scroll");
    overlay.style.display ="none";
    // document.body.style.overflow = "auto";

    }
}
