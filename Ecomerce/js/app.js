// ------OBJECTS----------

let productsArray = [
  {
    id: 0,
    name: 'Hoddies',
    price: '14.00',
    stock: 10,
    unit: '$',
    image: './assets/img/featured1.png',
  },
  {
    id: 1,
    name: 'Shirts',
    price: '20.00',
    stock: 15,
    unit: '$',
    image: './assets/img/featured2.png',
  },
  {
    id: 2,
    name: 'Sweatshirts',
    price: '24.00',
    stock: 20,
    unit: '$',
    image: './assets/img/featured3.png',
  },
]
let recovery = []
let cartArray = []
let quantity = 0
let totalUnits = 0
//---NODES AND ELEMENTS--------
const elementNavbar = document.querySelector('.header__navbar')

const elementCardPrice = document.querySelector('.card-price')
const elementCardStock = document.querySelector('.stock-quantity')
const elementMenuButton = document.querySelector('.menu')
const elementCartButton = document.querySelector('.shopping-bag')
const elementCartAsside = document.querySelector('.cart-asside')
const elementMenuAsside = document.querySelector('.menu-asside')

const elementCloseMenuButton = document.querySelector('.close-menu')
const elementCloseCartButton = document.querySelector('.close-cart-asside')

const elementSectionCards = document.querySelector('.products__cards')

// ---ELEMENTS TO BE FILTER-------
const elementProductsMenu = document.querySelector('.products__menu')
const elementHoddies = document.querySelector('.hoddie')
const elementShirts = document.querySelector('.shirts')
const elementSweatshirts = document.querySelector('.sweatshirts')
const elementShowAll = document.querySelector('.show')

//--ELEMENTS CART-----
const elementCartProducts = document.querySelector('.cart-asside__products')

// ----LOCAL STORAGE insert-----------
localStorage.setItem('products', JSON.stringify(productsArray))
localStorage.setItem('cart', JSON.stringify(cartArray))
// ----LOCAL STORAGE read-----------------

recovery = JSON.parse(localStorage.getItem('products'))

// -------WINDOW--EVENTS---------

addEventListener('scroll', (e) => {
  elementNavbar.style.backgroundColor = 'hsl(0, 0%, 90%)'
  if (!window.scrollY) elementNavbar.style.backgroundColor = 'transparent'
})

//----LOAD CARDS AN INFORMATION----------

addEventListener('load', (e) => {
  createCards()
  loadQuantities()
})

//----CLICKS EVENTS---

elementSectionCards.addEventListener('click', (e) => {
  if (e.target.classList.contains('product-button-add')) {
    console.log(e.target.getAttribute('id'))
    const id = e.target.getAttribute('id')
    console.log(typeof idCard)
    let itemCartSelected = productsArray.filter((prod) => prod.id == `${id}`)

    let name = ''
    let stock = ''
    let price = ''
    let unit = ''

    if (searchInCartArray(itemCartSelected)) {
      const index = cartArray.findIndex(
        (element) => element.id == itemCartSelected[0].id,
      )
      console.log('estoy en el if lo encontro')
      quantity++
      const totalprice = quantity * Number(itemCartSelected[0].price)
      cartArray[index].quantity = quantity
      cartArray[index].totalprice = totalprice
      console.log(cartArray)
    } else {
      console.log(itemCartSelected[0].name)
      // id = itemCartSelected[0].id
      name = itemCartSelected[0].name
      price = itemCartSelected[0].price
      stock = itemCartSelected[0].stock
      unit = itemCartSelected[0].unit
      image = itemCartSelected[0].image
      quantity = 1
      const totalprice = quantity * Number(itemCartSelected[0].price)
      cartArray.push({
        id,
        name,
        price,
        stock,
        unit,
        image,
        quantity,
        totalprice,
      })
      console.log(cartArray)
    }

    totalUnits = totalUnitsInArray(cartArray)
    console.log(totalUnits)

    emptyCart()
    createCart()
  }
})

elementCartButton.addEventListener('click', () => {
  elementCartAsside.style.display = 'block'
})
elementMenuButton.addEventListener('click', () => {
  elementMenuAsside.style.display = 'block'
})

elementCloseCartButton.addEventListener('click', () => {
  elementCartAsside.style.display = 'none'
})
elementCloseMenuButton.addEventListener('click', () => {
  elementMenuAsside.style.display = 'none'
})

elementShowAll.addEventListener('click', () => {
  filterProduct('show')
  createCards()
})

