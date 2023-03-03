let products = []
// Ciclo para llenar array con dictionarios con productos de ejemplos
for (let i = 0; i < 100; i++) {
    products[i] = {
        code: i,
        product: 'Producto' + i,
        category: 'Categoria' + i,
        selling_price: i * 200,
        purchase_price: i * 100
    }
}

//Generador de encablezados de tabla 
function generateTableHead(table, data) {
    let thead = table.createTHead();//createTHead retornaun encablezado asociado con la tabla
    let row = thead.insertRow();//"thead" inserta un encabezado en la tabla
    for (let key of data) {
        let th = document.createElement("th");
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
    }
}

// Generador de contenido de tabla a partir del array
function generateTable(table, data) {
    for (let element of data) {
        let row = table.insertRow();
        for (key in element) {
            let cell = row.insertCell();
            let text = document.createTextNode(element[key]);
            cell.appendChild(text);
        }
    }
}

let table = document.querySelector("table");
let data = Object.keys(products[0]);
generateTableHead(table, data);
generateTable(table, products);