
import mongoose from "mongoose";
import admin from "firebase-admin";
import { readFile } from "fs/promises";
export const FieldValue = admin.firestore.FieldValue;

const serviceAccount = JSON.parse(
    await readFile(
        new URL("./firebaseKEY.json", import.meta.url)
    )
) 

//FIREBASE CONFIG
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });


export const dbFb = admin.firestore();
export const queryProds = dbFb.collection("products");
export const queryCart = dbFb.collection("cart");


//MONGODB CONFIG
export const db = mongoose.connect("mongodb+srv://ariel:lospipis2903@cluster0.0luud.mongodb.net/?retryWrites=true&w=majority", 
{ useNewUrlParser: true })

const productSchema = new mongoose.Schema({
    name: {type: String, required: true, max: 25},
    price: {type: Number, required: true},
    stock: {type: Number, required: true},
    photo: {type: String, required: true},
    code: {type: String, required: true, max: 10},
    desc: {type: String, required: true, max: 100},
})

export const productsModel = mongoose.model("Products", productSchema);

const cartSchema = new mongoose.Schema({
    products: {type: [{
        name: {type: String, required: true, max: 25},
        price: {type: Number, required: true},
        stock: {type: Number, required: true},
        photo: {type: String, required: true},
        code: {type: String, required: true, max: 10},
        desc: {type: String, required: true, max: 100},
    }]}
}, { timestamps: true })

export const cartModel = mongoose.model("Carts", cartSchema);