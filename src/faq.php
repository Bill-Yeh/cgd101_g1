<?php 
try{
  $dbname = "tibamefe_cgd101g1";
  $user = "root";
  $password = "Lakers11220913";

  $dsn = "mysql:host=localhost;port=3306;dbname=$dbname;charse=utf8";
  $options = [PDO::ATTR_CASE=>PDO::CASE_NATURAL,  PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION];

  $pdo = new PDO($dsn, $user, $password, $options);

    $json = $_POST["json"];
    $dataset = json_decode($json, true);
    // $sql = "SELECT * FROM `post` WHERE post_type=:post_type;";
    $sql = "SELECT post.post_id, post.post_txt, post.post_title, post.post_type, member.member_name, member.role,count(fav.post_id) 'fav' FROM `post`LEFT JOIN member ON post.member_id = member.member_id LEFT JOIN fav ON post.post_id = fav.post_id WHERE post_type=:post_type group by post.post_id;";
    $postType = $pdo->prepare($sql);
    $postType ->bindValue(":post_type", $dataset["action"]);
    $postType ->execute();
    $postResult = $postType->fetchAll(PDO::FETCH_ASSOC);
    
    echo json_encode($postResult);
}catch(PDOException $e){
    echo $e->getMessage();
}

    // $member = $pdo->prepare($sql);
    // $member->bindValue(":account", $_POST["account"]);
    // $member->bindValue(":password", $_POST["password"]);
    // $member->execute();
?>