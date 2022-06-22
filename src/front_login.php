<?php
session_start();

// $_POST["action"] ==> Login
try{


  //上線之後用的
  require_once("connect_cgd101g1.php");


  $sql = "select * from `member` where account=:account and password=:password"; 
  $member = $pdo->prepare($sql);
  $member->bindValue(":account", $_POST["account"]);
  $member->bindValue(":password", $_POST["password"]);
  $member->execute();

  if( $member->rowCount()==0){ //查無此人
	  // echo "exist";
    echo json_encode("exist");
  }else{ //登入成功
    //自資料庫中取回資料
    $memRow = $member->fetch(PDO::FETCH_ASSOC);
    //寫入session
    $_SESSION["member_id"] = $memRow["member_id"];
    $_SESSION["account"] = $memRow["account"];
    $_SESSION["password"] = $memRow["password"];
    $_SESSION["member_name"] = $memRow["member_name"];
    $_SESSION["coin"] = $memRow["coin"];
    $_SESSION["role"] = $memRow["role"];

    $result = ["member_id"=>$_SESSION["member_id"], "account"=>$_SESSION["account"], "password"=>$_SESSION["password"], "member_name"=>$_SESSION["member_name"],"coin"=>$_SESSION["coin"],"role"=>$_SESSION["role"]];

    //送出登入者的姓名資料
    echo json_encode($result);
  }
}catch(PDOException $e){
  echo $e->getMessage();
}
?>

