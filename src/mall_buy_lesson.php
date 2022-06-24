<?php

session_start();
try{

    require_once("connect_cgd101g1.php");

$update_lesson_id_sql ="INSERT INTO lesson_record (lesson_id,member_id,payment_time) VALUES (:lesson_id,:member_id, current_date())";
$update_lesson_id = $pdo->prepare($update_lesson_id_sql);
$update_lesson_id->bindValue(":lesson_id",$_GET["lesson_id"]);
$update_lesson_id->bindValue(":member_id",$_SESSION["member_id"]);


$update_lesson_id->execute();
$update_lesson_idRow = $update_lesson_id->fetchAll(PDO::FETCH_ASSOC);

}catch(PDOException $e){
	echo "錯誤訊息 : ", $e->getMessage(), "<br>";
	echo "錯誤行號 : ", $e->getLine(), "<br>";
}

?>