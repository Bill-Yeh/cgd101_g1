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
    

    $sql = "SELECT `tibamefe_cgd101g1`.`member`.`role`
    from  `tibamefe_cgd101g1`.`member` 
    WHERE `tibamefe_cgd101g1`. `member`.`member_id` =:mem_id; "; 
    
    $role = $pdo->prepare($sql);
    $role->bindValue("mem_id",$_SESSION["member_id"]);
    $role->execute();

    $roleImg = $role->fetch(PDO::FETCH_ASSOC);

    echo json_encode($roleImg);

    



}catch(PDOException $e){
	
	echo "錯誤訊息 : ", $e->getMessage(), "<br>";
	echo "錯誤行號 : ", $e->getLine(), "<br>";
	
}
?>