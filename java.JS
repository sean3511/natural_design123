var overlay = document.getElementById("full_pop");
var closer =document.getElementsByClassName("close")[0];
var background =document.getElementById("home");
var Img_container = document.getElementsByClassName("popup-photo-container")[0]; //获得dom对象
$(".work-game-ui").click(function(){
    $('.popup-title').html("遊戲UI設計<br>Game-UI design");
        var work_game_Img1 = document.createElement("img");		//创建一个img元素
        addClass(work_game_Img1, 'popup-img');
		work_game_Img1.src="/image/portfolio/game_UI/gameUI_01.png";   //给img元素的src属性赋值
		Img_container.appendChild(work_game_Img1);  	//为dom添加子元素img

        var work_game_Img2 = document.createElement("img");		//创建一个img元素
        addClass(work_game_Img2, 'popup-img');
		work_game_Img2.src="/image/portfolio/game_UI/gameUI_02.png";   //给img元素的src属性赋值
		Img_container.appendChild(work_game_Img2);  	//为dom添加子元素img

        var work_game_Img3 = document.createElement("img");		//创建一个img元素
        addClass(work_game_Img3, 'popup-img');
		work_game_Img3.src="/image/portfolio/game_UI/gameUI_03.png";   //给img元素的src属性赋值
		Img_container.appendChild(work_game_Img3);  	//为dom添加子元素img

        var work_game_Img4 = document.createElement("img");		//创建一个img元素
        addClass(work_game_Img4, 'popup-img');
		work_game_Img4.src="/image/portfolio/game_UI/gameUI_04.png";   //给img元素的src属性赋值
		Img_container.appendChild(work_game_Img4);  	//为dom添加子元素img
 });
$(".work-sofa-app").click(function(){
    $('.popup-title').html("沙發APP設計<br>Sofa-App design");
        var work_sofa_Img1 = document.createElement("img");		//创建一个img元素
        addClass(work_sofa_Img1, 'popup-img');
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
    $('.page-header-bg').css("z-index","5")
     //顯示談窗
     overlay.style.display="block";
     //綁定滾動
     var tops = $(document).scrollTop();//当页面滚动时，把当前距离赋值给页面，这样保持页面滚动条不动
     $(document).bind("scroll",function (){$(document).scrollTop(tops); });
  });
