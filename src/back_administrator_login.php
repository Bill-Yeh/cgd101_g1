<?php
session_start();
try{
  // $dbname = "tibamefe_cgd101g1";
  // $user = "root";
  // $password = "Lakers11220913";

  // $dsn = "mysql:host=localhost;port=3306;dbname=$dbname;charse=utf8";
  // $options = [PDO::ATTR_CASE=>PDO::CASE_NATURAL,  PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION];

  // $pdo = new PDO($dsn, $user, $password, $options);

  //=====連接資料庫=====//
  require_once("connect_cgd101g1.php");


  $sql = "select * from `backstage` where backstage_account=:backstage_account and backstage_password=:backstage_password"; 
  $member = $pdo->prepare($sql);
  $member->bindValue(":backstage_account", $_POST["backstage_account"]);
  $member->bindValue(":backstage_password", $_POST["backstage_password"]);
  $member->execute();

  if( $member->rowCount()==0){ //查無此人
	  echo json_encode("exist");
  }else{ //登入成功
    //自資料庫中取回資料
    $memRow = $member->fetch(PDO::FETCH_ASSOC);
    //寫入session
    $_SESSION["backstage_id"] = $memRow["backstage_id"];
    $_SESSION["backstage_account"] = $memRow["backstage_account"];
    $_SESSION["backstage_password"] = $memRow["backstage_password"];
    $_SESSION["backstage_name"] = $memRow["backstage_name"];
    $_SESSION["backstage_status"] = $memRow["backstage_status"];

    $result = ["backstage_id"=>$_SESSION["backstage_id"], "backstage_account"=>$_SESSION["backstage_account"], "backstage_password"=>$_SESSION["backstage_password"], "backstage_name"=>$_SESSION["backstage_name"],"backstage_status"=>$_SESSION["backstage_status"]];

    //送出登入者的姓名資料
    echo json_encode($result);   //打包成json格式
  }
}catch(PDOException $e){
  echo $e->getMessage();
}
?>

