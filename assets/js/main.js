const productsItem = [
    {
      id: 1,
      name: 'Hoodies',
      price: 14.00,
      image: 'assets/images/featured1.png',
      category: 'hoodies',
      quantity: 10
    },
    {
      id: 2,
      name: 'Shirts',
      price: 24.00,
      image: 'assets/images/featured2.png',
      category: 'shirts',
      quantity: 15
    },
    {
      id: 3,
      name: 'Sweatshirts',
      price: 24.00,
      image: 'assets/images/featured3.png',
      category: 'shirts',
      quantity: 20
    }
  ]


  let loadComponet = ()=>{

    let loader = document.getElementById('load')
    setTimeout(() => {
      loader.classList.add('hide')
    }, 3000);
    
  }
  document.addEventListener('DOMContentLoaded',()=>{
    loadComponet()
  })



  const body = document.body
  const header = document.getElementById('header')

  window.addEventListener('scroll',()=>{
    if (scrollY >=55) {
      header.classList.add('scroll-bg')
    }else{
      header.classList.remove('scroll-bg')
    }
  })


const btnThemeSun = document.getElementById('btn-theme-change')
const btnThemaDark = document.getElementById('btn-theme-luna')
const btnCarShopping = document.getElementById('btn-car-shopping')
const containerCarShopping = document.getElementById('container-car-shopping')
const btnCloseCarShopping = document.getElementById('btn-car-shopping-close')

  const darkThemeChange = ()=>{
    body.classList.toggle('dark')
    btnThemeSun.classList.toggle('desactive')
    btnThemaDark.classList.toggle('active')
  }
  
  btnThemeSun.addEventListener('click', () => darkThemeChange())
  btnThemaDark.addEventListener('click', () => darkThemeChange())

  btnCarShopping.addEventListener('click',()=> containerCarShopping.classList.add('position-cero'))
  btnCloseCarShopping.addEventListener('click',()=> containerCarShopping.classList.remove('position-cero'))


  // Home

  //CREAR LOS ELEMETOS
  const containerHome = document.getElementById('container-home')

  const sectionHomeImag = document.createElement('section')
  const subContainerImgHom = document.createElement('figure')
  const imagProducPrincipal = document.createElement('img')


  const sectionHomeDescription = document.createElement('section')
  const categoryProduct = document.createElement('h2')
  const titleProductHome = document.createElement('h1')
  const descriptionProductHome = document.createElement('p')
  const precioProductHome = document.createElement('h4')
  const containerBotonAddCarHome = document.createElement('div')
  const btnDiscoverHome = document.createElement('figure')
  const btnAddTocarHome =document.createElement('figure')

  
  //ASIGNACION DE CLASE
  
  containerHome.classList.add('container-home')

  sectionHomeImag.classList.add('container-imag-product-home')
  subContainerImgHom.classList.add('sub-container-imag-home')
  imagProducPrincipal.classList.add('imag-prodctus-home')

  sectionHomeDescription.classList.add('container-description-product-home')
  categoryProduct.classList.add('category-product')
  titleProductHome.classList.add('title-pructo-home')
  descriptionProductHome.classList.add('description-product-home')
  precioProductHome.classList.add('precio-product-home')
  containerBotonAddCarHome.classList.add('container-boton-addCar-home')
  btnDiscoverHome.classList.add('bt-discover-home')
  btnAddTocarHome.classList.add('bt-addt-car-home')


  // AGREAGANDO AL CONTENEDOR

  subContainerImgHom.appendChild(imagProducPrincipal)
  sectionHomeImag.appendChild(subContainerImgHom)
  containerHome.appendChild(sectionHomeImag)

  sectionHomeDescription.appendChild(categoryProduct)
  sectionHomeDescription.appendChild(titleProductHome)
  sectionHomeDescription.appendChild(descriptionProductHome)
  sectionHomeDescription.appendChild(precioProductHome)
  containerBotonAddCarHome.appendChild(btnDiscoverHome)
  containerBotonAddCarHome.appendChild(btnAddTocarHome)
  sectionHomeDescription.appendChild(containerBotonAddCarHome)
  containerHome.appendChild(sectionHomeDescription)
  

  productsItem.forEach((productos=>home(productos)))

  function home(objetoProduc) {
      imagProducPrincipal.src = objetoProduc.image
      categoryProduct.textContent = objetoProduc.category
      precioProductHome.textContent = `$ ${objetoProduc.price}.00`
  
    
      titleProductHome.textContent = 'Collections 2023'
      descriptionProductHome.textContent = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet excepturi iusto magni dolorum molestiae hic inventore fuga pariatur nemo porro ea quia cum nihil velit odit animi eum quasi, laudantium neque tempore earum maxime numquam facere minus! Doloremque nemo quidem sit '
    
      btnDiscoverHome.textContent = 'Discover'
      btnAddTocarHome.textContent = 'Add to Card'
        
  }