$(".closer").click(function(){
    $('.page-header-bg').css("z-index","9999")
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
    $('.page-header-bg').css("z-index","9999");
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
 // 當滾動時畫面的頂部離當前滾動位置>50則增加增加header背景
$(window).scroll(function(){
    ($(window).scrollTop() >= 50) ? (
        $('.page-header-bg').addClass('scrolled')
    ) : (
        $('.page-header-bg').removeClass('scrolled')
    );
});
$(".nav-ham").click(function(){
    if($(this).hasClass('openclicked')) {
    //關閉div

    $('.mobile-nav').css("opacity", "1.0").animate({opacity: 0}, 50, function(){
        $('.mobile-nav').css("visibility", "hidden");
    });

    //解開滾動
    $(document).unbind("scroll");
    
    $(this).animate({opacity:0},300,function(){
        $('.nav-ham-logo').toggleClass('nav-logo-changer');
    })
    $(this).animate({opacity:1},300,)
    $(this).removeClass('openclicked');
    }
    else {
     //打開div
     $(".mobile-nav").css({'visibility': "visible",'opacity':'0' }).animate({opacity: 1}, 50);

     //綁定滾動
     var tops = $(document).scrollTop();//当页面滚动时，把当前距离赋值给页面，这样保持页面滚动条不动
     $(document).bind("scroll",function (){$(document).scrollTop(tops); });   

        $(this).animate({opacity:0},300,function(){
            $('.nav-ham-logo').toggleClass('nav-logo-changer');
        })
        $(this).animate({opacity:1},300,)
      $(this).addClass('openclicked');
    }
    $('.page-header').toggleClass('header-limitH');
    $('.page-header-bg').toggleClass('header-expend');
});
//及時測試信箱正確

var email = document.getElementById('mail');

function checkEmail() {
    let fields = {
        mail: document.querySelector("#mail").value,
    };
  var reg1 = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/; 
  if(fields.mail!= 0){
  if (reg1.test(email.value) == false) {
    $(".txt-email").addClass('txt-valid')
  }else if(reg1.test(email.value) == true){
    $(".txt-email").removeClass('txt-valid')
  }
  }
  else{
    $(".txt-email").removeClass('txt-valid')
  }
}
//寄信功能
function sendMail() {
    var myreg = /^([\w]+)(.[\w]+)*@([\w]+)(.[\w]{2,3}){1,2}$/;
    let fields = {
        name: document.querySelector("#name").value,
        mail: document.querySelector("#mail").value,
        message: document.querySelector('#message').value
    };
    let body = '姓名：' + fields.name + '<br>' + '信箱：' + fields.mail + '<br>' +'訊息:' + fields.message;
    if(fields.name && fields.mail && fields.message != 0){
        if(myreg.test(fields.mail)!= true){
             alert('信箱輸入錯誤');
        }
        else{
            let yourmail =
            Email.send({
                SecureToken: "99c91cc6-0b64-47c2-9cbc-212639e3a276",
                To: 'natural.design.sean@gmail.com',
                // From: String(fields.mail),
                From: 'natural.design.sean@gmail.com',
                Subject: "信件成功測試",
                Body: body,
            })
            .then(
                // message => alert(message)
                function(message){return alert(message = (message === 'The specified string is not in the form required for an e-mail address.'?'信箱輸入錯誤' : message))}
            );
        }
    }
}
//判定輸入是否錯誤
// var inputs = document.querySelectorAll('.textarea')
// inputs.forEach(input =>{})
// 原文是inputs.forEach(function(input){})
     


// 製作aboutme背景
var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

// confioguration variables
// space between each line
var lineSpacing = 30;

var lineColor = 'rgba(255, 255, 255, 1)'; // RGBA supported, last value = alpha (between 0 and 1)

// line length is calculated based on distance between mouse position and the position of a point
// min and max are taken into account so the length of the line does not go below or above these values
var lineMinLength = 2;
var lineMaxLength = 10;

// multiplier of the length of the line, the length of the line is the distance between the mouse and the point at which a line starts
// e.g. if you cursor is at the top left and the point is at the bottom right, the distance will be 1, which is multiplied by this value
// this value will not exceed the min/max defined above
var lineLengthMultiplier = 20;

var lineWidth = 0.15;

// runtime variables
var width;
var height;
var linesX;
var linesY;
var mouseX;
var mouseY;

var onResize = function () {
    width = canvas.clientWidth;
    height = canvas.clientHeight;
    linesX = Math.floor((width - (lineSpacing / 2)) / lineSpacing);
    linesY = Math.floor((height - (lineSpacing / 2)) / lineSpacing);
    canvas.width = width;
    canvas.height = height;
};

var draw = function () {
	requestAnimationFrame(draw);
	
	if (mouseX == void 0 || mouseY == void 0) {
		return;
	}
	
	ctx.clearRect(0, 0, width, height);
	
	ctx.lineWidth = lineWidth;
	ctx.strokeStyle = lineColor;
	
    for (var x = 0; x < linesX; x++) {
        for (var y = 0; y < linesY; y++) {
			var screenX = (x * lineSpacing) + lineSpacing;
			var screenY = (y * lineSpacing) + lineSpacing;
			var angle = Math.atan2(screenY - mouseY, screenX - mouseX);
			var distance = Math.sqrt( (mouseX-screenX) * (mouseX-screenX) + (mouseY - screenY) * (mouseY - screenY) );
			
			var length = Math.min(Math.max(lineMinLength, distance / ((width + height) / 2) * lineLengthMultiplier), lineMaxLength);
			
			ctx.beginPath();
			ctx.moveTo(screenX, screenY);
			
			ctx.lineTo(
				screenX + length * Math.cos(angle),
				screenY + length * Math.sin(angle)
			);
			
            ctx.stroke();
        }
    }
};

window.addEventListener('resize', function () {
	onResize();
	draw();
});

canvas.addEventListener('mousemove', function (ev) {
	mouseX = ev.clientX;
	mouseY = ev.clientY;
});

onResize();

mouseX = width / 2;
mouseY = height / 2;

draw();