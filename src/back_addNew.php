<?php
// session_start();
// $_POST = json_decode($data_info, true);
try{
  // $dbname = "tibamefe_cgd101g1";
	// $user = "root";
	// $password = "Lakers11220913";
	// $dsn = "mysql:host=localhost;port=3306;dbname=$dbname;charse=utf8";
	// $options = [PDO::ATTR_CASE=>PDO::CASE_NATURAL, PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION];
  // $pdo = new PDO($dsn, $user, $password, $options);

  //=====連接資料庫=====//
  require_once("connect_cgd101g1.php");


  $sql = "select * from backstage where backstage_account=:backstage_account";
  $memberCheck = $pdo->prepare($sql);
  $memberCheck -> bindValue(":backstage_account", $_POST["backstage_account"]);
  $memberCheck->execute();

  $checkResult = $memberCheck -> rowCount();

  if($checkResult != 0){
    echo json_encode('帳號已存在');
    exit();
  }

  $sql = "INSERT INTO `backstage` (`backstage_id`, `backstage_name`, `backstage_account`, `backstage_password`, `backstage_status`) VALUES (NULL, :backstage_name, :backstage_account, :backstage_password, :backstage_status)";
  $member = $pdo->prepare($sql);
  $member->bindValue(":backstage_name", $_POST["backstage_name"]);
  $member->bindValue(":backstage_account", $_POST["backstage_account"]);
  $member->bindValue(":backstage_password", $_POST["backstage_password"]);
  $member->bindValue(":backstage_status", $_POST["backstage_status"]);

  $member->execute();
  echo json_encode('ok');
    
    }catch(PDOException $e){
      echo $e->getMessage();
    }
?>

