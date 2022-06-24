<?php 
	$dbname = "tibamefe_cgd101g1";
	// $user = "tibamefe_since2021";
	// $password = "vwRBSb.j&K#E";
	$user = "root";
	$password = "SQLqtq558tst";

	$dsn = "mysql:host=localhost;port=3306;dbname=$dbname;charse=utf8";
	$options = [PDO::ATTR_CASE=>PDO::CASE_NATURAL, PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION];

	$pdo = new PDO($dsn, $user, $password, $options);

	// $dbname = "tibamefe_cgd101g1";
	// $user = "root";
  	// $password = "Lakers11220913";
	// $dsn = "mysql:host=localhost;port=3306;dbname=$dbname;charse=utf8";
	// $options = [PDO::ATTR_CASE=>PDO::CASE_NATURAL, PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION];
  	// $pdo = new PDO($dsn, $user, $password, $options);

?>