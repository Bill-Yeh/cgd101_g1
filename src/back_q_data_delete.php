<?php
try{
  //=====連接資料庫=====//
  require_once("connect_cgd101g1.php");
  
  $sql = "DELETE FROM q_data WHERE `q_data`.`option_id` = :option_id;"; 
  $get_qdata = $pdo->prepare($sql);
  $get_qdata->bindValue(":option_id", $_POST["option_id"]);
  $get_qdata->execute();

  echo 'delete ok';

}catch(PDOException $e){
  echo $e->getMessage();
}
?>

