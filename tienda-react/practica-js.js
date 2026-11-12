const productos = [
    { id: 1, nombre: "Mouse", precio: "50000", stock: 5 },
];

productos.forEach((producto, indice) => {
  console.log(`${indice + 1}. Nombre: ${producto.nombre} | Precio: $${producto.precio} | Stock: ${producto.stock}`);
});

function Miproducto(id, nombre, precio, stock) {
    return { id, nombre, precio, stock };
}
const productoMostrar = Miproducto(1, "Mouse", "$50000", 5);
console.log("El producto es:" + productoMostrar.nombre);

//La diferencia entre console.log y return es que console.log se utiliza para mostrar información en la consola,
// mientras que return se utiliza para devolver un valor desde una función. 
