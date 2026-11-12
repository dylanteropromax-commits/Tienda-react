const nombreApellido = (nombre, apellido) => {
   return nombre + " " + apellido;

};
    

const nombreCompleto = nombreApellido("Dilan", "Vargas");
console.log(nombreCompleto);

//La diferencia entre console.log y return es que console.log se utiliza para mostrar información en la consola,
// mientras que return se utiliza para devolver un valor desde una función. 