<?php
session_start();

try{
  $dbname = "tibamefe_cgd101g1";
	$user = "root";
	$password = "Lakers11220913";

	$dsn = "mysql:host=localhost;port=3306;dbname=$dbname;charse=utf8";
	$options = [PDO::ATTR_CASE=>PDO::CASE_NATURAL, PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION];

    // INSERT INTO `member` (`member_id`, `member_name`, `account`, `password`, `pass_lesson`, `member_status`, `coin`, `level`, `role`) VALUES (NULL, 'Bill', 'abc@gmail.com', 'aaaAAA111', NULL, '1', '100', '9', './images/char_00_0.png');



  $pdo = new PDO($dsn, $user, $password, $options);
  $sql = "INSERT INTO `member` (`member_id`, `member_name`, `account`, `password`, `pass_lesson`, `member_status`, `coin`, `level`, `role`) VALUES (NULL, ':member_name', :account, :password, NULL, '1', '0', '1', './images/char_00_0.png')";
  $member = $pdo->prepare($sql);
  $member->bindValue(":account", $_POST["account"]);
  $member->bindValue(":password", $_POST["password"]);
  $member->bindValue(":member_name", $_POST["member_name"]);

  $member->execute();

//   if( $member->rowCount()==0){ //查無此人
// 	  echo "exist";
//   }else{ //登入成功
//     //自資料庫中取回資料
//     $memRow = $member->fetch(PDO::FETCH_ASSOC);
//     //寫入session
//     $_SESSION["member_id"] = $memRow["member_id"];
//     $_SESSION["account"] = $memRow["account"];
//     $_SESSION["password"] = $memRow["password"];
//     $_SESSION["member_name"] = $memRow["member_name"];

//     $result = ["member_id"=>$_SESSION["member_id"], "account"=>$_SESSION["account"], "password"=>$_SESSION["password"], "member_name"=>$_SESSION["member_name"]];

//     //送出登入者的姓名資料
//     echo json_encode($result);
//   }
}catch(PDOException $e){
  echo $e->getMessage();
}
?>

