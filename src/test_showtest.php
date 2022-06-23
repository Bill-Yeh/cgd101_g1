<?php 
session_start();
try{
	//=====連接資料庫=====//
    require_once("connect_cgd101g1.php");

	$sql = "select distinct lr.member_id,q.lesson_id,l.lesson_name,l.lesson_type_id,l.lesson_id,count(q.option_id) `count`
	from lesson l join lesson_record lr on l.lesson_id = lr.lesson_id join q_data q on l.lesson_id = q.lesson_id
	where lr.member_id=:mem GROUP BY l.lesson_id order by l.lesson_id;";  
	$get_qdata = $pdo->prepare($sql);
	
	$get_qdata->bindValue(":mem", $_SESSION["member_id"]);
	$get_qdata->execute();

	$q_data = $get_qdata->fetchAll(PDO::FETCH_ASSOC);
	echo json_encode($q_data);

}catch(PDOException $e){
	//$msg =  "系統暫時無法提供服務, 請聯絡系統維護人員<br>";
	echo "錯誤訊息 : ", $e->getMessage(), "<br>";
	echo "錯誤行號 : ", $e->getLine(), "<br>";
}
?>