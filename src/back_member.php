<?php
try{
  // $dbname = "tibamefe_cgd101g1";
  // $user = "root";
  // $password = "Lakers11220913";
  // $dsn = "mysql:host=localhost;port=3306;dbname=$dbname;charse=utf8";
  // $options = [PDO::ATTR_CASE=>PDO::CASE_NATURAL,  PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION];
  // $pdo = new PDO($dsn, $user, $password, $options);

  //=====連接資料庫=====//
  require_once("connect_cgd101g1.php");

  $sql = "SELECT member.member_id,member.member_name,member.account,member.password,member.member_status,member.level,member_level.title FROM `member`JOIN`member_level`ON member.level = member_level.level;"; 
  $member = $pdo->query($sql);
  // 取回所有的資料列放在$accounts
  $members = $member->fetchAll(PDO::FETCH_ASSOC);
  //送出$accounts
  echo json_encode($members);

}catch(PDOException $e){
  echo $e->getMessage();
}
?>

