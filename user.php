<?php
header('content-type:text/html;charset="utf-8"');
error_reporting(0);
$data = $_GET['data'];
$user = array(
	array('user'=>'username','password'=>'123456','email'=>'1065656359@qq.com','number'=>'15033144993')


);
echo json_encode($user);
