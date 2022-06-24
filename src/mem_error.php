<?php 
session_start();
try {
    //==========
	// $dbname = "tibamefe_cgd101g1";
	// $user = "root";
	// $password = "Sarah34302521";

	// $dsn = "mysql:host=localhost;port=3306;dbname=$dbname;charse=utf8";
	// $options = [PDO::ATTR_CASE=>PDO::CASE_NATURAL, PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION];

	// $pdo = new PDO($dsn, $user, $password, $options);
    //==========
	require_once("./connect_cgd101g1.php");

	//.......確定是否上傳成功
	if( $_FILES["upFile"]["error"] == UPLOAD_ERR_OK){
		//----------------------
		//先檢查images資料夾存不存在
		if( file_exists("images/report") === false){
			mkdir("images/report");
		}
		//將檔案copy到要放的路徑
		$fileInfoArr = pathinfo($_FILES["upFile"]["name"]);
		$fileName = uniqid().".{$fileInfoArr["extension"]}"; //usq321Bddd.gif 

		$from = $_FILES["upFile"]["tmp_name"];
		$to = "images/report/$fileName";
		if(copy( $from, $to)===true){
			//將檔案名稱寫回資料庫
			$sql = "INSERT `tibamefe_cgd101g1`.`error`"."(`member_id`,`error_title`, `error_txt`,`error_file`,`error_status`,`error_datetime`)"."VALUES "."(:mem_id,:error_h,:error_msg,:fileName,'0',NOW())";
			$products = $pdo->prepare( $sql );
			$products -> bindValue("error_h", $_POST["error_h"]);
			$products -> bindValue("error_msg", $_POST["error_msg"]);
            $products -> bindValue("fileName", "./images/report/{$fileName}");
			$products -> bindValue("mem_id", $_SESSION["member_id"]);
			
			$products -> execute();

			echo "成功";
		}
    
    

	}else{
        $sql = "INSERT `tibamefe_cgd101g1`.`error`"."(`member_id`,`error_title`, `error_txt`,`error_status`,`error_datetime`)"."VALUES "."(:mem_id,:error_h,:error_msg,'0',NOW())";
			$products = $pdo->prepare( $sql );
			$products -> bindValue("error_h", $_POST["error_h"]);
			$products -> bindValue("error_msg", $_POST["error_msg"]);
			$products -> bindValue("mem_id", $_SESSION["member_id"]);
			
			$products -> execute();

			echo "成功";
		
	}
} catch (PDOException $e) {
	$errMsg = "";
	$errMsg .= "錯誤原因 : ".$e -> getMessage(). "<br>";
	$errMsg .= "錯誤行號 : ".$e -> getLine(). "<br>";
	echo $errMsg;	
}



?>