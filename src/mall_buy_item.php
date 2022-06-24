<?php

session_start();
try{

    require_once("connect_cgd101g1.php");

$update_item_id_sql ="INSERT INTO item_record (item_id,member_id,payment_time) VALUES (:item_id,:member_id, current_date())";
$update_item_id = $pdo->prepare($update_item_id_sql);
$update_item_id->bindValue(":item_id",$_GET["item_id"]);
$update_item_id->bindValue(":member_id",$_SESSION["member_id"]);


$update_item_id->execute();
$upate_item_idRow = $update_item_id->fetchAll(PDO::FETCH_ASSOC);

}catch(PDOException $e){
	echo "錯誤訊息 : ", $e->getMessage(), "<br>";
	echo "錯誤行號 : ", $e->getLine(), "<br>";
}

?>