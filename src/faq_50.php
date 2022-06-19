<?php 
try{
  $dbname = "tibamefe_cgd101g1";
  $user = "root";
  $password = "Lakers11220913";

  $dsn = "mysql:host=localhost;port=3306;dbname=$dbname;charse=utf8";
  $options = [PDO::ATTR_CASE=>PDO::CASE_NATURAL,  PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION];

  $pdo = new PDO($dsn, $user, $password, $options);

    $json = $_POST["json"];
    $typeset = json_decode($json, true);
    // $sql = "SELECT post.post_id, post.post_date, post.post_txt, post.post_title, post.post_type, member.member_name, member.role,count(fav.post_id) 'fav' FROM `post`LEFT JOIN member ON post.member_id = member.member_id LEFT JOIN fav ON post.post_id = fav.post_id WHERE post_type='1' group by post.post_id;";

    // 含按讚數、留言數
    $sql = "SELECT post.post_id, post.post_date, post.post_txt, post.post_title, post.post_type, member.member_name, member.role,count(DISTINCT(fav.post_id)) 'fav' ,COUNT(message.post_id)'messageNum' FROM `post`LEFT JOIN member ON post.member_id = member.member_id LEFT JOIN fav ON post.post_id = fav.post_id LEFT JOIN message ON post.post_id = message.post_id WHERE post_type='1' group by post.post_id;";
    $postType = $pdo->prepare($sql);
    $postType ->execute();
    $postResult = $postType->fetchAll(PDO::FETCH_ASSOC);
    
    echo json_encode($postResult);
}catch(PDOException $e){
    echo $e->getMessage();
}
?>