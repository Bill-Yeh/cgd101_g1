<?php
session_start();
try{
    // $dbname = "tibamefe_cgd101g1";
	// $user = "root"; //帳號
	// $password = "Apple0810orange"; //密碼

  
	// $dsn = "mysql:host=localhost;port=3306;dbname=$dbname;charse=utf8";
	// $options = [PDO::ATTR_CASE=>PDO::CASE_NATURAL, PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION];

	// $pdo = new PDO($dsn, $user, $password, $options);
    
    //2.上線之後用的
    require_once("connect_cgd101g1.php");

	$sql = "SELECT  lesson_id , quiz_pass FROM `quiz_record` where member_id = :member_id and lesson_id >5 and lesson_id <11 and quiz_pass = 1 ORDER BY lesson_id ASC"  ;
	$get_qdata = $pdo->prepare($sql);
	
	$get_qdata->bindValue(":member_id", $_SESSION["member_id"]);
	

	$get_qdata->execute();
	
	$q_data = $get_qdata->fetchAll(PDO::FETCH_ASSOC);

	echo json_encode($q_data);

}catch(PDOException $e){
	echo "錯誤訊息 : ", $e->getMessage(), "<br>";
	echo "錯誤行號 : ", $e->getLine(), "<br>";
}

?>