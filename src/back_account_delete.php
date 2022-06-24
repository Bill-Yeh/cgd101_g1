<?php
try{
  //=====連接資料庫=====//
  require_once("connect_cgd101g1.php");
  
  $sql = "DELETE FROM `backstage` WHERE `backstage`.`backstage_id` = :backstage_id;"; 
  $get_qdata = $pdo->prepare($sql);
  $get_qdata->bindValue(":backstage_id", $_POST["backstage_id"]);
  $get_qdata->execute();

  echo 'delete ok';

}catch(PDOException $e){
  echo $e->getMessage();
}
?>

