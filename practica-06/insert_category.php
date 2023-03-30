<?php
	// Se realiza la conexion
	include("conexion.php");
	global $pdo;
	// Se obtienen los datos del form con sus name
	$codeCategory = $_REQUEST['codeCategory'];
	$nameCategory = $_REQUEST['nameCategory'];
	// Se realiza el Query de insercion a la DB
	$sql = "INSERT INTO categorias(id,nombre) VALUES('$codeCategory','$nameCategory')";
	$statement = $pdo->prepare($sql);
	$statement->execute();
	header("location: category.php");

	return $statement;
?>
