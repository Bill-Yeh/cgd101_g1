<?php
try{
  //=====連接資料庫=====//
  require_once("connect_cgd101g1.php");
  
  $sql = "UPDATE `q_data` 
  SET`option_status` = :option_status WHERE `q_data`.`option_id` = :option_id;
  "; 
  $get_qdata = $pdo->prepare($sql);
  $get_qdata->bindValue(":option_id", $_POST["option_id"]);
  $get_qdata->bindValue(":option_status", $_POST["option_status"]);
  $get_qdata->execute();

  echo 'update ok';

}catch(PDOException $e){
  echo $e->getMessage();
}
?>