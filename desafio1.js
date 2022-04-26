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
   return this.mascotas.push()
  }

  countMascotas (){
  let length =  this.mascotas.length;
  }
  
}

const librosDePepe = [{autor:'x', titulo:'y'}]
const mascotasDePepe = ['perro','loro']
  const pepe = new Persona('Pepe', 'Fernandez',librosDePepe,mascotasDePepe);
  console.log(pepe);
  
  pepe.getFullName();
  const nuevamascota= 'rata'
  pepe.addMascotas(nuevamascota)
  console.log(pepe.mascotas)

