<?php 

try{
	//=====連接資料庫=====//
    require_once("connect_cgd101g1.php");

	$sql = "SELECT * FROM `q_data` WHERE lesson_id =:test;";  
	$get_qdata = $pdo->prepare($sql);
	
	$get_qdata->bindValue(":test", $_GET["test_input"]);
	$get_qdata->execute();

	$q_data = $get_qdata->fetchAll(PDO::FETCH_ASSOC);
	echo json_encode($q_data);

}catch(PDOException $e){
	//$msg =  "系統暫時無法提供服務, 請聯絡系統維護人員<br>";
	echo "錯誤訊息 : ", $e->getMessage(), "<br>";
	echo "錯誤行號 : ", $e->getLine(), "<br>";
}
?>