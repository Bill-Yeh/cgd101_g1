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
	$sql = "SELECT *
	FROM `tibamefe_cgd101g1`.`error`
	order by `error`.`error_datetime` desc;"; 


	$info = $pdo->prepare($sql);
	$info->execute();

	$ask_prodRows = $info->fetchAll(PDO::FETCH_ASSOC);

	echo json_encode($ask_prodRows);



}catch(PDOException $e){
	
	echo "錯誤訊息 : ", $e->getMessage(), "<br>";
	echo "錯誤行號 : ", $e->getLine(), "<br>";
	
}
?>