let baseUrl = "http://localhost/HUAWEISHOP";

define(['jquery', 'cookie'], function($, cookie) {
    return {
        render: function(callback) {
            let id = location.search.split("=")[1];
            // console.log(id)
            $.ajax({
                type: "get",
                url: `${baseUrl}/interface/getitem.php`,
                data: {
                    id: id
                },
                dataType: "json",
                success: function(res) {
                    // console.log(res.pic)
                    // let pic = JSON.parse(res.pic);

                    let temp = `
                    <div class="fangdaj">
            <div class="small">
                <img src="${res.img}" >
                <div class="move"></div>
            </div>
            
            <div class="big" style="z-index:9999">
                <img src="https://res.vmallres.com/pimages/&#x2f;product&#x2f;6901443381340&#x2f;428_428_0927F13E5805FD0FBD065F528D4099ECC6C81DDA5B9E07FAmp.png" class="bigpic">
            </div>
            <div class="foot-a">
                <div class="iconfont icon-zuo icon-yuan"></div>
                <div class="footpic">
                    <img src="https://res.vmallres.com/pimages/&#x2f;product&#x2f;6901443381340&#x2f;428_428_0927F13E5805FD0FBD065F528D4099ECC6C81DDA5B9E07FAmp.png" class="pic-red pic-white">
                    <img src="https://res.vmallres.com/pimages//product/6901443381340/group//800_800_64B94D0DE111F91C306C22DA9C73E9C773EF3AFC87F0D292.png" class="pic-white">
                    <img src="https://res.vmallres.com/pimages//product/6901443381340/group//800_800_0DB20C4BFCDED62363E43DD10A6D102C8B8484DC61183EA9.png" class="pic-white">
                    <img src="https://res.vmallres.com/pimages//product/6901443381340/group//800_800_E4EB4C747ECD0FC16C975DC9A326A260B0DC2182907AB9AB.png" class="pic-white">
                    <img src="https://res.vmallres.com/pimages//product/6901443381340/group//800_800_356AD919B8019D6EA045829EBF407473C22DA50C86E85441.png" class="pic-white">
                    <img src="https://res.vmallres.com/pimages//product/6901443381340/group//800_800_F8DBEC1C1CB7EE433BCA0A4123A299010D821146141BBC68.png" alt="" class="pic-white">
                    <img src="https://res.vmallres.com/pimages//product/6901443381340/group//800_800_1C735E935BAD0D6076B9475EABBC9F60CB9B733F125553A9.png" alt="" class="pic-white">
                </div>
                <div class="iconfont icon-zuo-copy icon-yuan"></div>
            </div>
            </div>
            <div class="product-property clearfix relative" style="min-height: 750px; height: auto;width: 730px;; padding-bottom: 103.6px;">
            <div class="product-property-recommand">
                <div class="product-meta">
                    <h1>${res.title}</h1>
                </div>
                <div class="product-slogan product-slogan-hide">
                    <a href="">${res.title2}</a>
                    <span>麒麟990 5G SoC芯片 5000万超感知徕卡三摄 30倍数字变焦 全网通5G手机</span>
                </div>
                <div class="product-info">
                    <div class="much">
                        <span>价&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;格</span>
                        <i><em>￥</em><span class="price-1">${res.price}.00</span></i>
                    </div>
                    <div class="hot-much">
                        <span>促&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;销</span>
                        <em class="red-much">一站式换新</em>
                        <i>APP专享，最高补贴1000元</i>
                    </div>
                    <div class="hot-much2">
                        <em class="red-much">整点赠礼</em>
                        <i>0点/10点/16点/20点下单前100名赠华为手环 4e</i>
                    </div>
                    <div class="hot-much2">
                        <em class="red-much">商品赠券</em>
                        <i>支付后赠送同程旅行900元出行大礼包</i>
                    </div>
                    <div class="hot-much2">
                        <em class="red-much">商品赠券</em>
                        <i>支付后赠送华为手机摄影课程</i>
                    </div>
                    <div class="hot-much2">
                        <em class="red-much">分期免息</em>
                        <i>银联、掌上生活、花呗、工行分期支付可享免息（免息活动适用于单款免息商品订单，含多款商品订单）</i>
                    </div>
                    <div class="hot-much2">
                        <em class="red-much">赠送积分</em>
                        <i>购买即赠商城积分，积分可抵现~</i>
                    </div>
                </div>
                <div class="product-pulldown clearfix">
                    <span>服务说明</span>
                    <a href="javascript:;" class="product-pulldown-btn">
                        浙江 > 杭州 > 西湖区<i class="iconfont icon-bottom-copy"></i>
                    </a>
                    <i><em>现货，</em>今天21:59前付款，预计7月2日(周四)送达 &nbsp; &nbsp;<span class="iconfont icon-wenhao"></span></i>
                    <h1><i class="iconfont icon-quangou"></i> 已满48元已免运费 &nbsp;&nbsp; <i class="iconfont icon-quangou"></i> 由华为商城负责发货，并提供售后服务</h1>
                </div>
                <div class="product-description product-pulldown">
                    <span>商品编码</span>
                    <i>2601010188314</i>
                </div>
                <div class="hr-5"></div>
                <div class="hr-4">
                    <div class="hr-6">选择颜色</div>
                    <ul id="hr-list1">
                        <li><a href="javascipt:;" class="hr-red"><img src="https://res.vmallres.com/pimages//product/6901443381418/40_40_8AA335126873D608DCA6E0A911876BBC964D127703282A1Cmp.png">&nbsp;亮黑色</a></li>
                        <li><a href="javascipt:;" ><img src="https://res.vmallres.com/pimages//product/6901443381418/40_40_8AA335126873D608DCA6E0A911876BBC964D127703282A1Cmp.png">&nbsp;深海蓝</a></li>
                        <li><a href="javascipt:;" ><img src="https://res.vmallres.com/pimages//product/6901443381418/40_40_8AA335126873D608DCA6E0A911876BBC964D127703282A1Cmp.png">&nbsp;晨曦金</a></li>
                        <li><a href="javascipt:;" ><img src="https://res.vmallres.com/pimages//product/6901443381418/40_40_8AA335126873D608DCA6E0A911876BBC964D127703282A1Cmp.png">&nbsp;零度白</a></li>
                        <li><a href="javascipt:;" ><img src="https://res.vmallres.com/pimages//product/6901443381418/40_40_8AA335126873D608DCA6E0A911876BBC964D127703282A1Cmp.png">&nbsp;冰霜银</a></li>
                    </ul>
                </div>
                <div class="hr-7"><label for="">选择版本</label>
                    <ul id="hr-list2">
                        <li><a href="javascipt:;" class="hr-red">5G全网通 8GB+256GB</a></li>
                        <li><a href="javascipt:;">5G全网通 16GB+128GB</a></li>
                        <li><a href="javascipt:;">5G全网通 16GB+256GB</a></li>
                    </ul>
                </div>
                <div class="hr-8"><label for="">选择套餐</label>
                    <ul>
                        <li><a href="javascipt:;" class="hr-red">官方标配</a></li>
                    </ul>
                </div>
                <div class="hr-7"><label for="">保障服务</label>
                    <ul id="hr-list3">
                        <li><a href="javascipt:;" class="hr-red">华为无忧服务&nbsp;￥699&nbsp;&nbsp;&nbsp;<span class="iconfont icon-bottom-copy icon-i"></span></a></li>
                        <li><a href="javascipt:;">碎屏险含后盖&nbsp;￥179.4&nbsp;&nbsp;<span class="iconfont icon-bottom-copy icon-i"></span></a></li>
                        <li><a href="javascipt:;">延长服务宝一年&nbsp;￥134.4&nbsp;<span class="iconfont icon-bottom-copy icon-i"></span></a></li>
                    </ul>
                </div>
                <div class="hr-7"><label for="">分期免息</label>
                    <ul id="hr-list4">
                        <li><a href="javascipt:;" class="hr-red">掌上分期生活&nbsp;￥699&nbsp;&nbsp;&nbsp;<span class="iconfont icon-bottom-copy icon-i"></span></a></li>
                        <li><a href="javascipt:;">花呗分期&nbsp;￥699&nbsp;&nbsp;&nbsp;<span class="iconfont icon-bottom-copy icon-i"></span></a></li>
                    </ul>
                </div>
                <div class="hr-9"><label for="">推荐</label>
                    <ul id="hr-list5">
                        <li><a href="javascipt:;" class="hr-red">HUAWEI P40 Pro</a></li>
                        <li><a href="javascipt:;">HUAWEI VR Glass</a></li>
                    </ul>
                </div>
                <div class="hr-7"><label for="" style="width: 80px;">已选择商品:</label><span style="height: 30px;"><i class="color-choose">亮黑色</i> / <i class="color-choose2">5G全网通 8GB+128GB</i> / <i class="color-choose3">官方标配</i></span></div>
                <div class="product-stock">
                    <input type="text" placeholder="1" value="1" class="num" min="1" id="pro-num">
                    <p class="product-stock-btn">
                        <a id="pro-quantity-plus" href="javascript:;">+</a>
                        <a id="pro-quantity-minus" href="javascript:;">-</a>
                    </p>
                    <a class="product-button01" href="javascript:;">加入购物车</a>
                    <a class="product-button02" href="javascript:;">立即下单</a>
                 </div>
              </div>
          </div>
                    `;

                    $('#procboo').append(temp);

                    callback && callback(res.id, res.price);
                }
            });
            // 详情页购物车加减

            $('#procboo').on('click', '#pro-quantity-plus', function() {
                // console.log(parseInt($('#pro-num').val())+1)
                $('#pro-num').val(parseInt($('#pro-num').val()) + 1)
            })

            $('#procboo').on('click', '#pro-quantity-minus', function() {
                if ($('#pro-num').val() > 0) {
                    $('#pro-num').val(parseInt($('#pro-num').val()) - 1)
                }
                //    $('#pro-num').val(parseInt($('#pro-num').val())-1)
            })

            $('#procboo').on('click', '#hr-list1>li>a', function() {
                $(this).addClass('hr-red').parent().siblings().children().removeClass('hr-red');
                $('.color-choose').text($(this).text())
            })

            $('#procboo').on('click', '#hr-list2>li>a', function() {
                $(this).addClass('hr-red').parent().siblings().children().removeClass('hr-red');
                $('.color-choose2').text($(this).text())
            })

            $('#procboo').on('click', '#hr-list3>li>a', function() {
                $(this).addClass('hr-red').parent().siblings().children().removeClass('hr-red');
            })
            $('#procboo').on('click', '#hr-list4>li>a', function() {
                $(this).addClass('hr-red').parent().siblings().children().removeClass('hr-red');
            })

            $('#procboo').on('click', '#hr-list5>li>a', function() {
                $(this).addClass('hr-red').parent().siblings().children().removeClass('hr-red');
                $('.color-choose3').text($(this).text())
            })
            $('#procboo').on('click', '#hr-list1>li:nth-child(1)>a', function() {
                $('.price-1').text(2999 + '.00')
            })

            $('#procboo').on('click', '#hr-list1>li:nth-child(2)>a', function() {
                $('.price-1').text(3100 + '.00')
            })
            $('#procboo').on('click', '#hr-list1>li:nth-child(3)>a', function() {
                $('.price-1').text(3200 + '.00')
            })
            $('#procboo').on('click', '#hr-list1>li:nth-child(4)>a', function() {
                $('.price-1').text(3333 + '.00')
            })
            $('#procboo').on('click', '#hr-list1>li:nth-child(5)>a', function() {
                $('.price-1').text(3500 + '.00')
            })


        },
        addItem: function(id, price, num) {
            // shop
            let shop = cookie.get('shop'); // 获取cookie中的购物车 
            // 获取是为了判断它是否存在
            // 不存在 创建
            // 存在 修改
            // console.log(shop)
            alert('成功加入购物车!');
            let product = {
                id: id,
                price: price,
                num: num
            }

            if (shop) { // 存在
                shop = JSON.parse(shop); // 将字符串转成数组
                // 数组中已经存在了商品的id
                // 只修改num只 而不是将商品放入数组
                if (shop.some(elm => elm.id == id)) {
                    shop.forEach(elm => {
                        elm.id == id ? elm.num = num : null;
                    });
                } else {
                    shop.push(product);
                }
            } else {
                shop = []; // 不存在新建数组
                shop.push(product); // 放入商品
            }

            cookie.set('shop', JSON.stringify(shop), 1);
        },

        wang: function() {
            //放大镜滚动事件

            // $('body').on('mousewheel',function(){
            // console.log($(window).scrollTop() + 'px')
            let top = $(window).scrollTop();
            // if($(window).scrollTop() > 110 || $(window).scrollTop() <400){
            $('.fangdaj').css(
                "position", "sticky"
            )
            $('.fangdaj').css(
                    "top", 0
                )
                // }
                // })
        }
    }
});