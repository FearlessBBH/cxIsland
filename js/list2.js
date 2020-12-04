$(function() {
    var mySwiper = new Swiper('.swiper-container', {
        // direction: 'vertical', // 垂直切换选项
        loop: true, // 循环模式选项

        // 如果需要前进后退按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        slidesPerView: 3,
    });

    // Introduce 按钮跳转
    let intr_btn = document.querySelector('.introduce .btn');
    intr_btn.addEventListener('click', () => {
        PageTo('detail.html')
    });

    // swiper 跳转
    let swipers = document.querySelectorAll('.swiper-slide');
    swipers.forEach(item => {
        item.addEventListener('click', () => {
            PageTo('detail.html');
        });
    });

    // 更多景点 跳转
    let swiper_btn = document.querySelector('.swiper .btn');
    swiper_btn.addEventListener('click', () => {
        PageTo('imgList.html');
    });
});