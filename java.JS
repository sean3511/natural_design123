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
     

// header組件
$(function () {
  // ====== 共用參數 ======
  const $header   = $('.page-header');      // ✅ 用 header 本體
  const $nav      = $('.mobile-nav');
  const $ham      = $('.nav-ham');

  // 取得 header 高度（之後要扣掉避免被蓋住）
  function getHeaderHeight() {
    return $header.outerHeight() || 0;
  }

  // 滑到指定 ID，讓它卡在 header 底下
  function scrollToIdTop(id) {
    const $target = $('#' + id);
    if ($target.length === 0) return;

    const top = $target.offset().top - getHeaderHeight();

    window.scrollTo({
      top,
      behavior: 'smooth'
    });
  }

  // ====== 漢堡 / header 狀態 ======
  function setHamState(isOpen) {
    $ham
      .stop(true, true)
      .animate({ opacity: 0 }, 150, function () {
        $ham.toggleClass('openclicked', isOpen);
        $('.page-header').toggleClass('header-limitH', isOpen);
        $('.page-header-bg').toggleClass('header-expend', isOpen);

        $(this).animate({ opacity: 1 }, 150);
      });
  }

  function openMenu() {
    $('body').addClass('no-scroll');

    const $items = $nav.children(); // li 等子元素

    $nav
      .stop(true, true)
      .css({ visibility: 'visible', opacity: 0 });

    $items
      .stop(true, true)
      .css({ opacity: 0 });

    $nav.animate({ opacity: 1 }, 150, function () {
      $items.animate({ opacity: 1 }, 150);
    });

    setHamState(true);
  }

  function closeMenu() {
    const $items = $nav.children();

    $items
      .stop(true, true)
      .animate({ opacity: 0 }, 150)
      .promise()
      .done(function () {
        $nav
          .stop(true, true)
          .animate({ opacity: 0 }, 150, function () {
            $nav.css('visibility', 'hidden');
            $('body').removeClass('no-scroll');
            setHamState(false);
          });
      });
  }

  // ====== header label + mobile nav 點擊 (滑到區塊) ======
  const $navItems = $('.header_nav label[data-target], .mobile-nav p[data-target]');

  $navItems.on('click', function (e) {
    const id = this.dataset.target;
    if (!id) return;

    const isInMobile = $(this).closest('.mobile-nav').length > 0;

    if (isInMobile) {
      e.stopPropagation();
      scrollToIdTop(id);
      closeMenu();
    } else {
      scrollToIdTop(id);
    }
  });

  // ====== hash 進場（例如 index.html#about） ======
  if (window.location.hash) {
    const id = window.location.hash.substring(1);
    setTimeout(() => scrollToIdTop(id), 10);
  }

  // ====== 漢堡按鈕：開 / 關切換 ======
  $ham.on('click', function (e) {
    e.stopPropagation();

    if ($ham.hasClass('openclicked')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // ====== 點整個 mobile-nav 背景：關閉（空白處也能關） ======
  $nav.on('click', function () {
    closeMenu();
  });
});
