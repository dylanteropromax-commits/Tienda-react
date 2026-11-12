function calcularTotal(nota1, nota2, nota3) {
 const total = (nota1 + nota2 + nota3) / 3;
 return total;
}
const resultado = calcularTotal(8, 3, 5);

console.log( "El promedio es de:" + Math.round(resultado));

//La diferencia entre console.log y return es que console.log se utiliza para mostrar información en la consola,
// mientras que return se utiliza para devolver un valor desde una función. 