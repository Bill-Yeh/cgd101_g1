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
	$sql = "SELECT `ask_log`.`ask_src`,`ask_log`.`member_id`,`ask_log`.`read_or_not`,`member`.`member_name`,`member`.`role`
	FROM `tibamefe_cgd101g1`.`ask_log` join `tibamefe_cgd101g1`.`member` 
			on `ask_log`.`member_id`=`member`.`member_id`
	order by `ask_log`.`ask_time`ASC;"; 


	$info = $pdo->prepare($sql);
	// $info->bindValue("mem_id",$_GET["memid"]);
	$info->execute();

	$ask_prodRows = $info->fetchAll(PDO::FETCH_ASSOC);

	echo json_encode($ask_prodRows);



}catch(PDOException $e){
	
	echo "錯誤訊息 : ", $e->getMessage(), "<br>";
	echo "錯誤行號 : ", $e->getLine(), "<br>";
	
}
?>