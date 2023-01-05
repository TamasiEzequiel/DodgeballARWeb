
// let username = localStorage.getItem('username')
// if(!username || username == 'null') {
//     username = prompt('Username:')
//     localStorage.setItem('username', username)
// }

// const divUsername = document.getElementById('username')
// divUsername.innerHTML = `Welcome ${username}`

const cart = []
let products = []

//productos
fetch('./components/json/shop.json')//carga el son
    .then(response => response.json())
    .then(productsJSON => {//capturado en esa variable
        for (let i = 0; i < productsJSON.length; i++) productsJSON[i].id = i + 1 //le sumo 1 al id para que conicida con la posicion del array el numero de id

        products = productsJSON //lo paso a la variable products para utilizarla luego en el resto del codigo
        //products tiene toda la data del json 

        showProducts()
    })

const showProducts = () => {
    const div = document.getElementById('products')
    let html = ''

    for (const product of products) {// for of para q muestre todo
        html += `
            <div class="card">
                <img src='${product.img}'>
                <div class="card-title"> ${product.nombre} </div>
                <i class="card-text">$ ${product.precio}</i>
                <div class="bttn"> <button class='add' id='p-${product.id}'>Agregar al carrito </button> </div>
            </div>
        `
    }

    div.innerHTML = html
    setEventClickAddToCart()//ejecuto evento para escuchar el click
}


//cart

const setEventClickAddToCart = () => {

    const btns = document.getElementsByClassName('add')//lo uno al button add
    for (const btn of btns) btn.onclick = addToCart //para todos los botones al hacer click activo funcion de agregar al carrito el producto
}

const addToCart = e => {// el e funciona como un activador de evento (creo)

    const id = parseInt(e.target.id.split('-')[1])//para detectar el id? no comprendo del todo el codigo
    const product = products.find(p => p.id == id)//lo busca en json original, a partir de aca usando "product" modifico el json


    productCart = cart.find(p => p.id == product.id)
    if (product.stock > 0) {
        if (productCart) productCart.qty++, product.stock--;//si hay uno lo suma

        else cart.push({ //si no hay crea uno nuevo
            id: product.id,
            nombre: product.nombre,
            precio: product.precio,
            img: product.img,
            stock: product.stock--,
            qty: 1,

        })

    }
    else {
        Nstock()
    }

    showCarts()//muestra con cada actualizacion

}

const removeToCart = e => {
    const id = parseInt(e.target.id.split('-')[1])

    productCart = cart.find(p => p.id == id)
    const product = products.find(p => p.id == id)//lo busca en json original, a partir de aca usando "product" modifico el json

    if (productCart) {
        productCart.qty--
        product.stock++
        if (productCart.qty < 1) {
            const idx = cart.indexOf(p => p.id == id)
            cart.splice(idx - 1, 1)
        }
    }

    showCarts()
}

const showCarts = () => {
    const div = document.getElementById('cart')
    let html = ' <h2> Carrito </h2> '

    for (const product of cart) {

        html += `

        <div class="card">
                <img src='${product.img}'>
                <div class="card-title"> ${product.nombre} </div>
                <i class="card-text">$ ${product.precio * product.qty}</i>
                <div class ="btn-qty">
                    <div class="qty"> Cantidad ${product.qty}</div>
                    <button class='plus' id='plus-${product.id}'> + </button>
                    <button class='minus' id='minus-${product.id}'> - </button>
                </div>
            </div>

        `
    }

    div.innerHTML = html
    
    setEventClickCart()
    btnFinal()
}

const setEventClickCart = () => {

    const btnPlus = document.getElementsByClassName('plus')
    const btnMinus = document.getElementsByClassName('minus')

    for (const btn of btnPlus) btn.onclick = addToCart
    for (const btn of btnMinus) btn.onclick = removeToCart
}


const Nstock = () => {
    
    alert("Stock agotado")
    

}


const btnFinal = () => {
    const buttonF = document.getElementById('btn-final')
    const html = `
        <div id="btn-final">
        <div id="finalDiv"> 
        <button id="buttonFinal"> Finalizar compra </button>
        </div>

        `   

    buttonF.innerHTML = html

}

