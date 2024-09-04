// Phần trình chiếu hình ảnh
const images = document.querySelectorAll('.list-images img');
let currentImageIndex = 0;

function showImage(index) {
    images.forEach((img, i) => {
        img.style.display = (i === index) ? 'block' : 'none';
    });
}

function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
}

let imageAutoplay = setInterval(showNextImage, 3000); // Autoplay cho hình ảnh

// Hiển thị hình ảnh đầu tiên
showImage(currentImageIndex);

// Phần trình chiếu tin tức
const newsItems = document.querySelectorAll('.news-item');
let currentNewsIndex = 0;

function showNews(index) {
    newsItems.forEach((item, i) => {
        item.style.display = i === index ? 'block' : 'none';
    });
}

// Điều khiển thủ công cho phần tin tức
document.querySelector('.buttons').addEventListener('click', (event) => {
    if (event.target.id === 'prev') {
        currentNewsIndex = (currentNewsIndex > 0) ? currentNewsIndex - 1 : newsItems.length - 1;
    } else if (event.target.id === 'next') {
        currentNewsIndex = (currentNewsIndex + 1) % newsItems.length;
    }
    showNews(currentNewsIndex);
});

// Hiển thị tin tức đầu tiên
showNews(currentNewsIndex);