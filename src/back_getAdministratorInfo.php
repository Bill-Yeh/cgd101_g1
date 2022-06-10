<?php
session_start();
if(isset($_SESSION["backstage_account"]) == true){ //已登入
	$result = ["backstage_id"=>$_SESSION["backstage_id"], "backstage_account"=>$_SESSION["backstage_account"], "backstage_password"=>$_SESSION["backstage_password"], "backstage_name"=>$_SESSION["backstage_name"]];
	echo json_encode($result);
}else{
	echo "{}";
}
?>