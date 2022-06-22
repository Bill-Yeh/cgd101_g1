<?php
try{
  //=====連接資料庫=====//
  require_once("connect_cgd101g1.php");

  $sql = "INSERT INTO `q_data` (`option_id`, `lesson_id`, `txt`, `ans`, `option_content1`, `option_content2`, `option_content3`, `option_point`, `option_status`) 
  VALUES (NULL, :lesson_type, :txt, :ans, :con1, :con2, :con3, '10', '1');"; 
  $get_qdata = $pdo->prepare($sql);
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

