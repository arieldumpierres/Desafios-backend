class Persona {
  constructor(nombre, apellido, libros, mascotas) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascotas = mascotas;
  }

  getFullName() {
      console.log(`${this.nombre} ${this.apellido}`)
  }

  addMascotas(){
     this.mascotas.push(nuevamascota)
  }

  countMascotas (){
  let length =  this.mascotas.length;
   console.log(length)
  }
  
addBook (){
     this.libros.push(nuevoLibro)
}
getBooks(){
    this.libros.map(titulos)
    function titulos(item){
        const arraytitulos= [item.titulo]
        return console.log(arraytitulos)
    }
}

}

const librosDePepe = [{autor:'x', titulo:'y'}]
const mascotasDePepe = ['perro','loro']
  const pepe = new Persona('Pepe', 'Fernandez',librosDePepe,mascotasDePepe);
  console.log(pepe);
  
  pepe.getFullName();
  const nuevamascota= 'rata'
  const nuevoLibro = {autor:'nn', titulo:'el mio cid'}
  pepe.addMascotas(nuevamascota.mascotasDePepe)
  console.log(pepe.mascotas)
pepe.countMascotas()
pepe.addBook(nuevoLibro.librosDePepe)
console.log(pepe.libros)
pepe.getBooks()
