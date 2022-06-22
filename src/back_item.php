<?php
try{
  // $dbname = "tibamefe_cgd101g1";
  // $user = "root";
  // $password = "Lakers11220913";

  // $dsn = "mysql:host=localhost;port=3306;dbname=$dbname;charse=utf8";
  // $options = [PDO::ATTR_CASE=>PDO::CASE_NATURAL,  PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION];

  // $pdo = new PDO($dsn, $user, $password, $options);

  //=====連接資料庫=====//
  require_once("connect_cgd101g1.php");

  $sql = "select * from item"; 
  $item = $pdo->query($sql);
  // 取回所有的資料列放在$accounts
  $items = $item->fetchAll(PDO::FETCH_ASSOC);
  //送出$accounts
  echo json_encode($items);

}catch(PDOException $e){
  echo $e->getMessage();
}
?>

