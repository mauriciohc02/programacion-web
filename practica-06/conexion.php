<?php
	// Este archivo se encarga de conectarse con la DB a traves de PDO
	$dsn = 'mysql:dbname=tienda;host=localhost;';
	$user = 'admin';
	$password = '23ce8fce25ac3b5de1d021ebbec3ac96821930feadadc310';

	try{
		$pdo = new PDO($dsn, $user, $password);
	}catch( PDOException $e ){
		echo 'Error al conectarnos: ' . $e->getMessage();
	}
?>
