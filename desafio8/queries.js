use ecommerce

// LAS LINEAS COMENTADAS HACEN REFERENCIA A LOS ITEMS SOLICITADOS EN EL DESAFIO

//1 y 2
const mensajes = [
    {text: "Hola", email: "gachi@hotmail.com"},
    {text: "hola", email: "pachi@hotmail.com"},
    {text: "de que signo sos?", email: "gachi@hotmail.com"},
    {text: "sagitario...", email: "pachi@hotmail.com"},
    {text: "noooo!encerio?", email: "gachi@hotmail.com"},
    {text: "seeee", email: "pachi@hotmail.com"},
    {text: "no te la puedo creer", email: "gachi@hotmail.com"},
    {text: "-", email: "pachi@hotmail.com"},
    {text: "??", email: "gachi@hotmail.com"},
    {text: "...", email: "gachi@hotmail.com"}
]

db.mensajes.insertMany(mensajes)

const productos = [
    {name: "cacerola cuadrada", price: 1700, 
    stock: 5, photo: "none", code: "fhtdr", desc: "30 cm"},
    {name: "cacerola grande", price: 1280, 
    stock: 5, photo: "none", code: "svgdr", desc: "diametro 30"},
    {name: "Cacerola mediana", price: 4990, 
    stock: 5, photo: "none", code: "crdavnts", desc: "diametro 25"},
    {name: "Cacerola chica", price: 150, 
    stock: 5, photo: "none", code: "dvl", desc: "diametro 15"},
    {name: "sarten grande", price: 1230, 
    stock: 5, photo: "none", code: "nvcts1", desc: "diametro 30"},
    {name: "sarten mediana", price: 2300, 
    stock: 5, photo: "none", code: "mbznts", desc: "-"},
    {name: "sarten chica", price: 120, 
    stock: 5, photo: "none", code: "ldlfn", desc: "diametro 20"},
    {name: "flip", price: 200, 
    stock: 0, photo: "none", code: "gss", desc: "flipear"},
    {name: "bifera", price: 3000, 
    stock: 5, photo: "none", code: "trr1", desc: "rectangualar"},
    {name: "budinera", price: 1000, 
    stock: 5, photo: "none", code: "zr3am", desc: "Grande"},
]

db.productos.insertMany(productos)

//3
db.mensajes.find()

//4
db.productos.count()
db.mensajes.count()


//5
//a
db.productos.insertOne({name: "canasto freidor", price: 1300, 
stock: 5, photo: "none", code: "zr8am", desc: "diametro 25"})

//b i
db.productos.find({price: {$lt: 1000}})

//b ii
db.productos.find({ $and: [{price: {$gte: 1000}}, {price: {$lte: 3000}}]}) 

//b iii
db.productos.find({price: {$gt: 3000}})

//b iv
db.productos.find({}).sort({price:1}).skip(2).limit(1)

//c
db.productos.updateMany({}, {$set: {stock: 100}})

//d
db.productos.updateMany({price: {$gt: 4000}}, {$set: {stock: 0}})

//e
db.productos.deleteMany({price: {$lt: 1000}})

//6
db.createUser(
    {
        user: "pepe",
        pwd: "asd456",
        roles: [
            { role: "read", db: "ecommerce"}
        ]
    }
)