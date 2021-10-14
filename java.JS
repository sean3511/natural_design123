var overlay = document.getElementById("full_pop");
var closer =document.getElementsByClassName("close")[0];
var background =document.getElementById("home");
var Img_container = document.getElementsByClassName("popup-photo-container")[0]; //获得dom对象
$(".work-sofa-app").click(function(){
    $('.popup-title').html("沙發APP設計<br>Sofa-App design");
        var work_sofa_Img1 = document.createElement("img");		//创建一个img元素
        addClass(work_sofa_Img1, 'popup-img');
        // $("p:first").addClass("intro");
		work_sofa_Img1.src="/image/portfolio/sofa_app/shop01.png";   //给img元素的src属性赋值
		Img_container.appendChild(work_sofa_Img1);  	//为dom添加子元素img

        var work_sofa_Img2 = document.createElement("img");		//创建一个img元素
        addClass(work_sofa_Img2, 'popup-img');
		work_sofa_Img2.src="/image/portfolio/sofa_app/shop02.png";   //给img元素的src属性赋值
		Img_container.appendChild(work_sofa_Img2);  	//为dom添加子元素img

        var work_sofa_Img3 = document.createElement("img");		//创建一个img元素
        addClass(work_sofa_Img3, 'popup-img');
		work_sofa_Img3.src="/image/portfolio/sofa_app/shop03.png";   //给img元素的src属性赋值
		Img_container.appendChild(work_sofa_Img3);  	//为dom添加子元素img
 });
 $(".work-shu-app").click(function(){
    $('.popup-title').html("世新大學APP設計<br>SHU-App design");
    var work_shu_Img1 = document.createElement("img");		//创建一个img元素
        addClass(work_shu_Img1, 'popup-img');
        // $("p:first").addClass("intro");
		work_shu_Img1.src="/image/portfolio/shu_app/shu_app01.png";   //给img元素的src属性赋值
		Img_container.appendChild(work_shu_Img1);  	//为dom添加子元素img

        var work_shu_Img2 = document.createElement("img");		//创建一个img元素
        addClass(work_shu_Img2, 'popup-img');
		work_shu_Img2.src="/image/portfolio/shu_app/shu_app02.png";   //给img元素的src属性赋值
		Img_container.appendChild(work_shu_Img2);  	//为dom添加子元素img

        var work_shu_Img3 = document.createElement("img");		//创建一个img元素
        addClass(work_shu_Img3, 'popup-img');
		work_shu_Img3.src="/image/portfolio/shu_app/shu_app03.png";   //给img元素的src属性赋值
		Img_container.appendChild(work_shu_Img3);  	//为dom添加子元素img
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
     $('.scroller-bar').scrollTop(0);
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
    //重製scroller到頂部
    $('.scroller-bar').scrollTop(0);
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
//淡出淡入
$(document).ready(function() {
    $('#home').css('display', 'none');
    $('#home').fadeIn(400); //一開始淡入
    $('a.link').click(function(event) { //點選 class 為 link 的 a 元件時觸發
     event.preventDefault(); //取消事件預設動作
     newLocation = this.href;
     $('#home').fadeOut(400, newpage); //點選後淡出
    });
    
    function newpage() {
     window.location = newLocation;
    }
   });


