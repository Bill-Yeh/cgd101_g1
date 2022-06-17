<?php 
session_start();
try{
	//=====連接資料庫=====//

    //自己用的
    $dbname = "tibamefe_cgd101g1";
	$user = "root";
	$password = "SQLqtq558tst";

	$dsn = "mysql:host=localhost;port=3306;dbname=$dbname;charse=utf8";
	$options = [PDO::ATTR_CASE=>PDO::CASE_NATURAL, PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION];

	$pdo = new PDO($dsn, $user, $password, $options);
    
    //上線之後用的
    // require_once("connect_cgd101g1.php");


    //=====連接資料庫=====//
	$sql = "select distinct lr.member_id,q.lesson_id,l.lesson_name,l.lesson_type_id
	from lesson l join lesson_record lr on l.lesson_id = lr.lesson_id join q_data q on l.lesson_id = q.lesson_id
	where lr.member_id=:mem;";  
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