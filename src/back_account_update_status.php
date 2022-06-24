<?php
try{
  //=====連接資料庫=====//
  require_once("connect_cgd101g1.php");
  
  $sql = "UPDATE `backstage` 
  SET`backstage_status` = :backstage_status WHERE `backstage`.`backstage_id` = :backstage_id;
  "; 
  $get_qdata = $pdo->prepare($sql);
  $get_qdata->bindValue(":backstage_id", $_POST["backstage_id"]);
  $get_qdata->bindValue(":backstage_status", $_POST["backstage_status"]);
  $get_qdata->execute();

  echo 'update ok';

}catch(PDOException $e){
  echo $e->getMessage();
}
?>