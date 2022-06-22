<?php 
session_start();
try{
	//==========
    // $dbname = "tibamefe_cgd101g1";
	// $user = "root";
	// $password = "Sarah34302521";

	// $dsn = "mysql:host=localhost;port=3306;dbname=$dbname;charse=utf8";
	// $options = [PDO::ATTR_CASE=>PDO::CASE_NATURAL, PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION];

	// $pdo = new PDO($dsn, $user, $password, $options);
    
    require_once("./connect_cgd101g1.php");


    //=========

	$total=[];
    
	$sql = "SELECT * FROM `tibamefe_cgd101g1`.`item_record` join `tibamefe_cgd101g1`.`item` 
    on `tibamefe_cgd101g1`.`item_record`.`item_id`=`tibamefe_cgd101g1`.`item`.`item_id` WHERE `member_id` =:mem_id"; 


	$products = $pdo->prepare($sql);
	$products->bindValue("mem_id",$_SESSION["member_id"]);
	$products->execute();

	$I_prodRows = $products->fetchAll(PDO::FETCH_ASSOC);


	//===========================================================

	$sql = "SELECT * FROM `tibamefe_cgd101g1`.`lesson_record` join `tibamefe_cgd101g1`.`lesson` 
    on `tibamefe_cgd101g1`.`lesson_record`.`lesson_id`=`tibamefe_cgd101g1`.`lesson`.`lesson_id` WHERE `member_id` =:mem_id"; 

	$lesson = $pdo->prepare($sql);
	$lesson->bindValue("mem_id",$_SESSION["member_id"]);
	$lesson->execute();

	$L_prodRows = $lesson->fetchAll(PDO::FETCH_ASSOC);

	for($i=0;$i<count($L_prodRows);$i++){
		array_push($I_prodRows,$L_prodRows[$i]);
	}

	// $total=[$I_prodRows,$L_prodRows];
	// $total.push($L_prodRows);


	echo json_encode($I_prodRows);






}catch(PDOException $e){
	
	echo "錯誤訊息 : ", $e->getMessage(), "<br>";
	echo "錯誤行號 : ", $e->getLine(), "<br>";
	
}
?>