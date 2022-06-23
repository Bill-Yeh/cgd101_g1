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
        $sql = "UPDATE `tibamefe_cgd101g1`.`error` SET `error`.`error_status`=:errorStatus WHERE  `error`.`error_id` =:id ;"; 
        
        $products = $pdo->prepare($sql);
        $products->bindValue("id",$_GET["id"]);
        $products->bindValue("errorStatus",$_GET["status"]);

        $products->execute();

        echo json_encode("修改成功");



}catch(PDOException $e){
	
	echo "錯誤訊息 : ", $e->getMessage(), "<br>";
	echo "錯誤行號 : ", $e->getLine(), "<br>";
	
}
?>