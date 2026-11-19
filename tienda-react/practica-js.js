const producto = [
 { id: 1, nombre: 'Mouse', precio: 50000, categoria: 'Perifericos', stock: 5 },
 { id: 2, nombre: 'Teclado', precio: 90000, categoria: 'Perifericos', stock: 0 },
 { id: 3, nombre: 'Monitor', precio: 300000, categoria: 'Perifericos', stock: 2 },
 { id: 4, nombre: 'Auriculares', precio: 150000, categoria: 'Perifericos', stock: 10 },
 { id: 5, nombre: 'Procesador', precio: 500000, categoria: 'Componentes', stock: 3 },
 { id: 6, nombre: 'Placa de video', precio: 800000, categoria: 'Componentes', stock: 1 },
 { id: 7, nombre: 'Memoria RAM', precio: 200000, categoria: 'Componentes', stock: 0 },
 { id: 8, nombre: 'Disco duro', precio: 250000, categoria: 'Componentes', stock: 4 },
 { id: 9, nombre: 'Fuente de poder', precio: 150000, categoria: 'Componentes', stock: 2 },
 { id: 10, nombre: 'Gabinete', precio: 100000, categoria: 'Componentes', stock: 5 }
];

//listo

const hayAgotados = producto.some(producto => producto.stock === 0); 
const preciosValidos = producto.some(producto => producto.precio > 1000000); 
const valorInventario = producto.every( producto => producto.precio > 0);
const stockValido = producto.every( producto => producto.stock >= 0);

const totalInventario = producto.reduce(
(total, producto) => total + producto.precio * producto.stock, 
0 
);

console.log('Hay productos agotados:',  hayAgotados);
console.log('Hay productos con precio mayor a 1 millón:', preciosValidos);
console.log('Todos los productos tienen precio mayor a 0:', valorInventario);
console.log('Todos los productos tienen stock mayor o igual a 0:', stockValido);
console.log('Valor total del inventario:', totalInventario);

//La diferencia entre console.log y return es que console.log se utiliza para mostrar información en la consola,
// mientras que return se utiliza para devolver un valor desde una función. 