<?php
session_start();
try{
	//=====連接資料庫=====//
    //自己用的
    // $dbname = "tibamefe_cgd101g1";
	// $user = "root";
	// $password = "";

	// $dsn = "mysql:host=localhost;port=3306;dbname=$dbname;charse=utf8";
	// $options = [PDO::ATTR_CASE=>PDO::CASE_NATURAL, PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION];

	// $pdo = new PDO($dsn, $user, $password, $options);
    
    //上線之後用的
    require_once("connect_cgd101g1.php");

	
if(isset($_SESSION["coin"])){
 echo $_SESSION["coin"];


    
}else{
    echo "no login";
}
   

}catch(PDOException $e){
	echo "錯誤訊息 : ", $e->getMessage(), "<br>";
}
?>