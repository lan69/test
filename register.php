<?php
// 接收前端传递来的参数
// 解决中文乱码
header('content-type:text/html;charset=utf-8;');
// 获取前端传递的参数
$uname = $_POST['username'];
$upass = $_POST['password'];
//去数据库比对
// lzd 数据库
$link = mysqli_connect('localhost','root','root','test');
//执行sql语句
// test存储数据的表
$sql = "INSERT INTO `users` (name, password) VALUES ('$uname', '$upass')";

$res = mysqli_query($link, $sql);
print_r($res);
//解析结果
// $row = mysqli_fetch_assoc($res);
//断开连接
mysqli_close($link);
//根据数据库操作的结果进行操作
if($res) {
    // header('location: ./home.html');
    
    echo '注册成功';
    header('location: ./index.html');
} else {
    echo '用户名或密码错误';
}





?>