elementHoddies.addEventListener('click', () => {
  filterProduct('Hoddies')
  createCards()
})

elementShirts.addEventListener('click', () => {
  filterProduct('Shirts')
  createCards()
})

elementSweatshirts.addEventListener('click', () => {
  filterProduct('Sweatshirts')
  createCards()
})

elementCartAsside.addEventListener("click",(e)=>{
  console.log(e.target)

  if (e.target.classList.contains('bx-plus-circle')) {
    const id = e.target.getAttribute('id')

    const cartIndexOf =searchIndeOf(id)
    updateCart(cartIndexOf,'quantity','plus')
  
    // search indexof for this id and then change quantity property

  }

  if (e.target.classList.contains('bx bx-minus-circle')) {
  
    
  }

  if (e.target.classList.contains('bx-trash-alt')) {
  
    
  }




})

// CRUD INSERTAR

//------------CREATE CARDS FUNCTION----------

function createCards() {
  const elements = recovery.map((element) => {
    return `<div class="products__cards-item hoddies">
<div class="products__cards-item__image">
    <img src=${element.image} alt="image of product"
        class="product-image">
</div>
<a class="product-button-add" id=${element.id}>+</a>
<div class="card-information">
    <span class="card-unit">${element.unit}</span>
    <p class="card-price">${element.price}</p>
    <p class="stock">Stock:</p>
    <p class="stock-quantity">${element.stock}</p>
    <p class="card-item">${element.name}</p>
</div>
</div>`
  })
  elementSectionCards.innerHTML = elements.join('')
}
// const elementAdd = document.querySelector('.product-button-add')

// elementAdd.addEventListener('click', (event) => {
//   console.log("hola estoy aca")
//   console.log(elementAdd.nextElementSibling.lastElementChild.textContent)
//   console.log(elementAdd);
// })

//----------------FILTER FUNCTION-------------
function filterProduct(productText) {
  let productSelected = []
  recovery = JSON.parse(localStorage.getItem('products'))
  if (productText !== 'show') {
    console.log(productText)
    productSelected = recovery.filter((prod) => prod.name == `${productText}`)
    console.log(productSelected)
    recovery = [...productSelected]
  }
}

// ------------------LOAD QUANTITIES FUNCTION-----

function loadQuantities() {
  elementHoddies.nextElementSibling.firstElementChild.innerText = `${recovery[0].stock}`
  elementShirts.nextElementSibling.firstElementChild.innerText = `${recovery[1].stock}`
  elementSweatshirts.nextElementSibling.firstElementChild.innerText = `${recovery[2].stock}`
}

// ------------SEARCH IN CARTARRAY----------
function searchInCartArray(cart) {
  console.log('este es el id dentro de mi fucion', cart[0].id)
  return cartArray.some((element) => element.id == cart[0].id)
}

function totalUnitsInArray(cart) {
  let total = 0
  cart.forEach((element, index) => {
    total = total + element.quantity
  })
  return total
}

function emptyCart() {
  elementCartProducts.innerHTML = ''
}

function createCart() {
  const elements = cartArray.map((element) => {
    return `<div class="cart-asside__add">
    <div class="box-image"><img src=${element.image} alt="imagen de producto"></div>
    <div class="box-info">
        <p class="m10">${element.name}</p>
        <p class="inline">Stock:</p>
        <p class="inline">${element.stock}</p>
        <p class="inline">${element.unit}</p>
        <p class="inline">${element.price}</p>
        <br>
        <p class="inline">Subtotal:</p>
        <p class="inline">${element.unit}</p>
        <p class="inline">${element.totalprice}</p>
        <br>
        <div class="box-info-buttons m10">
            <i class='bx bx-plus-circle' id=${element.id}></i>
            <p class="inline">${element.quantity}</p>
            <p class="inline">units</p>
            <i class='bx bx-minus-circle' id=${element.id}></i>
            <i class='bx bx-trash-alt' id=${element.id}></i>
        </div>
    </div>
</div>`
  })

  elementCartProducts.innerHTML = elements.join('')
}


function searchIndeOf(id){

  const index = cartArray.findIndex(
    (element) => element.id == id)
  
    return index


  }


function updateCart(cartIndexOf,quantity,change)
{
if(change==='plus')
{
  cartArray[cartIndexOf].quantity++
  console.log(cartArray[cartIndexOf].quantity)
}

if(change==='minus')
{
  cartArray[cartIndexOf].quantity++
  console.log(cartArray[cartIndexOf].quantity)
}


}