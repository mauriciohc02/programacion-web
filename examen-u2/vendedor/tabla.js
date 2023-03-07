let products = []
// Ciclo para llenar array con dictionarios con productos de ejemplos
for (let i = 0; i < 10; i++) {
    products[i] = {
        code: i,
        product: 'Producto' + i,
        description: 'Descripcion' + i,
        selling_price: '$' + i * 200,
        capture_date: '06/03/2023',
        notes: 'Notas' + i
    }
}

//Genera los encablezados de tabla 
function generateTableHead(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
        let th = document.createElement("th");
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
    }
}

// Genera el contenido de tabla a partir del array
function generateTable(table, data) {
    for (let element of data) {
        let row = table.insertRow();
        for (key in element) {
            // Se insertan las celdas y texto
            let cell = row.insertCell();
            let text = document.createTextNode(element[key]);
            cell.appendChild(text);
        }
    }
}

// se manda a llamar los necesario y las funciones para generar la tabla
let table = document.querySelector("table");
let data = Object.keys(products[0]);
generateTableHead(table, data);
generateTable(table, products);