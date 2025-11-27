var overlay = document.getElementById("full_pop");
var closer =document.getElementsByClassName("close")[0];
var background =document.getElementById("home");
var Img_container = document.getElementsByClassName("popup-photo-container")[0]; //获得dom对象

$(".work-pile-up").click(function(){
    $('.popup-title').html("Pile up");
        var Img1 = document.createElement("img");		//创建一个img元素
        addClass(Img1, 'popup-img');
		Img1.src="/image/portfolio/pileup/mock_01.png";   //给img元素的src属性赋值
		Img_container.appendChild(Img1);  	//为dom添加子元素img

        var Img2 = document.createElement("img");		//创建一个img元素
        addClass(Img2, 'popup-img');
		Img2.src="/image/portfolio/pileup/mock_02.png";   //给img元素的src属性赋值
		Img_container.appendChild(Img2);  	//为dom添加子元素img

        var Img3 = document.createElement("img");		//创建一个img元素
        addClass(Img3, 'popup-img');
		Img3.src="/image/portfolio/pileup/mock_03.png";   //给img元素的src属性赋值
		Img_container.appendChild(Img3);  	//为dom添加子元素img

        var Img4 = document.createElement("img");		//创建一个img元素
        addClass(Img4, 'popup-img');
		Img4.src="/image/portfolio/pileup/play_01.png";   //给img元素的src属性赋值
		Img_container.appendChild(Img4);  	//为dom添加子元素img

        var Img5 = document.createElement("img");		//创建一个img元素
        addClass(Img5, 'popup-img');
		Img5.src="/image/portfolio/pileup/play_02.png";   //给img元素的src属性赋值
		Img_container.appendChild(Img5);  	//为dom添加子元素img
 });
$(".tile").click(function(){
    //讓header透明
    $('.page-header-bg').addClass('header-bg-visable');
    $('.page-header-bg').css("z-index","5")

     //顯示談窗
     overlay.style.display="block";
     //綁定滾動
     var tops = $(document).scrollTop();//当页面滚动时，把当前距离赋值给页面，这样保持页面滚动条不动
     $(document).bind("scroll",function (){$(document).scrollTop(tops); });

     if(screen.width < 770){
        $('#full_pop').addClass("slider");
     }
  });
$(".closer").click(function(){
    var child = Img_container.lastElementChild;  
    while (child) { 
        Img_container.removeChild(child); 
        child = Img_container.lastElementChild; 
    } 
    //關閉YT按鈕開啟30px的blocker
    $('.title_blocker').show();
    $('.linkicon').css('display','none'); 
    $('.ytcon').css('display','none'); 
    //讓header透明
    $('.page-header-bg').removeClass('header-bg-visable');
     //解開滾動#
     $(document).unbind("scroll");
     $('.scroller-bar').scrollTop(0);
     //隱藏彈窗
     if(screen.width > 770)
     {
     overlay.style.display="none";
    }
     if(screen.width < 770){
        $('#full_pop').removeClass("slider");
        setTimeout(() => { overlay.style.display="none"; }, 500);
    }
  });
window.onclick = function(event){
    if(event.target == overlay){
        //關閉YT按鈕開啟30px的blocker
        $('.title_blocker').show();
        $('.ytcon').css('display','none'); 
        $('.linkicon').css('display','none'); 
        //讓header透明
        $('.page-header-bg').removeClass('header-bg-visable');
        $('.page-header-bg').css("z-index","9999");
        //解開滾動
        $(document).unbind("scroll");
        //重製scroller到頂部
        $('.scroller-bar').scrollTop(0);
        //隱藏彈窗
        if(screen.width > 770)
        {
        overlay.style.display="none";
        }
        //刪除圖片
   
        var child = Img_container.lastElementChild;  
        while (child) { 
            Img_container.removeChild(child); 
            child = Img_container.lastElementChild; 
        } 
        
        if(screen.width < 770){
            $('#full_pop').removeClass("slider");
            setTimeout(() => { overlay.style.display="none"; }, 500);
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

    ($(window).scrollTop() >= 100) ? (
        $('.arrow_container').addClass('arrow_visable')
    ) : (
        $('.arrow_container').removeClass('arrow_visable')
    );
});
$(".nav-ham").click(function(){
  if($(this).hasClass('openclicked')) {
    // 關閉 div
    $('.mobile-nav').css("opacity", "1.0").animate({opacity: 0}, 50, function(){
      $('.mobile-nav').css("visibility", "hidden");
    });

    // 解開滾動
    $(document).unbind("scroll");

    $(this).animate({opacity:0},300,function(){
      $('.nav-ham-logo').toggleClass('nav-logo-changer');
    });
    $(this).animate({opacity:1},300);
    $(this).removeClass('openclicked');
  } else {
    // 打開 div
    $(".mobile-nav").css({'visibility': "visible",'opacity':'0' }).animate({opacity: 1}, 50);

    // 綁定滾動（鎖住背景）
    var tops = $(document).scrollTop();
    $(document).bind("scroll", function (){
      $(document).scrollTop(tops);
    });

    $(this).animate({opacity:0},300,function(){
      $('.nav-ham-logo').toggleClass('nav-logo-changer');
    });
    $(this).animate({opacity:1},300);
    $(this).addClass('openclicked');
  }

  $('.page-header').toggleClass('header-limitH');
  $('.page-header-bg').toggleClass('header-expend');
});


// ⭐ 新增這段：點 mobile-nav 任何一個 <a> 時，先關 menu + 解鎖捲動
$('.mobile-nav a').on('click', function () {
  // 關閉 mobile nav
  $('.mobile-nav').css("opacity", "1.0").animate({opacity: 0}, 50, function () {
    $('.mobile-nav').css("visibility", "hidden");
  });

  // 解鎖滾動
  $(document).unbind("scroll");

  // 還原漢堡圖示狀態
  const $ham = $('.nav-ham');
  if ($ham.hasClass('openclicked')) {
    $ham.animate({opacity:0},300,function(){
      $('.nav-ham-logo').toggleClass('nav-logo-changer');
    }).animate({opacity:1},300);
    $ham.removeClass('openclicked');
  }

  // 還原 header 狀態
  $('.page-header').removeClass('header-limitH');
  $('.page-header-bg').removeClass('header-expend');
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
                Subject: "換標題測試",
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
     

document.addEventListener('DOMContentLoaded', function () {
  const header = document.querySelector('.page-header-bg');
  const headerHeight = header ? header.offsetHeight : 0;

  const navLinks = document.querySelectorAll('.header_nav a, .mobile-nav a');

  const sectionMap = {
    'index.html': 'home',
    'about.html': 'about',
    'contact.html': 'contact'
  };

  const currentPage = (location.pathname.split('/').pop() || 'index.html');
  const isIndex = (currentPage === 'index.html' || currentPage === '');

  function scrollToIdTop(id) {
    const target = document.getElementById(id);
    if (!target) return;

    const top = target.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
      top: top - headerHeight,
      behavior: 'smooth'
    });
  }

  // 主選單點擊事件
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (!href || !sectionMap[href]) return; // 跳過 Work 或其他

    link.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = sectionMap[href];

      if (isIndex) {
        // index.html → 滑動到上方
        scrollToIdTop(targetId);
      } else {
        // 其他頁 → 導回 index.html#id
        window.location.href = 'index.html#' + targetId;
      }
    });
  });

  // index.html 進場時如果帶著 hash，就捲到該區域
  if (isIndex && window.location.hash) {
    const id = window.location.hash.substring(1);
    setTimeout(() => scrollToIdTop(id), 10);
  }
});