/* ------  CONTAINER FILTER -------*/

  const containerNavFilter = document.getElementById('container-filter')


  productsItem.forEach(prod=>filterItem(prod))

  function filterItem(arrayObje) {
    const containerNavitemFilter = document.createElement('aside')
    const titleItemFilter = document.createElement('h5')
    const descriptionItemFilter = document.createElement('h6')
  
    containerNavFilter.classList.add('container-filter')
    containerNavitemFilter.classList.add('container-item-filter')
    titleItemFilter.classList.add('title-item-filter')
    descriptionItemFilter.classList.add('description-item-filter')
  
    containerNavitemFilter.appendChild(titleItemFilter)
    containerNavitemFilter.appendChild(descriptionItemFilter)
  
    containerNavFilter.appendChild(containerNavitemFilter)

    titleItemFilter.id = arrayObje.id
    titleItemFilter.textContent = arrayObje.category
    descriptionItemFilter.textContent=`${arrayObje.quantity} Productos`

  }


  /* ------  CONTAINER Productos-------*/

  
 const containerProdruc = document.getElementById('container-productos')

 productsItem.forEach(produc =>productos(produc))

  function productos(objetProductos) {

  const cardContainer = document.createElement('div')

  const containerImagCard = document.createElement('figure')
  const imagProductCard =  document.createElement('img')
  
  const containerDescriptionProductCard = document.createElement('article')
  const btnAddCard = document.createElement('button')
  const containerPrecioProdCard = document.createElement('div')
  const precioProductCard = document.createElement('h3')
  const stcokProductCard = document.createElement('h6')
  const nameProductCard = document.createElement('h4')
  
  containerProdruc.classList.add('container-productos')
  cardContainer.classList.add('container-card')
  containerImagCard.classList.add('container-card-imag')
  imagProductCard.classList.add('imag-product-card')

  containerDescriptionProductCard.classList.add('container-descrip-produc-card')
  btnAddCard.classList.add('btn-add-card')
  containerPrecioProdCard.classList.add('container-precio-produc-card')
  precioProductCard.classList.add('precio-product-card')
  stcokProductCard.classList.add('stock-product-card')
  nameProductCard.classList.add('name-product-card')

  containerImagCard.appendChild(imagProductCard)
  cardContainer.appendChild(containerImagCard)


  containerDescriptionProductCard.appendChild(btnAddCard)
  containerPrecioProdCard.appendChild(precioProductCard)
  containerPrecioProdCard.appendChild(stcokProductCard)

  containerDescriptionProductCard.appendChild(containerPrecioProdCard)
  containerDescriptionProductCard.appendChild(nameProductCard)

  cardContainer.appendChild(containerDescriptionProductCard)

  containerProdruc.appendChild(cardContainer)

  cardContainer.id = objetProductos.id
  //btnAddCard.id = 'btnAddCar'

  btnAddCard.id = `botonCarAd${objetProductos.id}`
  imagProductCard.src = objetProductos.image
  precioProductCard.textContent = `$ ${objetProductos.price}.00`
  stcokProductCard.textContent = `Stock ${objetProductos.quantity}`
  nameProductCard.textContent = objetProductos.name

  btnAddCard.innerHTML = '+'
}


/* -------- ADD PRODUCTS TO CAR------- */

