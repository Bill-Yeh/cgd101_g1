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
    

    $sql = "SELECT `tibamefe_cgd101g1`.`item_record`.`item_id`, `tibamefe_cgd101g1`.`item_record`.`item_on` ,`tibamefe_cgd101g1`.`item`.`item_img`
    from  `tibamefe_cgd101g1`.`item_record`  join `tibamefe_cgd101g1`.`item`  on `tibamefe_cgd101g1`.`item_record`.`item_id`=`tibamefe_cgd101g1`.`item`.`item_id`
    WHERE `tibamefe_cgd101g1`. `item_record`.`member_id` =:mem_id and `tibamefe_cgd101g1`. `item_record`.`item_on`=1;"; 
    
    $roleOn = $pdo->prepare($sql);
    $roleOn->bindValue("mem_id",$_SESSION["member_id"]);
    $roleOn->execute();

    $roleClothes = $roleOn->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($roleClothes);

}catch(PDOException $e){
	
	echo "錯誤訊息 : ", $e->getMessage(), "<br>";
	echo "錯誤行號 : ", $e->getLine(), "<br>";
	
}
?>