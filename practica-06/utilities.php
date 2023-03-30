<?php
    // Se realiza la conexion
    include("conexion.php");
    // Funciones para obtener datos
    function send_category(){
        global $pdo;
        // Se realiza el Query a la DB para llenar las tablas
        $sql = "SELECT * FROM categorias";
        $statement = $pdo->prepare($sql);
        $statement->execute();
        $results = $statement->fetchAll();

        return $results;
    }

    function send_products(){
        global $pdo;
        // Se realiza el Query a la DB para llenar las tablas, en este caso tambien se requiere un JOIN
        $sql = "SELECT productos.codigo, productos.nombre, productos.descripcion, productos.precio_venta, productos.precio_compra, categorias.nombre as nombre_categoria FROM productos INNER JOIN categorias ON productos.id_categoria=categorias.id;";
        $statement = $pdo->prepare($sql);
        $statement->execute();
        $results = $statement->fetchAll();
        
        return $results;
    }
?>