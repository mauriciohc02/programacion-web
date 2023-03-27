<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/insert.css">
    <title>Producto Registrado</title>
</head>
<body>
    <center>
        <?php
            // Conexion a la DB
            $con = mysqli_connect("localhost", "admin", "23ce8fce25ac3b5de1d021ebbec3ac96821930feadadc310", "my_store");
            // Comprueba si se hizo la conexion
            if ($con === false) {
                die("Error, sin conexión a la DB. " . mysqli_connect_error());
            }
            // Obtiene los valores del index.php
            $id_product = $_REQUEST['id_product'];
            $name_product = $_REQUEST['name_product'];
            $sale_price = $_REQUEST['sale_price'];
            $purchase_price = $_REQUEST['purchase_price'];
            
            // Ejecutar el Query de insercion de datos
            $sql = "INSERT INTO products VALUES ('$id_product', '$name_product', '$sale_price', '$purchase_price')";

            if (mysqli_query($con, $sql)) {
                echo "<h3>El registro fue exitoso!</h3>";
                // nl3br: INserta saltos de linea HTML
                echo nl2br("\n$id_product\n$name_product\n$ $sale_price\n$ $purchase_price");
            } else {
                echo "ERROR: $sql" . mysqli_error($con);
            }
            // Cerrar conexion
            mysqli_close($con);
        ?>
    </center>
</body>
</html>