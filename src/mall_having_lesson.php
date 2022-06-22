<?php


session_start();
try{
	//=====連接資料庫=====//

    //1.自己用的
//    $dbname = "tibamefe_cgd101g1";
// 	$user = "root";
// 	$password = "fsrs90115";

// 	$dsn = "mysql:host=localhost;port=3306;dbname=$dbname;charse=utf8";
// 	$options = [PDO::ATTR_CASE=>PDO::CASE_NATURAL, PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION];

// 	$pdo = new PDO($dsn, $user, $password, $options);
    
    //2.上線之後用的
     require_once("connect_cgd101g1.php");


    //=====要資料庫做的事情=====//

    //1.sql指令

	$sql = "select l.lesson_id,lr.lesson_id from lesson l join lesson_record lr on (l.lesson_id = lr.lesson_id) where member_id = :member_id";


    //2.要資料庫準備接收指令
	$get_qdata = $pdo->prepare($sql);
	

    $get_qdata->bindValue(":member_id", $_SESSION["member_id"]);
	

    //3.執行sql指令
	$get_qdata->execute();
	$q_data = $get_qdata->fetchAll(PDO::FETCH_ASSOC);

    //5.把資料傳回去js檔(變成js檔的xhr.responseText，可以放在onload用)
	echo json_encode($q_data);


}catch(PDOException $e){
	echo "錯誤訊息 : ", $e->getMessage(), "<br>";
	echo "錯誤行號 : ", $e->getLine(), "<br>";
}

?>