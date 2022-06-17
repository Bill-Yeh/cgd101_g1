<?php


session_start();
try{
	//=====連接資料庫=====//

    //1.自己用的
    $dbname = "tibamefe_cgd101g1";
	$user = "root"; //帳號
	$password = "fsrs90115"; //密碼

    //連接資料庫的變數(固定寫法)
	$dsn = "mysql:host=localhost;port=3306;dbname=$dbname;charse=utf8";
	$options = [PDO::ATTR_CASE=>PDO::CASE_NATURAL, PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION];

    //新增連接資料庫的物件(固定寫法)
	$pdo = new PDO($dsn, $user, $password, $options);
    
    //2.上線之後用的
    // require_once("connect_cgd101g1.php");


    //=====要資料庫做的事情=====//

    //1.sql指令

	$sql = "SELECT item_id,item_name,item_img,item_price FROM `item` ";
    //2.要資料庫準備接收指令
	$get_qdata = $pdo->prepare($sql);

	

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