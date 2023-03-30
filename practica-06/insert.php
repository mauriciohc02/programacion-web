<?php
    // Se realiza la conexion
    include("conexion.php");
    global $pdo;
    // Se obtienen los datos del form con sus name
    $codeProduct = $_REQUEST['codeProduct'];
    $nameProduct = $_REQUEST['name_product'];
    $description = $_REQUEST['description'];
    $category = $_REQUEST['category'];
    $sale_price = $_REQUEST['sale_price'];
    $purchase_price = $_REQUEST['purchase_price'];
    // Se realiza el Query de insercion a la DB
	$sql = "INSERT INTO productos(codigo,nombre,descripcion,precio_venta,precio_compra,id_categoria) VALUES('$codeProduct','$nameProduct','$description','$sale_price','$purchase_price','$category')";
	$statement = $pdo->prepare($sql);
	$statement->execute();
    header("location: products.php");

?>
