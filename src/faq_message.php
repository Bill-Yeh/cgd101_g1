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

  $sql = "INSERT INTO `message` (`message_id`, `message_date`, `member_id`, `post_id`, `message_txt`) VALUES (NULL, NOW(), :member_id, :post_id, :message_txt);
  ";

  $member = $pdo->prepare($sql);
  $member->bindValue(":member_id", $_SESSION["member_id"]);
  $member->bindValue(":post_id", $_POST["post_id"]);
  $member->bindValue(":message_txt", $_POST["message_txt"]);

  $member->execute();

//  這段sql指令主要用來重新抓資料，讓留言區可以動態更新
  $sql = "SELECT post.post_id,member.member_name,member.role,message.message_id, message.message_txt, message.message_date FROM `message` LEFT JOIN post ON message.post_id = post.post_id LEFT JOIN member on member.member_id = message.member_id;";

  $postType = $pdo->prepare($sql);

  $postType ->execute();
  $postResult = $postType->fetchAll(PDO::FETCH_ASSOC);


  echo json_encode($postResult);
    }catch(PDOException $e){
      echo $e->getMessage();
    }
?>

