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
    

    $sql = "UPDATE `tibamefe_cgd101g1`.`item_record` 
    SET `tibamefe_cgd101g1`.`item_record`.`item_on` =0;
    UPDATE `tibamefe_cgd101g1`.`item_record` 
    JOIN `tibamefe_cgd101g1`.`item` ON `tibamefe_cgd101g1`.`item_record`.`item_id`=`tibamefe_cgd101g1`.`item`.`item_id`
    SET `tibamefe_cgd101g1`.`item_record`.`item_on` =1 
    WHERE `tibamefe_cgd101g1`. `item_record`.`member_id` =:mem_id and (`tibamefe_cgd101g1`. `item`.`item_img`=:hat OR `tibamefe_cgd101g1`. `item`.`item_img`=:dress OR `tibamefe_cgd101g1`. `item`.`item_img`=:tool);"; 
    
    $newImg = $pdo->prepare($sql);
    $newImg ->bindValue("hat",$_POST["hat"]);
    $newImg ->bindValue("dress",$_POST["dress"]);
    $newImg ->bindValue("tool",$_POST["tool"]);
    $newImg ->bindValue("mem_id",$_SESSION["member_id"]);

    $newImg ->execute();

    

    echo json_encode("成功");

    



}catch(PDOException $e){
	
	echo "錯誤訊息 : ", $e->getMessage(), "<br>";
	echo "錯誤行號 : ", $e->getLine(), "<br>";
	
}
?>