<?php
$Date = date('Y-m-d H:i:s', time());

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


	$sql = "select distinct lesson_id from lesson_record where member_id =:member_id and lesson_id = 12 ";
  	$get_qdata = $pdo->prepare($sql);
  	$get_qdata->bindValue(":member_id", $_SESSION["member_id"]);
  	$get_qdata->execute();

  	$checkResult = $get_qdata -> rowCount();

 	if($checkResult == 1){
    
    exit();
  	}else{
	
	$sql = "INSERT INTO `lesson_record` (  `member_id`, `lesson_id`,`payment_time`) VALUES (:member_id, :lesson_id, :date_now);"  ;

	$get_qdata = $pdo->prepare($sql);

	$get_qdata->bindValue(":member_id", $_SESSION["member_id"]);
	$get_qdata->bindValue(":lesson_id", $_GET["lesson_id"]);
	$get_qdata->bindValue(":date_now", $Date);
  
	$get_qdata->execute();

	$q_data = $get_qdata->fetchAll(PDO::FETCH_ASSOC);

	}
}catch(PDOException $e){
	echo "錯誤訊息 : ", $e->getMessage(), "<br>";
	echo "錯誤行號 : ", $e->getLine(), "<br>";
}