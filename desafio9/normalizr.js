import normalizr from 'normalizr';
import { normalize, denormalize, schema } from 'normalizr';
import { readFile, writeFile } from "fs/promises";


//ESTE JSON LO SAQUÉ DIRECTAMENTE DE mensajesOriginal.json, el archivo que trae los datos directos de la base de datos (ver server.js)
const myJson = {
    "id": "mensajes",
    "mensajes": [
        {
          "_id": "62cc1126cb475a21a4fd5a6e",
          "author": {
            "email": "ariel@hotmail.com",
            "nombre": "Ariel",
            "apellido": "Dumpierres",
            "edad": "42",
            "alias": "ArielD",
            "avatar": "no"
          },
          "text": "Hola",
          "time": "11/7/2022, 09:01:42"
        },
        {
          "_id": "62cc112ecb475a21a4fd5a70",
          "author": {
            "email": "ariel@hotmail.com",
            "nombre": "Ariel",
            "apellido": "Dumpierres",
            "edad": "42",
            "alias": "ArielD",
            "avatar": "no"
          },
          "text": "probando",
          "time": "11/7/2022, 09:01:50"
        },
        {
          "_id": "62cc117eeec032884c1d24ff",
          "author": {
            "email": "pipi@hotmail.com",
            "nombre": "pipi",
            "apellido": "pi",
            "edad": "38",
            "alias": "pi",
            "avatar": "no"
          },
          "text": "holitas",
          "time": "11/7/2022, 09:03:10"
        },
        {
          "_id": "62cc1185eec032884c1d2501",
          "author": {
            "email": "pipi@hotmail.com",
            "nombre": "pipi",
            "apellido": "pi",
            "edad": "38",
            "alias": "pi",
            "avatar": "no"
          },
          "text": "ok",
          "time": "11/7/2022, 09:03:17"
        },
        {
          "_id": "62cc43befcd933a174acab23",
          "author": {
            "email": "ariel@hotmail.com",
            "nombre": "Ariel",
            "apellido": "Dumpierres",
            "edad": "42",
            "alias": "ArielD",
            "avatar": "no"
          },
          "text": "acá de nuevo",
          "time": "11/7/2022, 12:37:34"
        },
        {
          "_id": "62cc47a4d6b3dc405cd3d568",
          "author": {
            "email": "nn@hotmail.com",
            "nombre": "Nn",
            "apellido": "Natalio Natalia",
            "edad": "1",
            "alias": "Nn",
            "avatar": "no"
          },
          "text": "mmmm",
          "time": "11/7/2022, 12:54:12"
        }
      ]
  }


  const newPS = (value, parent, key) => {
    console.log(parent.author)
}

const authorSchema = new normalizr.schema.Entity('author', {}, {idAttribute: 'alias'})

const textSchema = new normalizr.schema.Entity('text', {'author': authorSchema}, {idAttribute: '_id',});

const mensajeSchema = new normalizr.schema.Entity('mensajes', {'mensajes': [textSchema]})

const normalizedChat= normalizr.normalize(myJson, mensajeSchema);



console.log('#### LONGITUD DE ARCHIVO SIN NORMALIZAR ####')
console.log(JSON.stringify(myJson, null, 2).length)
console.log('#### LONGITUD DE ARCHIVO NORMALIZADO ####')
console.log(JSON.stringify(normalizedChat, null, 2).length)


//ACÁ NORMALIZO LOS DATOS QUE VIENEN DE LA BASE DE DATOS
// await writeFile('./mensajesNormalizados.json', JSON.stringify(normalizedChat, null, 2))
//  .then(_ => console.log('ok'))

export const normalizedMessages = (data) => {
    return normalize(data, chatSchema)
}