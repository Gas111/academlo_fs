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
// let totalpriceBuy=0

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
const elementTotalUnits = document.querySelector(
  '.header__navbar__menu__total-units',
)

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
if (cartArray === []) {
  console.log('seteo cart en cero')
  localStorage.setItem('cart', JSON.stringify(cartArray))
}
// ----LOCAL STORAGE read-----------------
if (JSON.parse(localStorage.getItem('recovery') === null)) {
  recovery = JSON.parse(localStorage.getItem('products'))
} else {
  recovery = JSON.parse(localStorage.getItem('recovery'))
}
cartArray = JSON.parse(localStorage.getItem('cart'))
// -------WINDOW--EVENTS---------

addEventListener('scroll', (e) => {
  elementNavbar.style.backgroundColor = 'hsl(0, 0%, 90%)'
  if (!window.scrollY) elementNavbar.style.backgroundColor = 'transparent'
})

//----LOAD CARDS AN INFORMATION----------

addEventListener('load', (e) => {
  createCards()
  loadQuantities()
  if (cartArray.length !== 0) {
    emptyCartDisplayOff()
    createCart()
  }
  updateTotalUnitsIcon()
})

//----CLICKS EVENTS---------------------

elementSectionCards.addEventListener('click', (e) => {
  if (e.target.classList.contains('product-button-add')) {
    const id = e.target.getAttribute('id')
    let itemCartSelected = recovery.filter((prod) => prod.id == `${id}`)
    let name = ''
    let stock = ''
    let price = ''
    let unit = ''

    if (searchInCartArray(itemCartSelected)) {
      const index = cartArray.findIndex(
        (element) => element.id == itemCartSelected[0].id,
      )

      if (!Number(itemCartSelected[0].stock)) {
        quantity = 0
        alert('no hay mas stock del producto')
      } else {
        quantity = 1
      }
      const totalprice = quantity * Number(itemCartSelected[0].price)
      cartArray[index].quantity = quantity
      cartArray[index].totalprice = totalprice
    } else {
      name = itemCartSelected[0].name
      price = itemCartSelected[0].price
      stock = itemCartSelected[0].stock
      unit = itemCartSelected[0].unit
      image = itemCartSelected[0].image
      if (!Number(itemCartSelected[0].stock)) {
        quantity = 0
        alert('no hay mas stock del producto')
      } else {
        quantity = 1
      }

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
    }

    // totalUnits = totalUnitsInArray(cartArray)

    updateTotalUnitsIcon()

    emptyCartDisplayOff()
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

// ----------------EVENT CART ASSIDE---------

elementCartAsside.addEventListener('click', (e) => {
  console.log(e.target)

  if (e.target.classList.contains('bx-plus-circle')) {
    const id = e.target.getAttribute('id')
    const cartIndexOf = searchIndeOf(id)
    updateCart(cartIndexOf, 'quantity', 'plus')
    updateCart(cartIndexOf, 'totalprice', '')
    createCart()
  }

  if (e.target.classList.contains('bx-minus-circle')) {
    const id = e.target.getAttribute('id')
    const cartIndexOf = searchIndeOf(id)
    updateCart(cartIndexOf, 'quantity', 'minus')
    updateCart(cartIndexOf, 'totalprice', '')
    createCart()
  }

  if (e.target.classList.contains('bx-trash-alt')) {
    const id = e.target.getAttribute('id')
    const cartIndexOf = searchIndeOf(id)
    deleteCart(cartIndexOf)
  }

  if (e.target.classList.contains('button-order')) {
    updateCart('all', 'stock')
    createCart()
    createCards()
    emptyCartDisplayBougth()
    cartArray = []
    localStorageInsert()
    loadQuantities()
    localStorage.setItem('products', JSON.stringify(recovery))
  }

  updateTotalUnitsIcon()
})

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

//----------------FILTER FUNCTION-------------

function filterProduct(productText) {
  let productSelected = []
  recovery = JSON.parse(localStorage.getItem('recovery'))
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
  return cartArray.some((element) => element.id == cart[0].id)
}

function totalUnitsInArray(cart) {
  let total = 0
  cart.forEach((element, index) => {
    total = total + element.quantity
  })
  return total
}

function totalPriceBuy(cart) {
  let total = 0
  cart.forEach((element, index) => {
    total = total + element.totalprice
  })
  return total
}

// ----------ASSIDE CART FUNCTIONS-------------
function emptyCartDisplayBougth() {
  elementCartProducts.innerHTML = 'Compra Finalizada'
}

function emptyCartDisplayOff() {
  elementCartProducts.innerHTML = ''
}

function emptyCartDisplayOn() {
  elementCartProducts.innerHTML = `<img src="./assets/img/empty-cart.png" alt="cart-empty"
  class="cart-empty">
<h2>Your Card is empty</h2>
<p>You can add items to your cart by clicking on the "+" button on the product page.</p>`
}

// ----------CREATE CART-------------

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

  localStorageInsert()

  const totalBuy = totalPriceBuy(cartArray)
  const elementTotalPriceBuy = document.createElement('h5')
  elementTotalPriceBuy.innerHTML = `Precio Total: $ ${totalBuy}`
  elementTotalPriceBuy.setAttribute('class', 'm-text')
  elementCartProducts.appendChild(elementTotalPriceBuy)

  const elementButtonOrder = document.createElement('button')
  elementButtonOrder.innerHTML = 'finalizar orden'
  elementButtonOrder.setAttribute('class', 'button-order')
  elementCartProducts.appendChild(elementButtonOrder)
}

function searchIndeOf(id) {
  const index = cartArray.findIndex((element) => element.id == id)

  return index
}

// --------------UPDATE CART---------------------

function updateCart(cartIndexOf, property, change) {
  if (property == 'quantity') {
    if (
      change === 'plus' &&
      cartArray[cartIndexOf][property] < cartArray[cartIndexOf].stock
    ) {
      cartArray[cartIndexOf][property]++
      console.log(cartArray[cartIndexOf].quantity)
    }

    if (change === 'minus' && cartArray[cartIndexOf][property] > 0) {
      cartArray[cartIndexOf][property]--
      console.log(cartArray[cartIndexOf].quantity)
    }
  }
  if (property === 'totalprice') {
    cartArray[cartIndexOf][property] =
      cartArray[cartIndexOf].quantity * cartArray[cartIndexOf].price
  }
  if (property === 'stock' && cartIndexOf === 'all') {
    cartArray.forEach((element) => {
      return (element.stock = element.stock - element.quantity)
    })
    const arrayStockChanged = cartArray.map((element) => {
      const { id, stock } = element
      return { id, stock }
    })
    console.log('soy el array de stock', arrayStockChanged)

    arrayStockChanged.forEach((element) => {
      const indexRecovery = searchIndexOfRecovery(element.id)
      recovery[indexRecovery].stock = element.stock
      localStorage.setItem('recovery', JSON.stringify(recovery))
    })
  }
}

// ---------------DELETE CART-------------------------
function deleteCart(cartIndexOf) {
  cartArray.splice(cartIndexOf, 1)
  localStorageInsert()
  if (cartArray.length == 0) {
    emptyCartDisplayOn()
  } else {
    createCart()
  }
}

// ------------------LOCAL STORAGE FUNCTIONS----------------
function localStorageInsert() {
  localStorage.setItem('cart', JSON.stringify(cartArray))
}

// ---------------FIND INDEX--------------------
function searchIndexOfRecovery(id) {
  const index = recovery.findIndex((element) => element.id == id)
  return index
}

function updateTotalUnitsIcon() {
  totalUnits = totalUnitsInArray(cartArray)
  if (Number(totalUnits) !== 0) {
    elementTotalUnits.style.display = 'flex'
    elementTotalUnits.textContent = totalUnits
  } else {
    elementTotalUnits.style.display = 'none'
  }
}
