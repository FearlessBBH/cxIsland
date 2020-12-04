$(function() {
    // var mySwiper = new Swiper('.swiper-container', {
    //     direction: 'vertical', // 垂直切换选项
    //     loop: false, // 循环模式选项
    //     slidesPerView: 'auto',
    //     // autoplay: {
    //     //     delay: 5000
    //     // },
    //     mousewheel: true, // 鼠标滚动

    //     // 如果需要分页器
    //     pagination: {
    //         el: '.swiper-pagination',
    //         clickable: true, // 点击切换页面
    //         // bulletClass: 'my-bullet'
    //     },

    // });

    let header = document.querySelectorAll('header');

    // 点击导航并跳转
    // header.forEach(item => {
    //     let grids = item.querySelectorAll('.grid');
    //     grids.forEach(item => {
    //         item.addEventListener('click', (e) => {
    //             let _this = e.target.innerHTML;
    //             switch (_this) {
    //                 case '首 页':
    //                     mySwiper.slideTo(0, 500, false);
    //                     break;
    //                 case '新闻中心':
    //                     mySwiper.slideTo(1, 500, false);
    //                     break;
    //                 case '营商环境':
    //                     mySwiper.slideTo(2, 500, false);
    //                     break;
    //                 case '一网通办':
    //                     mySwiper.slideTo(3, 500, false);
    //                     break;
    //                 case '产城人文':
    //                     mySwiper.slideTo(4, 500, false);
    //                     break;
    //                 case '政务公开':
    //                     PageTo('zwgk.html');
    //                     break;
    //             }
    //         })
    //     });
    // });

    // 水波纹
    $('.p1').ripples({
        resolution: 500,
        dropRadius: 20, //px
        perturbance: 0.0,

    });

    // 列表跳转
    let topTitle = document.querySelector('.p2 .skeleton>.right>.top');
    let lis = document.querySelectorAll('.p2 .skeleton>.right>ul>li');

    topTitle.addEventListener('click', () => {
        PageTo('detail.html');
    });

    lis.forEach(item => {
        item.addEventListener('click', () => {
            PageTo('detail.html');
        })
    });

    // 跳转页
    function PageTo(page) {
        window.location.href = page;
    }

    // p2图文列表区域切换
    let p2btns = document.querySelectorAll('.p2 .btnsMore .btns .grid');
    let p2areas = document.querySelectorAll('.p2 .skeleton');
    p2btns.forEach((item, index) => {
        item.addEventListener('click', () => {
            p2btns.forEach(item => {
                item.classList.remove('on');
            });
            p2areas.forEach(item => {
                item.classList.add('displayNone');
            });
            item.classList.add('on');
            p2areas[index].classList.remove('displayNone');
        })
    });

    // p5列表区域切换
    let p5btns = document.querySelectorAll('.p5 .btnsMore .btns .grid');
    let p5areas = document.querySelectorAll('.p5 .btnsarea');
    p5btns.forEach((item, index) => {
        item.addEventListener('click', () => {
            p5btns.forEach(item => {
                item.classList.remove('on');
            });
            p5areas.forEach(item => {
                item.classList.add('displayNone');
            });
            item.classList.add('on');
            p5areas[index].classList.remove('displayNone');
        })
    });
});