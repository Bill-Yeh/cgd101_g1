<?php
try{
  //=====連接資料庫=====//
  require_once("connect_cgd101g1.php");
  
  $sql = "select distinct lesson_id,lesson_name
  from lesson;"; 
  $qData = $pdo->query($sql);
  // 取回所有的資料列放在$accounts
  $qDatas = $qData->fetchAll(PDO::FETCH_ASSOC);
  //送出$accounts
  echo json_encode($qDatas);

}catch(PDOException $e){
  echo $e->getMessage();
}
?>

