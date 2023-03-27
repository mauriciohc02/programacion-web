<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/index.css">
    <title>Registrar Producto</title>
</head>
<body>
    <center>
        <h1>Registrar Nuevo Producto</h1>
        <form action="./php/insert.php" method="post">
            <p>
                <label for="ID">ID:</label>
                <input type="number" min="0" name="id_product" id="idProduct" placeholder="Ingrese ID del producto" required>
            </p>
            <p>
                <label for="Name">Nombre:</label>
                <input type="text" name="name_product" id="nameProduct" placeholder="Ingrese Nombre del producto" required>
            </p>
            <p>
                <label for="SalePrice">Precio de Venta:</label>
                <input type="number" min="0" name="sale_price" id="salePrice" placeholder="Ingrese Precio $" required>
            </p>
            <p>
                <label for="PurchasePrice">Precio de Compra:</label>
                <input type="number" min="0" name="purchase_price" id="purchasePrice" placeholder="Ingrese Precio $" required>
            </p>
            <input type="submit" value="Registrar">
        </form>
    </center>
</body>
</html>