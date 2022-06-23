<?php 
session_start();
try{
	//==========
    
    require_once("./connect_cgd101g1.php");

    if( file_exists("images/role") === false){
        mkdir("images/role");}


    $image=$_POST["img"];

    $imageName="{$_SESSION["member_id"]}.png";
    

    $image = str_replace('data:image/png;base64,','', $image);


    $data = base64_decode(str_replace(" ","+",$image));

    $file = "./images/role/{$_SESSION["member_id"]}.png";
    file_put_contents($file, $data);

    
    $sql = "UPDATE `tibamefe_cgd101g1`.`member` SET `tibamefe_cgd101g1`.`member`.`role` =:img  WHERE `tibamefe_cgd101g1`. `member`.`member_id` =:mem_id ;"; 

    $products = $pdo->prepare($sql);
    $products->bindValue("img","./images/role/{$_SESSION["member_id"]}.png");
    $products->bindValue("mem_id",$_SESSION["member_id"]);
    $products->execute();


    echo json_encode("修改成功");
        
    


}catch(PDOException $e){
	
	echo "錯誤訊息 : ", $e->getMessage(), "<br>";
	echo "錯誤行號 : ", $e->getLine(), "<br>";
	
}
?>