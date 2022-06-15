<?php 
try{
	//=====連接資料庫=====//

    //自己用的
    $dbname = "tibamefe_cgd101g1";
	$user = "root";
	$password = "";

	$dsn = "mysql:host=localhost;port=3306;dbname=$dbname;charse=utf8";
	$options = [PDO::ATTR_CASE=>PDO::CASE_NATURAL, PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION];

	$pdo = new PDO($dsn, $user, $password, $options);
    
    //上線之後用的
    // require_once("connect_cgd101g1.php");


    //=====連接資料庫=====//
	$sql = "SELECT * FROM `q_data` WHERE lesson_id =1;"; 
	// $sql = "SELECT * FROM `q_data` WHERE lesson_id =:test_input;"; 
	$get_qdata = $pdo->prepare($sql);
	// $get_qdata->bindValue(":test_input", $_GET["test_input"]);
	$get_qdata->execute();

	$q_data = $get_qdata->fetchAll(PDO::FETCH_ASSOC);
	echo json_encode($q_data);

}catch(PDOException $e){
	//$msg =  "系統暫時無法提供服務, 請聯絡系統維護人員<br>";
	echo "錯誤訊息 : ", $e->getMessage(), "<br>";
	echo "錯誤行號 : ", $e->getLine(), "<br>";
}
?>