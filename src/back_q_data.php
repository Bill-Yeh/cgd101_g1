<?php
try{
  //=====連接資料庫=====//
  require_once("connect_cgd101g1.php");
  
  $sql = "select q.option_id,l.lesson_id,l.lesson_name,q.txt,q.ans,q.option_content1,q.option_content2,q.option_content3,q.option_status
  from q_data q join lesson l on q.lesson_id=l.lesson_id order by q.option_id;"; 
  $qData = $pdo->query($sql);
  // 取回所有的資料列放在$accounts
  $qDatas = $qData->fetchAll(PDO::FETCH_ASSOC);
  //送出$accounts
  echo json_encode($qDatas);

}catch(PDOException $e){
  echo $e->getMessage();
}
?>

