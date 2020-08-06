<?php
    include('./conn.php');

    // $_GET[]  $_POST[]  $_REQUEST[] 都是接收表单数据的

    // file_get_contents('php://input')    // 用于接收post数据

    $data = file_get_contents('php://input');

    $obj = json_decode($data);  // 将前端发送过来的 json字符串转成php能识别的数据类型

    $phone = $obj->phone;

    $sql = "select * from hwid where phone='$phone'";

    $res = $mysqli->query($sql);

    if($res->num_rows>0){
        echo '{"status":200,"msg":"该手机已注册","has":true,"phone":"'.$phone.'"}';
    }else{
        echo '{"status":200,"msg":"该手机未注册","has":false,"phone":"'.$phone.'"}';
    }
   
?>