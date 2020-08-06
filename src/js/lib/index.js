let baseUrl = "http://localhost/HUAWEISHOP"; // 基础路径 必须是绝对路径

define(['jquery', 'cookie'], function($, cookie) {
    return {
        render: function() {
            // let shop = cookie.get('shop'); //   获取cookie数据
            // shop = JSON.parse(shop);
            // // console.log(shop)
            // let num1=0;
            // for(let i=0;i<shop.length;i++){
            //     // console.log(shop[i])
            //     num1 +=parseInt(shop[i].num)
            // }
            // $('#header-cart-total').html(num1);
            $.ajax({
                type: "get",
                url: `${baseUrl}/interface/getall.php`,
                dataType: "json",
                success: function(res) {
                    // console.log(res);
                    let temp = '';
                    res.forEach(elm => {
                        // console.log(elm.pic);
                        // let pic = JSON.parse(elm.pic);
                        // console.log(pic);
                        temp += `<li class="grid-items ">
                        <a class="thumb" href="${baseUrl}/src/html/product.html?id=${elm.id}">
                            <p class="grid-img">
                                <img src="${elm.img}" />
                            </p>
                            <div class="grid-title">${elm.title}</div>
                            <p class="grid-desc">${elm.title2}</p>
                            <p class="grid-price">&yen;${elm.price}</p>
                            <p class="grid-tips">
                                <em class="thumb"><span class="color01" style="background-color:#68BEFF">&#x65b0;&#x54c1;</span></em>
                            </p>
                        </a>
                    </li>`
                    });

                    $('.grid-list').html(temp);
                }
            });
            // 主页爬楼梯         
            $('body').on('mousewheel', function() {
                console.log($(window).scrollTop())
                    // console.log($(window).scrollTop()==400)
                if ($(window).scrollTop() >= 800) {
                    $('.palt').fadeIn(600)
                    $('.palt').addClass('show')
                } else {
                    $('.palt').fadeOut(600)
                    $('.palt').removeClass('show')
                }
            })

            console.log($("#" + $(this).attr('title')))
            $('.palt>li>a').on('click', function() {
                let top = $("#" + $(this).attr('title')).offset().top;
                console.log(top)
                $('html,body').animate({
                    scrollTop: top
                }, 600);
            })

            $(window).on('scroll', function() {
                // 当前文档距离顶部的高度
                let top = $(document).scrollTop();
                let i = 0;
                if (top >= 3254) {
                    i = 4;
                } else if (top >= 2880) {
                    i = 3;
                } else if (top >= 2506) {
                    i = 2;
                } else if (top >= 2032) {
                    i = 1;
                }

                $('.palt>li>a').removeClass('active');
                $('.palt>li>a:eq(' + i + ')').addClass('active');
            });
        }
    }
});