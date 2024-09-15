document.addEventListener('DOMContentLoaded', function () {
    // 使用 Fetch API 來加載 JSON 文件
    fetch('image/portfolio/data.json')  // 請將路徑替換為實際 JSON 文件的路徑
        .then(response => response.json())
        .then(data => {
            // 遍歷 JSON 中的每個項目並創建 tile 元素
            data.forEach(item => createTileElement(item));
        })
        .catch(error => console.error('Error fetching JSON:', error));
});

function createTileElement(parsedData) {
    const workGrid = document.getElementById('work-grid');

    // 創建一個 tile 元素，並添加對應的 type 作為 class 名稱
    const tile = document.createElement('div');
    tile.className = `tile ${parsedData.type} work-${parsedData.title}`;

    // 使用縮略圖作為背景圖像，路徑依照 type 和 title 指定
    tile.style.backgroundImage = `url('image/portfolio/${parsedData.type}/${parsedData.title}/${parsedData.thumbnail}')`;
    tile.style.backgroundSize = 'cover';

    // 創建並設置 h3 元素
    const h3 = document.createElement('h3');
    h3.textContent = parsedData.title;
    tile.appendChild(h3);

    // 綁定點擊事件
    tile.addEventListener('click', function() {
        // 顯示彈窗
        overlay.style.display = "block";

        // 綁定滾動
        var tops = $(document).scrollTop(); // 當頁面滾動時，保持頁面滾動條不動
        $(document).bind("scroll", function() {
            $(document).scrollTop(tops);
        });

        if (screen.width < 770) {
            $('#full_pop').toggleClass('slider');
        }

        // 設定彈窗標題
        document.querySelector('.popup-title').innerHTML = parsedData.title;
        
        // 清空 Img_container 的內容
        Img_container.innerHTML = '';

        // 添加所有圖片到彈窗，圖片路徑依照 type 和 title 指定
        const images = parsedData.image.split(',');
        images.forEach(imageName => {
            const img = document.createElement('img');
            img.className = 'popup-img';
            img.src = `image/portfolio/${parsedData.type}/${parsedData.title}/${imageName}`;  // 根據 type 和 title 添加圖片路徑
            Img_container.appendChild(img);
        });
    });

    // 將 tile 添加到 work-grid
    workGrid.appendChild(tile);
}
