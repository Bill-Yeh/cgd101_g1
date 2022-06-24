<?php
try{
  //=====連接資料庫=====//
  require_once("connect_cgd101g1.php");

  $sql = "INSERT INTO `backstage` (`backstage_id`, `backstage_name`, `backstage_account`, `backstage_password`, `backstage_status`) 
  VALUES (NULL, :backstage_name, :backstage_account, :backstage_password, :backstage_status);"; 
  $get_qdata = $pdo->prepare($sql);
  $get_qdata->bindValue(":backstage_name", $_POST["backstage_name"]);
  $get_qdata->bindValue(":backstage_account", $_POST["backstage_account"]);
  $get_qdata->bindValue(":backstage_password", $_POST["backstage_password"]);
  $get_qdata->bindValue(":backstage_status", $_POST["backstage_status"]);

  echo 'ok';

}catch(PDOException $e){
  echo $e->getMessage();
}
?>

