
let carrito = [] ///aqui iran los items del carrito
let stock = [] ///aqui iran los productos

////traerme los elementos del dom
const tabla = document.getElementById('items');
const selectProductos = document.getElementById('productos')
const btnAgregar = document.getElementById('agregar');
const btnOrdenar = document.getElementById('ordenar');
const btnVaciar = document.getElementById('vaciar');
const total = document.getElementById('total');


///ejecutar una vez para cargar el localStorage con stock

stock.push(new Producto('cafe', 600));
stock.push(new Producto('te', 400));
stock.push(new Producto('medialuna', 80));
stock.push(new Producto('tostado',1000));
stock.push(new Producto('licuado de fruta', 850));
stock.push(new Producto('jugo de naranja', 500));
stock.push(new Producto('pinta', 750));
stock.push(new Producto('dona', 200));
stock.push(new Producto('cookie', 250));
stock.push(new Producto('scon',150));

localStorage.setItem('stock',JSON.stringify(stock));



allEventListeners();


function allEventListeners()
{
  ////agregamos un escuchador del evento cuando el DOM se carga
  window.addEventListener('DOMContentLoaded', traerItems);

  btnVaciar.addEventListener('click', vaciarCarrito);

  ///event listener de agregar un producto al carrito
  btnAgregar.addEventListener('submit', (e) =>
  {
    e.preventDefault(); ///evito el refresque
    const productoSelected = stock[selectProductos.value];
    ///me fijo si el item ya fue insertado en el carrito
    if (carrito.find((item) => {return item.producto.nombre === productoSelected.nombre}) === undefined)
    {
      const nuevoItem = new Item(productoSelected,1);
      carrito.push(nuevoItem);
      localStorage.setItem('carrito',JSON.stringify(carrito)); ///actualizo el localstorage con el nuevo elemento agregado
      newRow(nuevoItem);
    }

  });

}


function popularDropdown()
{
  ///cargamos el dropdown
  stock.forEach((producto) => {
    const option = document.createElement('option');
    option.innerText = `${producto.nombre} : ${producto.precio}`;
    option.value = stock.indexOf(producto); ///con esto nos guiamos para saber que objeto del array selecciona! 
    selectProductos.appendChild(option);
  });
}


function traerItems()
{
  ///traer los productos del localStorage
  ///si no hay nada inicializara stock en vacio []
  stock = JSON.parse(localStorage.getItem('stock')) || []
  popularDropdown();
  carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  actualizarTablaCarrito();  

}


/* ///guardo el array en el localStorage
localStorage.setItem('stock',JSON.stringify(stock)); */


function actualizarTablaCarrito()
{
  tabla.innerHTML = '';
  total.innerText = 0;
  carrito.forEach((item) => {
    newRow(item);
  });
}



function newRow(item)
{
  /* Falta esto!! te animas a hacerlo? */
}


function vaciarCarrito()
{
      Swal.fire(
        {
            title:"desea eliminar los items del carrito",
            confirmButtonText: "Si",
            showCancelButton: true,
            cancelButtonText: "Nop"
      }).then((resultado) => {
        if(resultado.isConfirmed){
          carrito = [];
        localStorage.setItem('carrito',JSON.stringify(carrito));
        actualizarTablaCarrito();
        Swal.fire({
          title: "Carrito vaciado!",
          icon: "success"
        });
        }
      });
      
}