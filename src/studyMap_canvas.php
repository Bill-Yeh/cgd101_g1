<?php 
session_start();
try{
	//==========
    
    require_once("./connect_cgd101g1.php");

    if( file_exists("images/memMap") === false){
        mkdir("images/memMap");}


    $image=$_POST["img"];

    $imageName="{$_SESSION["member_id"]}.jpeg";
    

    $image = str_replace('data:image/jpeg;base64,','', $image);


    $data = base64_decode(str_replace(" ","+",$image));

    $file = "./images/memMap/{$_SESSION["member_id"]}.jpeg";
    file_put_contents($file, $data);

    
    $sql = "UPDATE `tibamefe_cgd101g1`.`member` SET `tibamefe_cgd101g1`.`member`.`map_img` =:img  WHERE `tibamefe_cgd101g1`. `member`.`member_id` =:mem_id ;"; 

    $products = $pdo->prepare($sql);
    $products->bindValue("img","./images/memMap/{$_SESSION["member_id"]}.jpeg");
    $products->bindValue("mem_id",$_SESSION["member_id"]);
    $products->execute();


    echo json_encode("修改成功");
        
    


}catch(PDOException $e){
	
	echo "錯誤訊息 : ", $e->getMessage(), "<br>";
	echo "錯誤行號 : ", $e->getLine(), "<br>";
	
}
?>