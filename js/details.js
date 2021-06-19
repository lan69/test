window.onload = function() {
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
                $('.logo2').css('display', 'none')
                $('.headerbox').css('background', 'black')

            }
        })
        // 轮播
    var galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 10,
        slidesPerView: 3,
        loop: true,
        freeMode: true,
        loopedSlides: 5, //looped slides should be the same
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
    });
    var galleryTop = new Swiper('.gallery-top', {
        spaceBetween: 10,
        loop: true,
        loopedSlides: 5, //looped slides should be the same
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        thumbs: {
            swiper: galleryThumbs,
        },
    });
    // 一个选项框 115ml
    function select() {
        $(document).click(function() {
            $(".select_module_con ul").slideUp();
        })
        var module = $(".select_result");
        module.click(function(e) {
            e.stopPropagation();
            var ul = $(this).next();
            ul.stop().slideToggle();
            ul.children().click(function(e) {
                e.stopPropagation();
                $(this).parent().prev().children("span").text($(this).text());
                ul.stop().slideUp();
            })
        })
    }
    $(function() {
            select();
        })
        // 加减数量
    var oNum1 = document.querySelector('.main-right-mun1');
    var oTxt = document.querySelector('#main-right-inp');
    var oNum2 = document.querySelector('.main-right-mun2');

    oNum2.onclick = function() {
        oTxt.value++;
    }
    oNum1.onclick = function() {
            if (oTxt.value > 1) {
                oTxt.value--;
            } else {
                oTxt.value = 1;
            }
        }
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
        // 放大镜效果
        // var box = document.querySelector('.gallery-top');
        // var small = document.querySelector('.main-smallimg')
        // var mask = document.querySelector('.mask');
        // var big = document.querySelector('.main-bigimg');
        // var bigImg = document.querySelector('.bigImg');

    // small.onmouseenter = function() {
    //     mask.style.display = 'block';
    //     big.style.display = 'block';
    // };
    // // 滑出事件
    // small.onmouseleave = function() {
    //     mask.style.display = 'none';
    //     big.style.display = 'none';
    // };
    // // 移动事件
    // small.onmousemove = function(e) {
    //     e = e || window.event;
    //     var x = e.pageX;
    //     var y = e.pageY;
    //     // console.log(x, y);
    //     var left = x - mask.clientWidth / 2;
    //     var top = y - mask.clientHeight / 2;
    //     // 边界判断的位置
    //     if (left <= 0) {
    //         left = 0;
    //     }
    //     if (top <= 0) {
    //         top = 0;
    //     }
    //     if (left > box.clientWidth - mask.clientWidth) {
    //         left = box.clientWidth - mask.clientWidth
    //     }
    //     if (top > box.clientHeight - mask.clientHeight) {
    //         top = box.clientHeight - mask.clientHeight
    //     }
    //     mask.style.left = left + 'px';
    //     mask.style.top = top + 'px';

    //     // 计算大盒子偏移的距离
    //     /*
    //         left               bigLeft?????
    //     ---------------  =   ------------
    //         small宽度           bigImg宽度

    //     */
    //     var bigLeft = -left * bigImg.offsetWidth / small.offsetWidth;
    //     var bigTop = -top * bigImg.offsetHeight / small.offsetHeight;

    //     bigImg.style.left = bigLeft + 'px';
    //     bigImg.style.top = bigTop + 'px';
    // }

}