<?php

//try代表作下面的動作
//catch(PDOException $e)出錯的時候跑的動作
session_start();
try{
	//=====連接資料庫=====//

    //1.自己用的
    $dbname = "tibamefe_cgd101g1";
	$user = "root"; //帳號
	$password = "Apple0810orange"; //密碼

    //連接資料庫的變數(固定寫法)
	$dsn = "mysql:host=localhost;port=3306;dbname=$dbname;charse=utf8";
	$options = [PDO::ATTR_CASE=>PDO::CASE_NATURAL, PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION];

    //新增連接資料庫的物件(固定寫法)
	$pdo = new PDO($dsn, $user, $password, $options);
    
    //2.上線之後用的
    // require_once("connect_cgd101g1.php");


    //=====要資料庫做的事情=====//

    //1.sql指令
	$sql = "SELECT  member_id, lesson_id FROM `lesson_record` where member_id = :member_id group by lesson_id having lesson_id <=5 ORDER BY lesson_id ASC"  ;
    //2.要資料庫準備接收指令
	$get_qdata = $pdo->prepare($sql);
	//前台input傳來的變數(看是get還是post),可以用在sql指令中
	
	$get_qdata->bindValue(":member_id", $_SESSION["member_id"]);
	

    //3.執行sql指令
	$get_qdata->execute();
	
    //4.要抓全部還是只抓值
	$q_data = $get_qdata->fetchAll(PDO::FETCH_ASSOC);

    //5.把資料傳回去js檔(變成js檔的xhr.responseText，可以放在onload用)
	echo json_encode($q_data);

}catch(PDOException $e){
	//$msg =  "系統暫時無法提供服務, 請聯絡系統維護人員<br>";
	echo "錯誤訊息 : ", $e->getMessage(), "<br>";
	echo "錯誤行號 : ", $e->getLine(), "<br>";
}

?>