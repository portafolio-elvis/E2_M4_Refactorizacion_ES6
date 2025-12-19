class Libro {
  constructor(titulo, autor, estado) {
    this.titulo = titulo;
    this.autor = autor;
    this.estado = estado;
  }

  mostrarInfo() {
    console.log(
      `El libro "${this.titulo}" de ${this.autor} se encuentra ${this.estado}`
    );
  }
}

const inventario = [];

let seguirAgregando = true;

while (seguirAgregando) {
  let titulo = prompt("Escriba el título del libro:");
  let autor = prompt("Escriba el autor del libro:");
  let estado = prompt("Escriba el estado (Disponible / Prestado):");

  const nuevoLibro = new Libro(titulo, autor, estado);

  inventario.push(nuevoLibro);

  seguirAgregando = confirm("¿Agregar otro libro?");
}

console.log("--> Inventario de la Biblioteca <--");

for (const libro of inventario) {
  libro.mostrarInfo();
}
