<?php
try{
  //=====連接資料庫=====//
  require_once("connect_cgd101g1.php");
  
  $sql = "UPDATE `item` 
  SET`item_status` = :item_status WHERE `item`.`item_id` = :item_id;
  "; 
  $get_qdata = $pdo->prepare($sql);
  $get_qdata->bindValue(":item_id", $_POST["item_id"]);
  $get_qdata->bindValue(":item_status", $_POST["item_status"]);
  $get_qdata->execute();

  echo 'update ok';

}catch(PDOException $e){
  echo $e->getMessage();
}
?>