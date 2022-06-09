<?php
session_start();
if(isset($_SESSION["account"]) == true){ //已登入
	$result = ["member_id"=>$_SESSION["member_id"], "account"=>$_SESSION["account"], "password"=>$_SESSION["password"], "member_name"=>$_SESSION["member_name"]];
	echo json_encode($result);
}else{
	echo "{}";
}
?>