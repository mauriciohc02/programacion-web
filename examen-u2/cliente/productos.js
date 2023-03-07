let products = []
// 
for (let i = 0; i < 10; i++) {
    products[i] = {
        id: i,
        title: 'Producto' + i,
        category: '',
        price: i * 200,
        desc: 'Alguna descripcion ' + i
    }
}

products[0]['category'] = 'Gorras'
products[1]['category'] = 'Gorras'
products[2]['category'] = 'Gorras'

products[3]['category'] = 'Relojes'
products[4]['category'] = 'Relojes'
products[5]['category'] = 'Relojes'

products[6]['category'] = 'Camisas'
products[7]['category'] = 'Camisas'
products[8]['category'] = 'Camisas'

products[9]['category'] = 'Joyeria'

// Desde aqui se mandan llamar a las funciones necesarias
document.addEventListener('DOMContentLoaded', function () {
    create_buttons();
    create_list(products);
});

// Despliega la lista de los productos disponibles
function create_list(menuItems) {
    let content = ''
    let containerCards = document.getElementById('cards')
    menuItems.forEach((e) => {
        content += `<div class="card" style="margin-bottom: 10px">
                <h2 class="card-title"> ${e.category} </h2>
                <h3 class="card-title"> ${e.title} </h2>
                <p>${e.desc}</p>
                <span>$${e.price}</span>
            </div>`
    });

    containerCards.innerHTML = content
}

// Funcionon para crear los botones en base a las categorias existentes
function create_buttons() {
    let content = "<button id = 'todo' class='btns'> Todo </button>";
    let btnsContainer = document.getElementById('btnsCategoria')
    let allcategories = new Array()

    products.forEach((e) => {
        allcategories.push(e.category);
    });

    let categories = allcategories.filter((e, i) => {
        return allcategories.indexOf(e) === i;
    });

    categories.forEach((e, i) => {
        content += "<button id = '" + e + "' class = 'btns'> " + e + " </button>";
    });

    btnsContainer.innerHTML = content
    let btns = btnsContainer.querySelectorAll('.btns');

    btns.forEach((btn) => {
        btn.addEventListener("click", function (e) {
            let category = btn.id;

            let menuCategory = products.filter(function (item) {
                if (item.category === category) {
                    return item;
                }
            });

            if (category == "todo") {
                create_list(products);
            } else {
                create_list(menuCategory);
            }
        });
    });
}

