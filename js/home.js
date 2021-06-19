// Swiper引入的js代码

window.onload = function() {
    // 大轮播
    var mySwiper = new Swiper('.swiper-container', {
        loop: true,
        autoplay: true,
        pauseOnMouseEnter: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })

    // 回到顶部按键
    $(window).scroll(() => {
        // 通过判断卷去的高度来决定
        if ($(window).scrollTop() >= 300) {
            // 让回到顶部按钮显示
            $('.runtop').fadeIn()
        } else {
            // 让回到顶部按钮隐藏
            $('.runtop').fadeOut()
        }
    })
    $(".runtop").click(function() {
            var timer = setInterval(function() {
                // 定时器中获取 当前滚动的距离
                var t = $(window).scrollTop();
                t -= 100;
                if (t <= 0) {
                    clearInterval(timer)
                }
                // 将滚动距离依次减少赋值
                $(window).scrollTop(t)
            }, 50)
        })
        // 滚动条滚动触发顶部显示隐藏效果
    $(window).scroll(() => {
            // 通过判断卷去的高度来决定

            if ($(window).scrollTop() >= 100) {
                $('.header-content').css('display', 'none')
                $('.headerbox').css('background', 'black').fadeIn()
                $('.logo2').css('display', 'block')


            } else {
                $('.header-content').css('display', 'block')

            }
            if ($(window).scrollTop() == 0) {
                // $('.headerbox').css('background', 'none').fadeIn()
                $('.logo2').css('display', 'none')
                $('.headerbox').css('background', 'url(img/1/ia_100000000760.png)')

            }
        })
        // 爆款里面三个可点击选项
    $('.hot-three ul>li').click(function() {
            $('.hot-three span').stop().animate({
                left: $(this).index() * 130
            })
        })
        // 模板二的轮播
    var swiper1 = new Swiper('#swiper1');
    var swiper2 = new Swiper('#swiper2');
    var swiper3 = new Swiper('#swiper3');
    var swiper4 = new Swiper('#swiper4');
    var swiper5 = new Swiper('#swiper5');
    var swiper6 = new Swiper('#swiper6');
    var swiper7 = new Swiper('#swiper7');
    var swiper8 = new Swiper('#swiper8');
    var swiper9 = new Swiper('#swiper9');
    var swiper10 = new Swiper('#swiper10');
    var mySwiper = new Swiper('.swiper-container2', {
        autoplay: true,
        loop: true,
        slidesPerView: 3,
        spaceBetween: 30,
        pauseOnMouseEnter: true,
        freeMode: true,
        pagination: {
            el: '.swiper-pagination1',
            clickable: true,
        },
    });
    // 明星系列滑动导航
    var swiper = new Swiper('.swiper-container3', {
        slidesPerView: 4,
        direction: getDirection(),
        navigation: {
            nextEl: '.swiper-button-next3',
            prevEl: '.swiper-button-prev3',
        },
        on: {
            resize: function() {
                swiper.changeDirection(getDirection());
            }
        }
    });

    function getDirection() {
        var windowWidth = window.innerWidth;
        var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

        return direction;
    }
    // 官网服务轮播
    var swiper = new Swiper('.swiper-container4', {
        effect: 'coverflow',
        slidesPerView: 3,
        centeredSlides: true,
        loop: true,
        coverflowEffect: {
            rotate: 30,
            stretch: 10,
            depth: 60,
            modifier: 2,
            slideShadows: true
        },
    });
    // 二级菜单
    $(function() {
        $('.nav-item>li').hover(function() {
            // 鼠标移入
            $(this).find('ul').stop().slideDown(300)
        }, function() {
            // 鼠标移出
            $(this).find('ul').stop().slideUp(300)
        })
    })
}