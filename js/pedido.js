 const carro = new Carrito();
 const carrito = document.getElementById('carrito');
 const productos = document.getElementById('lista-productos');
 const listaProductos = document.querySelector('#lista-carrito tbody');
 const vaciarCarritoBtn = document.getElementById('vaciar-carrito');
 const procesarPedidoBtn = document.getElementById('procesar-pedido');

 cargarEventos();
 function cargarEventos(){
     //agregar al carrito
     productos.addEventListener('click', (e)=>{carro.comprarProducto(e)});
     //eliminar producto
     carrito.addEventListener('click', (e)=>{carro.eliminarProducto(e)});
     //vaciar carrito completo
     vaciarCarritoBtn.addEventListener('click', (e)=>{carro.vaciarCarrito(e)});
     //muestra el local storage
     document.addEventListener('DOMContentLoaded', carro.leerLocalStorage());
     procesarPedidoBtn.addEventListener('click', (e)=>{carro.procesarPedido(e)});
}