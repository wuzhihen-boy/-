<?php
  include('./conn.php');

  $username = $_REQUEST['phone'];
  $password = $_REQUEST['password'];

  $sql = "select * from hwid where phone = '$username' and password = '$password'";
//   echo $sql;

  $res = $mysqli->query($sql);
//   var_dump($res)
//   die;
  $info = $res->fetch_assoc();

  if($res->num_rows>0){
    echo json_encode($info);
  }else{
    echo json_encode(' ');
  }

  $mysqli->close();
?>