let baseUrl = 'http://localhost/HUAWEISHOP'

define(['jquery', 'cookie'], function($, cookie){
    return {
        render:function(){
            $('#btnLogin').on('click', function () {
                $.ajax({
                  type: "post",
                  url: `${baseUrl}/interface/login-check.php`,
                  data: {
                    phone: $('#phone').val(),
                    password: $('#password').val()
                  },
                  dataType: "json",
                  success: function (res) {
                      console.log(res)
                    if (res.length) {
                      alert('用户名或密码错误，请重新输入')
                      location.href = `./register.html`

                    } else {
                      let loginInfo = {
                        loginStatus: true,
                        username: res.phone
                      }
                      cookie.set('loginInfo', JSON.stringify(loginInfo), 1)
                      location.href = `${baseUrl}/src/html/index1.html`
                    }
                  }
                });
              })
        }
    }
});