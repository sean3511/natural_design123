document.addEventListener('DOMContentLoaded', function () {

  // 你想要指定出現在卡片滑動列的項目
  const targetTitles = [
    "AIDOGELON",
    "ETH刮刮樂",
    "3D鴿鐘器械動畫",
    "KPMAX遊戲UI"
  ];

  const wrapper = document.querySelector('#work .mySwiper .swiper-wrapper');
  if (!wrapper) return;

  fetch('image/portfolio/data.json')
    .then(res => res.json())
    .then(items => {
      wrapper.innerHTML = ''; // 清空舊卡片

      items
        .filter(item => targetTitles.includes(item.title))
        .forEach(item => {
          
          const slide = document.createElement('div');
          slide.className = 'swiper-slide';

          // ✨ 正確路徑：type + title + thumbnail
          const imgPath = `image/portfolio/${item.type}/${item.title}/${item.thumbnail}`;

          // 改成 inline background，不用 var()
          slide.style.backgroundImage = `url('${imgPath}')`;
          slide.style.backgroundSize = "cover";
          slide.style.backgroundPosition = "center";
          slide.style.backgroundRepeat = "no-repeat";

          // 卡片文字（你可以改成卡片 body 之類的）
          slide.textContent = item.title;

          wrapper.appendChild(slide);
        });

      // init swiper
      new Swiper('.mySwiper', {
        slidesPerView: 'auto',
        spaceBetween: 24,
        freeMode: true,
        grabCursor: true
      });
    })
    .catch(err => console.error('data.json error:', err));

});
