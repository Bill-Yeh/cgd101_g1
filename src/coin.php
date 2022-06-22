<?php
session_start();
try{
	//=====連接資料庫=====//
    // $dbname = "tibamefe_cgd101g1";
	// $user = "root"; 
	// $password = "Sarah34302521"
	// $dsn = "mysql:host=localhost;port=3306;dbname=$dbname;charse=utf8";
	// $options = [PDO::ATTR_CASE=>PDO::CASE_NATURAL, PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION];
	// $pdo = new PDO($dsn, $user, $password, $options);
	 require_once("connect_cgd101g1.php");
if(isset($_SESSION["coin"])){
	$sql = "select coin from member where member_id=:member_id";
	$coin = $pdo->prepare($sql);
	$coin->bindValue(":member_id", $_SESSION["member_id"]);
	$coin->execute();
	$coinRow = $coin->fetch(PDO::FETCH_ASSOC);
 echo json_encode($coinRow);
}else{
    echo "no login";
}
   

}catch(PDOException $e){
	echo "錯誤訊息 : ", $e->getMessage(), "<br>";
}
?>