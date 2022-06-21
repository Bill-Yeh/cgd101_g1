<?php
session_start();
// $_POST = json_decode($data_info, true);
try{
  $dbname = "tibamefe_cgd101g1";
	$user = "root";
	// $password = "Sarah34302521";
  $password = "Lakers11220913";
	$dsn = "mysql:host=localhost;port=3306;dbname=$dbname;charse=utf8";
	$options = [PDO::ATTR_CASE=>PDO::CASE_NATURAL, PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION];
  $pdo = new PDO($dsn, $user, $password, $options);

  $sql = "INSERT INTO `post` (`post_id`, `member_id`, `post_date`, `post_txt`, `post_title`, `post_type`, `post_status`) VALUES (NULL, :member_id, NOW(), :post_txt, :post_title, :post_type, '1');";

  $member = $pdo->prepare($sql);
  $member->bindValue(":member_id", $_SESSION["member_id"]);
  $member->bindValue(":post_title", $_POST["post_title"]);
  $member->bindValue(":post_txt", $_POST["post_txt"]);
  $member->bindValue(":post_type", $_POST["post_type"]);

  $member->execute();
  echo json_encode('ok');
    }catch(PDOException $e){
      echo $e->getMessage();
    }
?>