/*
document.querySelectorAll('#botonAddCar').forEach(
  button => button.addEventListener('click',()=> console.log('hola')))*/


const ids = document.querySelectorAll('.container-card')
const btnProd1 = document.querySelector('#botonCarAd1')
const btnProd2 = document.getElementById('#botonCarAd2')
const btnProd3 = document.getElementById('#botonCarAd3')

btnProd1.addEventListener('click',()=>addCarProduct(1))


const productoEnElCar = []
function addCarProduct(itemId) {

  let producSelecte = productoEnElCar.find(productos => productos.id===itemId)

  if (producSelecte) {
    
    let index = productoEnElCar.indexOf(producSelecte)
    productoEnElCar[index].quantitySelected++

  } else {

    const item = productsItem.find(item => item.id===itemId)
    item.quantitySelected = 1
    productoEnElCar.push(item)
  }
  
  productosAddCarShopping(productoEnElCar)
  console.log(productoEnElCar);
}













/* ------ CONTAINER CAR SHOPPING*/


const addCarShoppingPoduct = document.getElementById('container-productos-add')

 // productsItem.forEach(produc =>productosAddCarShopping(produc))

  function productosAddCarShopping(prodShopping) {

  const cardContainer = document.createElement('div')
  const containerImagCard = document.createElement('figure')
  const imagProductCard =  document.createElement('img')
  
  const containerDescriptionProductCard = document.createElement('article')
  const containerPrecioProdCard = document.createElement('div')
  const precioProductCard = document.createElement('h3')
  const stcokProductCard = document.createElement('h6')
  const nameProductCard = document.createElement('h4')

  const subTotalProduc = document.createElement('h3')

  const containerCantidadProduct = document.createElement('div')
  const btnMenos = document.createElement('button')
  const itemUnidadProduc = document.createElement('h3')
  const btnMas = document.createElement('button')

  const btnDelete = document.createElement('button')
    
  cardContainer.classList.add('container-card-shopp')
  containerImagCard.classList.add('container-card-imag-shopp')
  imagProductCard.classList.add('imag-product-card-shopp')

  containerDescriptionProductCard.classList.add('container-descrip-produc-card-shopp')
  containerPrecioProdCard.classList.add('container-precio-produc-card-shopp')
  precioProductCard.classList.add('precio-product-card-shopp')
  stcokProductCard.classList.add('stock-product-card-shopp')
  nameProductCard.classList.add('name-product-card-shopp')

  subTotalProduc.classList.add('sub-total-produc')

  containerCantidadProduct.classList.add('container-cant-produc')
  btnMenos.classList.add('btn-cantidad')
  itemUnidadProduc.classList.add('unidad-produc')
  btnMas.classList.add('btn-cantidad')

  btnDelete.classList.add('btn-remover')
  
  containerImagCard.appendChild(imagProductCard)
  cardContainer.appendChild(containerImagCard)

  containerDescriptionProductCard.appendChild(nameProductCard)
  
  containerPrecioProdCard.appendChild(stcokProductCard)
  containerPrecioProdCard.appendChild(precioProductCard)
 
  containerDescriptionProductCard.appendChild(containerPrecioProdCard)

  containerDescriptionProductCard.appendChild(subTotalProduc)

  containerCantidadProduct.appendChild(btnMas)
  containerCantidadProduct.appendChild(itemUnidadProduc)
  containerCantidadProduct.appendChild(btnMenos)
  
  containerDescriptionProductCard.appendChild(containerCantidadProduct)

  cardContainer.appendChild(containerDescriptionProductCard)
  cardContainer.appendChild(btnDelete)

  addCarShoppingPoduct.appendChild(cardContainer)

  
 

  imagProductCard.src = prodShopping.image

  nameProductCard.textContent = prodShopping.name
  stcokProductCard.textContent = `Stock ${prodShopping.quantity}`
  precioProductCard.textContent = `$ ${prodShopping.price}.00`
  
  btnMas.textContent = '+'
  btnMenos.textContent = '-'
  itemUnidadProduc.textContent = '10 units'
  subTotalProduc.textContent = '$500'

  btnDelete.innerHTML ='&#128465'
 

}