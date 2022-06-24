<?php
try{
  //=====連接資料庫=====//
  require_once("connect_cgd101g1.php");
  
  $sql = "UPDATE `lesson` 
  SET`lesson_status` = :lesson_status WHERE `lesson`.`lesson_id` = :lesson_id;
  "; 
  $get_qdata = $pdo->prepare($sql);
  $get_qdata->bindValue(":lesson_id", $_POST["lesson_id"]);
  $get_qdata->bindValue(":lesson_status", $_POST["lesson_status"]);
  $get_qdata->execute();

  echo 'update ok';

}catch(PDOException $e){
  echo $e->getMessage();
}
?>