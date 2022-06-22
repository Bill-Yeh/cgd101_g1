<?php
try{
  //=====連接資料庫=====//
  require_once("connect_cgd101g1.php");
  
  $sql = "UPDATE `q_data` 
  SET `lesson_id` = :lesson_type,`txt` = :txt, `ans` = :ans, `option_content1` = :con1, `option_content2` = :con2, `option_content3` = :con3 
  WHERE `q_data`.`option_id` = :option_id;"; 
  $get_qdata = $pdo->prepare($sql);
  $get_qdata->bindValue(":option_id", $_POST["option_id"]);
  $get_qdata->bindValue(":lesson_type", $_POST["lesson_type"]);
  $get_qdata->bindValue(":txt", $_POST["qdata_txt"]);
  $get_qdata->bindValue(":ans", $_POST["qdata_ans"]);
  $get_qdata->bindValue(":con1", $_POST["qdata_con1"]);
  $get_qdata->bindValue(":con2", $_POST["qdata_con2"]);
  $get_qdata->bindValue(":con3", $_POST["qdata_con3"]);
  $get_qdata->execute();

  echo 'ok';

}catch(PDOException $e){
  echo $e->getMessage();
}
?>