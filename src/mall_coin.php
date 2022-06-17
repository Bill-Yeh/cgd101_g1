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

	//$mem_info_sql = "SELECT coin FROM `member` where member_id = :member_id";
	//$item_info_sql = "SELECT item_price FROM `item` where item_id = 1";

    //2.要資料庫準備接收指令
	//$get_qdata = $pdo->prepare($sql);
	//前台input傳來的變數(看是get還是post),可以用在sql指令中
	
	//$get_qdata->bindValue(":member_id", $_SESSION["member_id"]);
	
	

    //3.執行sql指令
	//$get_qdata->execute();
	// if( $get_qdata->rowCount()>=5){ //查無此人
	// 	echo 2;
	// }else{ //
	// 	echo 1;
	// }
    //4.要抓全部還是只抓值
	//$q_data = $get_qdata->fetchAll(PDO::FETCH_ASSOC);

    //5.把資料傳回去js檔(變成js檔的xhr.responseText，可以放在onload用)
	//echo json_encode($q_data);
    
//======================================================================
//1.sql指令

 $mem_info_sql = "SELECT coin FROM member where member_id = :member_id";
  $item_info_sql = "SELECT item_price FROM item where item_id = 1";

    //2.要資料庫準備接收指令
 $get_mem_qdata = $pdo->prepare($mem_info_sql);
 $get_item_qdata = $pdo->prepare($item_info_sql);
 //前台input傳來的變數(看是get還是post),可以用在sql指令中
 
 $get_mem_qdata->bindValue(":member_id", 1);

    //3.執行sql指令
 $get_mem_qdata->execute();
 $get_item_qdata->execute();
 // if( $get_qdata->rowCount()>=5){ //查無此人
 //  echo 2;
 // }else{ //
 //  echo 1;
 // }
    //4.要抓全部還是只抓值
 $mem_coin_data = $get_mem_qdata->fetchAll(PDO::FETCH_ASSOC);
 $item_price_data = $get_item_qdata->fetchAll(PDO::FETCH_ASSOC);
$mem_coin_value = $mem_coin_data[0]['coin'];
$item_price_value = $item_price_data[0]['item_price'];
 //宣告會員購買該裝備剩餘的coin
 

 //update member start 扣錢
// $mem_after_coin = $mem_coin_value - $item_price_value;
//  $update_mem_coin_sql = "UPDATE member SET coin = :coin";
//  $update_mem_coin_qdata = $pdo->prepare($update_mem_coin_sql);
//  $update_mem_coin_qdata->bindValue(":coin", $mem_after_coin);
//  $update_mem_coin_qdata->execute();
 //update member end

 //update member start 加錢
//  $mem_after_coin = 1000;
//  $update_mem_coin_sql = "UPDATE member SET coin = :coin WHERE member_id = :member_id";
//  $update_mem_coin_qdata = $pdo->prepare($update_mem_coin_sql);
//  $update_mem_coin_qdata->bindValue(":coin", $mem_after_coin);
//  $update_mem_coin_qdata->bindValue(":member_id", 1);
//  $update_mem_coin_qdata->execute();
 //update member end

}catch(PDOException $e){
	//$msg =  "系統暫時無法提供服務, 請聯絡系統維護人員<br>";
	echo "錯誤訊息 : ", $e->getMessage(), "<br>";
	echo "錯誤行號 : ", $e->getLine(), "<br>";
}

?>
