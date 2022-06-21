<?php
session_start();
// $_POST = json_decode($data_info, true);
try{
  $dbname = "tibamefe_cgd101g1";
  $user = "root";
  $password = "Lakers11220913";
	$dsn = "mysql:host=localhost;port=3306;dbname=$dbname;charse=utf8";
	$options = [PDO::ATTR_CASE=>PDO::CASE_NATURAL, PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION];
  $pdo = new PDO($dsn, $user, $password, $options);

  $sql = "INSERT INTO `report` (`report_id`, `member_id`, `post_id`, `report_status`, `report_reason`) VALUES (NULL, :member_id, :post_id, '1', :report_reason);";

  $member = $pdo->prepare($sql);
  $member->bindValue(":member_id", $_SESSION["member_id"]);
  $member->bindValue(":post_id", $_POST["post_id"]);
  $member->bindValue(":report_reason", $_POST["report_reason"]);

  $member->execute();
  echo json_encode('ok');
    }catch(PDOException $e){
      echo $e->getMessage();
    }
?>

