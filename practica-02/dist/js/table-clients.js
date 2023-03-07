let clients = []
// Ciclo para llenar array con dictionarios con productos de ejemplos
for (let i = 0; i < 25; i++) {
    clients[i] = {
        id: i,
        nombre: 'Cliente' + i,
        apaterno: 'Paterno' + i,
        amaterno: 'Amaterno' + i,
        email: 'example' + i + '@gmail.com',
        telefono: 'Telefono' + i,
        direccion: 'Direccion' + i,
        rfc: 'RFC' + i,
        categoria: 'Categoria' + i
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
let data = Object.keys(clients[0]);
generateTableHead(table, data);
generateTable(table, clients);