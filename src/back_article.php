<?php
try{
  $dbname = "tibamefe_cgd101g1";
  $user = "root";
  $password = "Lakers11220913";

  $dsn = "mysql:host=localhost;port=3306;dbname=$dbname;charse=utf8";
  $options = [PDO::ATTR_CASE=>PDO::CASE_NATURAL,  PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION];

  $pdo = new PDO($dsn, $user, $password, $options);


  $total = [];

  $sql = "SELECT post.post_id, post.member_id, post.post_txt, post.post_title, post.post_type, member.member_name, count(fav.post_id) 'fav'
  FROM post LEFT JOIN member ON post.member_id = member.member_id LEFT JOIN fav ON post.post_id = fav.post_id
  group by post.post_id;"; 

  $article = $pdo->query($sql);
  // 取回所有的資料列放在$accounts
  $articles = $article->fetchAll(PDO::FETCH_ASSOC);
  //送出$accounts
  $total["postFav"] = json_encode($articles);

  $sql2 = "SELECT post.post_id, post.member_id, post.post_txt, post.post_title, post.post_type, member.member_name, count(message.post_id) 'message'
  FROM post LEFT JOIN member ON post.member_id = member.member_id LEFT JOIN message ON post.post_id = message.post_id
  group by post.post_id;"; 
  $article = $pdo->query($sql2);
  // 取回所有的資料列放在$accounts
  $articles = $article->fetchAll(PDO::FETCH_ASSOC);
  //送出$accounts
  $total["message"] = json_encode($articles);

  $sql3 = "SELECT post.post_id, post.member_id, post.post_txt, post.post_title, post.post_type, member.member_name, count(report.post_id) 'report'
  FROM post LEFT JOIN member ON post.member_id = member.member_id LEFT JOIN report ON post.post_id = report.post_id
  group by post.post_id;"; 
  $article = $pdo->query($sql3);
  // 取回所有的資料列放在$accounts
  $articles = $article->fetchAll(PDO::FETCH_ASSOC);
  //送出$accounts
  $total["report"] = json_encode($articles);

  echo json_encode($total);

}catch(PDOException $e){
  echo $e->getMessage();
}
?>

