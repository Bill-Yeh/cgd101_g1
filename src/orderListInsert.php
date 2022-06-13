<?php 
try{
	//==========
    $dbname = "tibamefe_cgd101g1";
	$user = "root";
	$password = "Sarah34302521";

	$dsn = "mysql:host=localhost;port=3306;dbname=$dbname;charse=utf8";
	$options = [PDO::ATTR_CASE=>PDO::CASE_NATURAL, PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION];

	$pdo = new PDO($dsn, $user, $password, $options);
    
    // require_once("./connect_cgd101g1.php");


    //=========

	$sql = "SELECT * FROM `tibamefe_cgd101g1`.`item_record` join `tibamefe_cgd101g1`.`item` 
    on `tibamefe_cgd101g1`.`item_record`.`item_id`=`tibamefe_cgd101g1`.`item`.`item_id` WHERE `member_id` = 1"; 
    
    //準備好sql指令
	$products = $pdo->query($sql);//將sql指令送到mysql去執行, 回傳的是pdoStatement
	$prodRows = $products->fetchAll(PDO::FETCH_ASSOC);
	echo json_encode($prodRows);
}catch(PDOException $e){
	//$msg =  "系統暫時無法提供服務, 請聯絡系統維護人員<br>";
	echo "錯誤訊息 : ", $e->getMessage(), "<br>";
	echo "錯誤行號 : ", $e->getLine(), "<br>";
	//echo [$msg];
}
?>