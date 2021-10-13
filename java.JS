var overlay = document.getElementById("full_pop");
var closer =document.getElementsByClassName("close")[0];
var background =document.getElementById("home");
var Img_container = document.getElementsByClassName("popup-photo-container")[0]; //获得dom对象

$(".work1").click(function(){
    var work1Img = document.createElement("img");		//创建一个img元素
        addClass(work1Img, 'popup-img');
        // $("p:first").addClass("intro");
		work1Img.src="https://images.unsplash.com/photo-1464652149449-f3b8538144aa?dpr=2&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=";   //给img元素的src属性赋值
		Img_container.appendChild(work1Img);  	//为dom添加子元素img

        var work2Img = document.createElement("img");		//创建一个img元素
        addClass(work2Img, 'popup-img');
		work2Img.src="https://images.unsplash.com/photo-1464652149449-f3b8538144aa?dpr=2&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=";   //给img元素的src属性赋值
		Img_container.appendChild(work2Img);  	//为dom添加子元素img
        $('.popup-title').html("平面設計<br>Graphic design");
 });
$(".tile").click(function(){
     //顯示談窗
     overlay.style.display="block";
     //綁定滾動
     var tops = $(document).scrollTop();//当页面滚动时，把当前距离赋值给页面，这样保持页面滚动条不动
     $(document).bind("scroll",function (){$(document).scrollTop(tops); });
  });
$(".closer").click(function(){
     //解開滾動
     $(document).unbind("scroll");
     //隱藏彈窗
     overlay.style.display="none";
     //刪除圖片
     var child = Img_container.lastElementChild;  
     while (child) { 
         Img_container.removeChild(child); 
         child = Img_container.lastElementChild; 
   } 
  });
window.onclick = function(event){
    if(event.target == overlay){
    //解開滾動
    $(document).unbind("scroll");
    //隱藏彈窗
    overlay.style.display ="none";
    //刪除圖片
    var child = Img_container.lastElementChild;  
    while (child) { 
        Img_container.removeChild(child); 
        child = Img_container.lastElementChild; 
    } 
    }
}
//創建元素在所選的作品
//新增刪除class name
function hasClass(el, className) {
    if (el.classList)
        return el.classList.contains(className);
    else
        return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
}
      
function addClass(el, className) {
    if (el.classList)
        el.classList.add(className);
    else if (!hasClass(el, className)) {
        el.className += " " + className;
    }
}

function removeClass(el, className) {
    if (el.classList)
        el.classList.remove(className);
    else if (hasClass(el, className)) {
        var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
        el.className=el.className.replace(reg, ' ');
    }
}


