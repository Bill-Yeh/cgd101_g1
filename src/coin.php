<?php
session_start();
try{
	//=====連接資料庫=====//
    $dbname = "tibamefe_cgd101g1";
	$user = "root"; //帳號
	$password = "fsrs90115"; //密碼
	$dsn = "mysql:host=localhost;port=3306;dbname=$dbname;charse=utf8";
	$options = [PDO::ATTR_CASE=>PDO::CASE_NATURAL, PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION];
	$pdo = new PDO($dsn, $user, $password, $options);

    echo $_SESSION["coin"];

}catch(PDOException $e){
	echo "錯誤訊息 : ", $e->getMessage(), "<br>";
}
?>