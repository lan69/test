   // 判断用户是否登录--判断cookie中会否存在username的值
   $(function() {
       var username = getCookie('username');
       var login = document.querySelector('.aaaa');
       if (username) {
           var str = `<li><a class="vip">欢迎VIP<span>${username}</span></a></li>
<li><a href="javascript:;" class="logout" style="color: #fff;">退出</a></li>`;

           login.innerHTML = str;
           // 退出功能
           var logout = document.querySelector('.logout');
           logout.onclick = function() {
               layer.confirm('你确定要退出吗？', {
                       btn: ['确定', '取消']
                   },
                   function() {
                       // 删除cookie
                       delCookie('username');
                       login.innerHTML = `<li><a href="index.html">登陆</a></li>
    <li><a href="register.html">注册</a></li>`;
                       layer.msg('退出成功', { icon: 1, time: 500 })
                   },
                   function() {
                       layer.msg('已取消', { icon: 1, time: 500 })
                       return false;
                   }
               )
           }
       }
   })

   console.log(111);
   // 根据url获取数据id的值  
   var urlParams = location.search.match(/id=(\d+)/);
   // console.log(urlParams)
   if (!urlParams) {
       var paramindex = layer.msg('非法访问！', {
           icon: 2,
       })
       setTimeout(() => {
           layer.close(paramindex)
           location.href = './list.html';
           return false;
       }, 800)
   }
   // 拿到商品id
   var id = urlParams[1];
   var loadindex = layer.load(1, {
       shade: [0.5, '#333']
   })
   async function temp() {
       // 查询详情数据
       var res = await $.ajax({
           url: './detail.php',
           data: { id },
           dataType: 'json'
       })
       var { data } = res;
       console.log(data);
       $('.tab ol li').eq(0).text(data.introduce)
       $('.description h4').text(data.name)
       $('.description .price .souceprice span').text(data.price)
           // 将商品的库存数量,通过属性添加到 标签中
       $('.addCart .number').attr('data-stock', data.stock)
       var imgs = data.imgpath.split('==========')
       for (var i = 0; i < imgs.length; i++) {
           $('.enlarge .small ul').append($(`<li><img src="${imgs[i]}"></li>`))
       }
       $('.enlarge .middle>img').attr('src', imgs[0])
       $('.enlarge .middle .big>img').attr('src', imgs[0])
       enlarge()
       layer.close(loadindex)
   }
   temp()

   // 数量 加和减
   $('.add').click(function() {
       var num = $(this).prev().val() - 0;
       $(this).next().prop('disabled', false)
       num++;
       // console.log(111)
       // console.log($(this).parent().attr('data-stock'))
       if (num >= $(this).parent().attr('data-stock')) {
           // console.log($(this).parent().attr('data-stock'))
           num = $(this).parent().attr('data-stock')
           $(this).prop('disabled', true)
       }
       $(this).prev().val(num)
   })
   $('.reduce').click(function() {
       var num = $(this).prev().prev().val() - 0;
       $(this).prev().prop('disabled', false)
       num--;
       if (num <= 1) {
           num = 1
           $(this).prop('disabled', true)
       }
       $(this).prev().prev().val(num)
   })

   // 加入购物车
   console.log(111);
   $('.addCart .addBtn').click(function() {
           // 判断是否登录
           var username = getCookie('username')
           if (!username) {
               var tipindex = layer.msg('请先登录！')
               setTimeout(function() {
                   layer.close(tipindex)
                   localStorage.setItem('url', location.href)
                   location.href = 'index.html';
               }, 2000)
               return false;
           }
           // 判断本地存储中是否有数据
           var data = localStorage.getItem('data');
           if (data) {
               data = JSON.parse(data);
               // 判断数据中是否有当前这条数据
               var obj = data.filter(v => v.username === username && v.goodsid === id)
               if (obj.length) {
                   // 如果本地存储中有当前这个商品的数据，就让数量增加
                   obj[0].number = obj[0].number + ($('.add').prev().val() - 0)
               } else {
                   // 如果没有当前这个商品的数据，就把当前这个商品的数据添加进去
                   data.push({
                       username,
                       goodsid: id,
                       number: $('.add').prev().val() - 0
                   })
               }
               localStorage.setItem('data', JSON.stringify(data))
           } else {
               // 没有数据，就将当前这一条数据存储起来
               localStorage.setItem('data', JSON.stringify([{
                   username,
                   goodsid: id,
                   number: $('.add').prev().val() - 0
               }]));
           }
           layer.msg('加入购物车成功', {
               icon: 1,
               time: 1000
           })
       })
       // 顶部导航滚动条事件
   window.onscroll = function() {
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