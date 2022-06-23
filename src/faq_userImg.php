<?php
session_start();
// $_POST = json_decode($data_info, true);
try{
  //上線之後用的
  require_once("connect_cgd101g1.php");

  $sql = "SELECT member.member_name, member.role FROM `member` where member_name=:member_name and role=:role;";

  $member = $pdo->prepare($sql);
  $member->bindValue(":member_name", $_SESSION["member_name"]);
  $member->bindValue(":role", $_SESSION["role"]);
  $member->execute();
  $memRow = $member->fetch(PDO::FETCH_ASSOC);
  echo json_encode($memRow);
}catch(PDOException $e){
      echo $e->getMessage();
    }
?>

