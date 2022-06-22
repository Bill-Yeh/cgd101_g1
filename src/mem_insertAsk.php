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
        $sql = "INSERT `tibamefe_cgd101g1`.`ask_log`"."(`ask_time`,`ask_content`, `member_id`,`ask_src`,`ans_backstage_id`)"."VALUES "."(NOW(),:ask,:mem_id,'1','1')"; 
        
        $products = $pdo->prepare($sql);
        $products->bindValue("ask",$_POST["ask"]);
        $products->bindValue("mem_id",$_SESSION["member_id"]);

        $products->execute();

        echo json_encode("修改成功");



}catch(PDOException $e){
	
	echo "錯誤訊息 : ", $e->getMessage(), "<br>";
	echo "錯誤行號 : ", $e->getLine(), "<br>";
	
}
?>