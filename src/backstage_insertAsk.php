<?php 
session_start();

try{
	//==========
    // $dbname = "tibamefe_cgd101g1";
	// $user = "root";
	// $password = "Sarah34302521";

	// $dsn = "mysql:host=localhost;port=3306;dbname=$dbname;charse=utf8";
	// $options = [PDO::ATTR_CASE=>PDO::CASE_NATURAL, PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION];

	// $pdo = new PDO($dsn, $user, $password, $options);
    
    require_once("./connect_cgd101g1.php");


    //=========
        $sql = "INSERT `tibamefe_cgd101g1`.`ask_log`"."(`ask_time`,`ask_content`, `member_id`,`ask_src`,`ans_backstage_id`)"."VALUES "."(NOW(),:ask,:mem_id,'2','3')"; 
        
        $products = $pdo->prepare($sql);
        $products->bindValue("ask",$_POST["ask"]);
        $products->bindValue("mem_id",$_POST["user"]);

        $products->execute();

        // echo json_encode("修改成功");


        $sql = "SELECT `ask_log`.`ask_content`,`ask_log`.`ask_src`,`ask_log`.`ask_time`,`ask_log`.`read_or_not`,`member`.`member_name`,`member`.`member_id`,`member`.`role`
        FROM `tibamefe_cgd101g1`.`ask_log` join `tibamefe_cgd101g1`.`member` 
                on `ask_log`.`member_id`=`member`.`member_id`
        WHERE `ask_log`.`member_id` =:mem_id AND `ask_log`.`ask_src`=2
        order by `ask_log`.`ask_time` desc
        limit 1;"; 


        $info = $pdo->prepare($sql);
        $info->bindValue("mem_id",$_POST["user"]);
        $info->execute();

        $ask_prodRows = $info->fetchAll(PDO::FETCH_ASSOC);

        echo json_encode($ask_prodRows);


}catch(PDOException $e){
	
	echo "錯誤訊息 : ", $e->getMessage(), "<br>";
	echo "錯誤行號 : ", $e->getLine(), "<br>";
	
}
?>