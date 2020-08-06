let baseUrl = "http://localhost/HUAWEISHOP";
define(['jquery', 'cookie'], function($, cookie) {
    return {
        render: function() {
            let shop = cookie.get('shop'); //   获取cookie数据
            console.log(shop)
            if (shop) {
                shop = JSON.parse(shop);

                let idlist = shop.map(elm => elm.id).join();
                $.ajax({
                    type: "get",
                    url: `${baseUrl}/interface/shop.php`,
                    data: {
                        idlist: idlist
                    },
                    dataType: "json",
                    success: function(res) {
                        // console.log(res);
                        let tempstr = '';
                        let tempstr2 = '';
                        let ss = 0;
                        let ss2 = 0
                        res.forEach(elm => {

                            // console.log(shop)
                            // cookie中获取 于当前从数据库中遍历出的相同元素
                            let arr = shop.filter(val => val.id == elm.id);

                            // console.log(arr);
                            let nn2 = (ss2 += parseInt(arr[0].num));
                            let nn = (ss += (elm.price * arr[0].num));

                            tempstr += `<div class="sc-pro">
                            <div>
                                <div class="sc-pro-list clearfix" data-id="${elm.id}">
                                    <label>
                                        <input class="vam  left1" type="checkbox" checked="checked" name="checkboxBtn">
                                    </label>
                                    <div class="sc-pro-area">
                                        <div class="sc-pro-main clearfix">
                                            <a href="javascipt:;" target="_blank" class="p-img">
                                                <img src="${elm.img}">
                                            </a>
                                         
                                            <ul>
                                                <li>
                                                    <a href="javascipt:;" class="p-name">
                                                        ${elm.title}
                                                    </a>
                                                    <p class="p-info">零度白 5G全网通 6GB+128GB 官方标配</p>
                                                    <div class="p-label">
                                                        <span>分期免息</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="p-price">
                                                        <span>¥&nbsp;${elm.price}</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="p-stock">
                                                        <div class="p-stock-area">
                                                            <input type="number" class="p-stock-text" value="${arr[0].num}">
                                                            <p class="p-stock-btn">
                                                                <a href="javascipt:;" class="disab" id="disab">-</a>
                                                                <a href="javascipt:;" class="zengjia">+</a>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="p-price-total">
                                                    ¥&nbsp;${elm.price*arr[0].num}
                                                </li>
                                                <li>
                                                    <a href="javascipt:;" seed="cart-item-del" class="p-del">删除</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>  
                                </div>
                            </div>
                       </div>`;

                            tempstr2 = ` <div class="sc-total-tool layout clearfix ">
                       <div class="sc-total-control">
                           <label>
                               <input class="vam left1 quanxuan1" type="checkbox" checked="checked"> 全选
                           </label>
                           <a href="javascipt:;">删除</a>
                       </div>
                       <div class="sc-total-btn ">
                           <a href="javascipt:;">立即结算</a>
                       </div>
                       <div class="sc-total-price">
                           <p>
                               <label>总计：</label>
                               <span class='zongji'>¥&nbsp;${nn.toFixed(2)}</span>
                               <em><b>不含运费</b></em>
                           </p>
                           <div class="total-choose">
                               已选择
                               <em>${nn2}</em>
                               件商品，优惠：
                               <span>¥&nbsp;0.00</span>
                           </div>
                       </div>
                   </div>`;
                            $('#header-cart-total').html(nn2);

                        });
                        // console.log(tempstr)
                        $('#cart-form').append(tempstr);
                        $('#cart-form').append(tempstr2);

                        $('#cart-form').on('click', '.zengjia', function(e) {
                            $(this).parent().prev().val($(this).parent().prev().val() - 0 + 1)
                            $('.disab').removeClass('disabled')
                                // console.log($('.p-price span').html().slice(7))
                            $(this).parents().filter('.sc-pro-list').find('.p-price-total').html(`¥&nbsp;${$(this).parent().prev().val() * $(this).parents().filter('.sc-pro-list').find('.p-price span').html().slice(7)}`)

                            let nn = 0;
                            $('.p-price-total').each(function() {
                                let n = parseInt($(this).text().trim().slice(2));
                                nn += n;
                                $('.zongji').html(`¥&nbsp;${nn + '.00'}`)
                            })

                            let nn2 = 0;
                            $('.p-stock-text').each(function() {
                                // console.log($(this).val())
                                nn2 += parseInt($(this).val())
                                $('.total-choose em').html(nn2)
                            })

                            shop.forEach(elm => {
                                console.log(elm.id)
                                if (elm.id == $(this).parents().filter('.sc-pro-list').attr('data-id')) {
                                    elm.num = $(this).parents().filter('.p-stock-area').find('.p-stock-text').val()
                                }
                            })
                            cookie.set('shop', JSON.stringify(shop), 1)
                        });
                        $('#cart-form').on('click', '.disab', function(e) {
                            if ($(this).parent().prev().val() > 1) {
                                $(this).parent().prev().val($(this).parent().prev().val() - 0 - 1);
                                $('.disab').removeClass('disabled')
                            } else if ($(this).parent().prev().val() == 1) {
                                $(this).addClass('disabled');
                            }
                            $(this).parents().filter('.sc-pro-list').find('.p-price-total').html(`¥&nbsp;${$(this).parent().prev().val() * $(this).parents().filter('.sc-pro-list').find('.p-price span').html().slice(7)}`);

                            let nn = 0;
                            $('.p-price-total').each(function() {
                                let n = parseInt($(this).text().trim().slice(2));
                                nn += n;
                                console.log(n)
                                $('.zongji').html(`¥&nbsp;${nn + '.00'}`)
                            })

                            let nn2 = 0;
                            $('.p-stock-text').each(function() {
                                console.log($(this).val())
                                nn2 += parseInt($(this).val())
                                $('.total-choose em').html(nn2)
                            })

                            shop.forEach(elm => {
                                console.log(elm.id)
                                if (elm.id == $(this).parents().filter('.sc-pro-list').attr('data-id')) {
                                    elm.num = $(this).parents().filter('.p-stock-area').find('.p-stock-text').val()
                                }
                            })
                            cookie.set('shop', JSON.stringify(shop), 1)
                        });
                        $('.p-del').on('click', function() {
                            let shop = JSON.parse(cookie.get('shop'));
                            let temp = {};
                            shop.forEach((elm, index) => {
                                if (elm.id == $(this).parents().filter('.sc-pro-list').attr('data-id')) {
                                    temp.i = index
                                }
                            })
                            shop.splice(temp.i, 1)
                            cookie.set('shop', JSON.stringify(shop), 1)
                            $(this).parents().filter('.sc-pro-list').remove()
                            location.reload();
                        });

                        function setItemCheckBox(flag) {
                            $(":checkbox[name=checkboxBtn]").prop("checked", flag);
                        }
                        $(function() {
                            //点击全选
                            $(".quanxuan1").click(function() {
                                //1.获取全选的状态
                                var flag = this.checked; //获取全选的状态
                                if (flag) {
                                    $(this).prop("checked", true);
                                    let nn = 0;
                                    $('.p-price-total').each(function() {
                                        let n = parseInt($(this).text().trim().slice(2));
                                        nn += n;
                                        console.log(n)
                                        $('.zongji').html(`¥&nbsp;${nn + '.00'}`)
                                    })
                                    let nn2 = 0;
                                    $('.p-stock-text').each(function() {
                                        console.log($(this).val())
                                        nn2 += parseInt($(this).val())
                                        $('.total-choose em').html(nn2)
                                    })
                                } else {
                                    $(this).prop("checked", false);
                                    $('.zongji').html(0 + '.00')
                                    $('.total-choose em').html(0)
                                }
                                setItemCheckBox(flag);
                            });
                            //给所有复选框添加事件
                            let a1 = parseInt($('.zongji').html().slice(7));
                            let b1 = $('.total-choose em').html()
                            $(":checkbox[name=checkboxBtn]").click(function() {
                                var flagV = this.checked;
                                //   console.log(this)
                                if (flagV) {
                                    $(this).prop("checked", true);
                                    let a2 = parseInt($(this).parents().filter('.sc-pro-list').find('.p-price-total').html().trim().slice(7))
                                    $('.zongji').html((a1 += a2).toFixed(2))
                                    let b2 = parseInt($(this).parents().filter('.sc-pro-list').find('.p-stock-text').val())
                                    $('.total-choose em').html(b1 += b2)
                                } else {
                                    $(this).prop("checked", false);
                                    let a2 = parseInt($(this).parents().filter('.sc-pro-list').find('.p-price-total').html().trim().slice(7))
                                    $('.zongji').html((a1 -= a2).toFixed(2))
                                    let b2 = parseInt($(this).parents().filter('.sc-pro-list').find('.p-stock-text').val())
                                    $('.total-choose em').html(b1 -= b2)
                                }
                                //获取所有复选框的个数
                                var len = $(":checkbox[name=checkboxBtn]").length;
                                //获取所有被选中的复选框的个数
                                var checked_len = $(":checkbox[name=checkboxBtn]:checked").length;
                                if (len == checked_len) {
                                    //alert("全选中了");
                                    $(".quanxuan1").prop("checked", true);
                                } else if (checked_len == 0) {
                                    $(".quanxuan1").prop("checked", false);
                                } else {
                                    $(".quanxuan1").prop("checked", false);
                                }
                            });
                        });
                    }
                });
            }
        }
    }
});