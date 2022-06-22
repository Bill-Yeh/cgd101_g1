<?php
try{
  //=====連接資料庫=====//
  require_once("connect_cgd101g1.php");
  
  $sql = "select distinct l.lesson_id,l.lesson_name,count(l.lesson_id=1) as 'lesson_count'
  from lesson l join q_data q on l.lesson_id=q.lesson_id
  group by l.lesson_id;"; 
  $qData = $pdo->query($sql);
  // 取回所有的資料列放在$accounts
  $qDatas = $qData->fetchAll(PDO::FETCH_ASSOC);
  //送出$accounts
  echo json_encode($qDatas);

}catch(PDOException $e){
  echo $e->getMessage();
}
?>

