<?php
try{
  $dbname = "tibamefe_cgd101g1";
  $user = "root";
  $password = "Lakers11220913";

  $dsn = "mysql:host=localhost;port=3306;dbname=$dbname;charse=utf8";
  $options = [PDO::ATTR_CASE=>PDO::CASE_NATURAL,  PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION];

  $pdo = new PDO($dsn, $user, $password, $options);
  $sql = "select * from q_data"; 
  $qData = $pdo->query($sql);
  // 取回所有的資料列放在$accounts
  $qDatas = $qData->fetchAll(PDO::FETCH_ASSOC);
  //送出$accounts
  echo json_encode($qDatas);

}catch(PDOException $e){
  echo $e->getMessage();
}
?>

