<?php
	//判斷是否及格
	$ifPass = 0;
	$coin = 0;
	if($_GET["test_score_input"]>=60){
		$ifPass = 1;
		$coin = $_GET["test_score_input"];
	}
	$Date = date('Y-m-d H:i:s', time());

	//連接session
	session_start();
	//把錢存進sesstion裡
	$_SESSION["coin"] += $coin;
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
		$sql = "INSERT INTO `quiz_record` (`quiz_record_id`, `lesson_id`, `member_id`, `quiz_score`, `quiz_pass`, `quiz_getcoin`, `quiz_time`) VALUES (NULL, :test, :member_id, :score, :ifPass, :getCoin, :date_now);"; 
		$get_qdata = $pdo->prepare($sql);
		$get_qdata->bindValue(":test", $_GET["test_input"]);
		$get_qdata->bindValue(":member_id", $_SESSION["member_id"]);
		$get_qdata->bindValue(":score", $_GET["test_score_input"]);
		$get_qdata->bindValue(":ifPass", $ifPass);
		$get_qdata->bindValue(":getCoin", $_GET["test_score_input"]);
		$get_qdata->bindValue(":date_now", $Date);
		$get_qdata->execute();



		$sql2 = "UPDATE `member` SET `coin`=:coin WHERE `member`.`member_id` = :member_id;";
		$add_coin = $pdo->prepare($sql2);
		$add_coin->bindValue(":coin", $_SESSION["coin"]);
		$add_coin->bindValue(":member_id", $_SESSION["member_id"]);
		$add_coin->execute();
		

	}catch(PDOException $e){
		//$msg =  "系統暫時無法提供服務, 請聯絡系統維護人員<br>";
		echo "錯誤訊息 : ", $e->getMessage(), "<br>";
		echo "錯誤行號 : ", $e->getLine(), "<br>";
	}
?>