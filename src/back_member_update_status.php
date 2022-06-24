<?php
try{
  //=====連接資料庫=====//
  require_once("connect_cgd101g1.php");
  
  $sql = "UPDATE `member` 
  SET`member_status` = :member_status WHERE `member`.`member_id` = :member_id;
  "; 
  $get_qdata = $pdo->prepare($sql);
  $get_qdata->bindValue(":member_id", $_POST["member_id"]);
  $get_qdata->bindValue(":member_status", $_POST["member_status"]);
  $get_qdata->execute();

  echo 'update ok';

}catch(PDOException $e){
  echo $e->getMessage();
}
?>