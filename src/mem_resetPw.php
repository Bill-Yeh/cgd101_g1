<?php 
session_start();
//  $_POST["new_psw"]=1;
//  $_POST["new_psw_check"]=1;
try{
	//==========
    $dbname = "tibamefe_cgd101g1";
	$user = "root";
	$password = "Sarah34302521";

	$dsn = "mysql:host=localhost;port=3306;dbname=$dbname;charse=utf8";
	$options = [PDO::ATTR_CASE=>PDO::CASE_NATURAL, PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION];

	$pdo = new PDO($dsn, $user, $password, $options);
    
    // require_once("./connect_cgd101g1.php");


    //=========
    

    if($_POST["newPassword"]==$_POST["new_psw_check"] && $_POST["password"]==$_SESSION["password"]){ //檢查輸入資料是否正確

        $sql = "UPDATE `tibamefe_cgd101g1`.`member` SET `tibamefe_cgd101g1`.`member`.`password` =:new_psw  WHERE `tibamefe_cgd101g1`. `member`.`member_id` =:mem_id ;"; 
        
        $products = $pdo->prepare($sql);
        $products->bindValue("new_psw",$_POST["newPassword"]);
        $products->bindValue("mem_id",$_SESSION["member_id"]);
        $products->execute();

        $_SESSION["password"]=$_POST["newPassword"];  //改掉session取得的密碼紀錄
        echo json_encode("修改成功");

    }
    else{
        echo json_encode("修改錯誤");
    }




}catch(PDOException $e){
	
	echo "錯誤訊息 : ", $e->getMessage(), "<br>";
	echo "錯誤行號 : ", $e->getLine(), "<br>";
	
}
?>