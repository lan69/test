<?php
// 接收前端传递来的参数
// 解决中文乱码
header('content-type:text/html;charset=utf-8;');
// 获取前端传递的参数
$uname = $_POST['username'];
$upass = $_POST['password'];
//去数据库比对
// lzd 数据库
$link = mysqli_connect('127.0.0.1','root','root','test');
//执行sql语句
// test存储数据的表
$sql = "SELECT * FROM `users` WHERE `name`='$uname' AND `password`='$upass'";
$res = mysqli_query($link, $sql);
print_r($res);
//解析结果
$row = mysqli_fetch_assoc($res);
print_r($row);
//断开连接
mysqli_close($link);
//根据数据库操作的结果进行操作

if($row) {
    // header('location: ./car.html');
    header('location: ./home.html');
    echo '登录成功';
    setcookie('username',$uname,time()+7*24*3600);
} else {
    echo '用户名或密码错误';
}





?>