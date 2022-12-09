      const productos = [
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
        const containerHome = document.querySelector('#container-home')

       
       
       let contador = 0

       setInterval(() => {
        contador++
        productos.filter(prod => {
      
          if (prod.id==contador) {
             const fragmentHome = `<section class="container-imag-product-home">
              <figure class="sub-container-imag-home">
              <img src="${prod.image}" alt="" class="imag-prodctus-home">
              </figure> 
         </section>

        <section class="container-description-product-home">
            <h2 class="category-product">${prod.name}</h2>
            <h1 class="title-pructo-home">Collections 2023</h1>
            <p class="description-product-home">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate assumenda quod, molestiae officiis illum repellendus dolorum a ut illo velit reprehenderit laudantium impedit eum accusantium animi labore voluptatem doloribus distinctio?</p>
            <h4 class="precio-product-home">$.${prod.price}.00</h4>
            <div class="container-boton-addCar-home">
                <figure class="bt-discover-home">Discover</figure>
                <figure class="bt-addt-car-home">Add to Card</figure>
            </div>
        </section>`
            
            containerHome.innerHTML = fragmentHome

          } else if (contador>3) {
            contador = 0
          }
          
        
          
        })

       }, 5000);
        
   


      /* ------  CONTAINER FILTER -------*/


          const containerNavFilter = document.getElementById('container-filter')
          
          productos.forEach(prod =>{
            const {id,name,category} = prod

            const fragmentFilter = `<aside id="container-item-filter" class="container-item-filter">
          <h5 class="title-item-filter" onclick="btnfiltrarProducto(${id})">${name}</h5>
          <h6 class="description-item-filter">${category}</h6>
        </aside>`

          containerNavFilter.innerHTML += fragmentFilter

          })



          // filtar por productos
          function btnShowProduc(){
            containerProdructos.innerHTML = ''
            productos.forEach(produc =>{
              const {id,name,price,image,quantity} = produc
        
              const fragmentItemProduct = `
              <div class="container-card">
                            <figure class="container-card-imag">
                                <img src="${image}" alt="" class="imag-product-card">
                            </figure>
                            <article class="container-descrip-produc-card">
                                <button class="btn-add-card" onclick="addProductCard(${id})">+</button>
                                <h4 class="name-product-card">${name}</h4>
                                <div class="container-precio-produc-card">
                                    <h3 class="precio-product-card">$.${price}.00</h3>
                                    <h6 class="stock-product-card">Stock ${quantity}</h6>
                                </div>
                            </article>
                        </div>`
              containerProdructos.innerHTML += fragmentItemProduct
            
            })
          }

          function btnfiltrarProducto(id) {
            
        productos.filter(prod =>{
          if (prod.id===id) {
                const fragmentItemProduct = `
                      <div class="container-card">
                      <figure class="container-card-imag">
                          <img src="${prod.image}" alt="" class="imag-product-card">
                      </figure>
                      <article class="container-descrip-produc-card">
                          <button class="btn-add-card" onclick="addProductCard(${id})">+</button>
                          <h4 class="name-product-card">${prod.name}</h4>
                          <div class="container-precio-produc-card">
                              <h3 class="precio-product-card">$.${prod.price}.00</h3>
                              <h6 class="stock-product-card">Stock ${prod.quantity}</h6>
                          </div>
                      </article>
                  </div>`
        containerProdructos.innerHTML = fragmentItemProduct 
              }
            
          }) 
          
      }


          


        /* ------  CONTAINER Productos-------*/
        let carShopping =[]
        
      const containerProdructos = document.querySelector('#container-productos')
      const cantidadProduCar = document.querySelector('#cantidad-produc-car')

      document.addEventListener('DOMContentLoaded',()=>{
            carShopping = JSON.parse(localStorage.getItem('carrito')) || []
            mostrarProductosCarShopping()
      })

      productos.forEach(produc =>{
        const {id,name,price,image,quantity} = produc

        const fragmentItemProduct = `
        <div class="container-card">
                      <figure class="container-card-imag">
                          <img src="${image}" alt="" class="imag-product-card">
                      </figure>
                      <article class="container-descrip-produc-card">
                          <button class="btn-add-card" onclick="addProductCard(${id})">+</button>
                          <h4 class="name-product-card">${name}</h4>
                          <div class="container-precio-produc-card">
                              <h3 class="precio-product-card">$.${price}.00</h3>
                              <h6 class="stock-product-card">Stock ${quantity}</h6>
                          </div>
                      </article>
                  </div>`
        containerProdructos.innerHTML += fragmentItemProduct

      })

      


      function addProductCard(id) {

        const itemProduct = productos.find(prod => prod.id===id)
        carShopping.push(itemProduct)
        mostrarProductosCarShopping()
      }



      // CARRITO DE COMPRA 


      const mostrarProductosCarShopping =()=>{
        const layoutCarShopping = document.querySelector('#container-productos-add')

        layoutCarShopping.innerHTML = ''
        
        carShopping.forEach(prod =>{

          const {id,name,price,image,category,quantity} = prod

          const fragmentCarShopping = `<div class="container-card-shopp">
          <figure class="container-card-imag-shopp">
              <img src="${image}" alt="" class="imag-product-card-shopp">
          </figure>

          <article class="container-descrip-produc-card-shopp">
              <h4 class="name-product-card-shopp">${name}</h4>
              <div class="container-precio-produc-card-shopp">
                  <h6 class="stock-product-card-shopp">Stock ${quantity}</h6>
                  <h3 class="precio-product-card-shopp">$.${price}.00</h3> 
              </div>
              <h3 class="sub-total-produc"></h3>
              <div class="container-cant-produc">
                  <button class="btn-cantidad">-</button>
                  <h3 class="unidad-produc"></h3>
                  <button class="btn-cantidad">+</button>
              </div>
          </article>
          <div class="container-btn-remover">
                  <btutton class="btn-remover" onclick="elimarProductoCar(${id})"><svg class="svg-remover" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 50.25 50.25" style="enable-background:new 0 0 50.25 50.25;" xml:space="preserve"><g><path d="M42.625,14.25h-35c-1.657,0-3-1.343-3-3s1.343-3,3-3h35c1.657,0,3,1.343,3,3 S44.282,14.25,42.625,14.25z"></path><g><path  d="M30.625,50.25h-10c-7.196,0-14-6.804-14-14v-17c0-1.657,1.343-3,3-3s3,1.343,3,3v17 c0,3.888,4.112,8,8,8h10c3.706,0,6-4.152,6-8v-17c0-1.657,1.343-3,3-3s3,1.343,3,3v17C42.625,43.132,38.137,50.25,30.625,50.25z"></path><path  d="M19.625,40.25c-1.657,0-3-1.343-3-3v-17c0-1.657,1.343-3,3-3s3,1.343,3,3v17 C22.625,38.907,21.282,40.25,19.625,40.25z"></path><path  d="M29.625,40.25c-1.657,0-3-1.343-3-3v-17c0-1.657,1.343-3,3-3s3,1.343,3,3v17 C32.625,38.907,31.282,40.25,29.625,40.25z"></path></g><path  d="M30.792,12.25c-1.657,0-3-1.343-3-3c0-1.792-1.458-3.25-3.25-3.25s-3.25,1.458-3.25,3.25 c0,1.657-1.343,3-3,3s-3-1.343-3-3c0-5.101,4.149-9.25,9.25-9.25s9.25,4.149,9.25,9.25C33.792,10.907,32.449,12.25,30.792,12.25z"></path></g></svg></btutton>
              </div>
      </div> `

            layoutCarShopping.innerHTML += fragmentCarShopping

        })

        //Contador 
        cantidadProduCar.textContent = carShopping.length
        
        guardarStorage()
      }


      function elimarProductoCar(id) {
        const juegoId = id
        
        carShopping = carShopping.filter(prod => prod.id !==juegoId)
        mostrarProductosCarShopping()
      }

      function guardarStorage() {
        localStorage.setItem('carrito', JSON.stringify(carShopping))
      }




      /* -------- ADD PRODUCTS TO CAR------- */

      /*
      const productoEnElCar = []
      function addCarProduct(itemId) {

        let producSelected = productoEnElCar.find(productos => productos.id===itemId)

        if (producSelected) {
          
          let index = productoEnElCar.indexOf(producSelected)
          productoEnElCar[index].quantitySelected++

        } else {

          const item = productsItem.find(item => item.id===itemId)
          item.quantitySelected = 1
          productoEnElCar.push(item)
        }
        
        productosAddCarShopping(productoEnElCar)
        console.log(productoEnElCar);
      }*/









