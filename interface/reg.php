<?php
    // 接口
    // 提供数据和查询数据

    // 登录
    // 1. 连接数据库
    // 2. 接收前端传来的账号密码
    // 3. 在数据中查找 匹配的账号密码
    //    如果找到 表示 登录成功
    //    如果没有找到  提示 用户名或密码错误  跳转页面到 登录页

    include('./conn.php');

    $phone = $_REQUEST['phone'];
    $password = $_REQUEST['password'];
    $password2 = $_REQUEST['password2'];
    
    // sql语句 查询
    $sql = "select * from hwid where phone='$phone' and password='$password' and password2 ='$password2";

    // 执行sql语句
    $res = $mysqli->query($sql);

    if($res->num_rows>0){
        $row = $res->fetch_assoc(); // 从结果集获取一条数据
        // php中 添加cookie  setcookie(键,值,生存期,路径)
        // php 获得当前时间 time()
        setcookie('phone',$row['phone'],time()+3600*24*7,'/');
        setcookie('isLogin','true',time()+3600*24*7,'/');


        echo '<script>alert("登录成功");</script>';
        echo '<script>location.href="../../HUAWEISHOP/src/html/index1.html";</script>';
    }else{

        echo '<script>alert("用户名或密码不正确.");</script>';
        echo '<script>location.href="../../HUAWEISHOP/src/html/register.html";</script>';
    }

    $mysqli->close();
?>