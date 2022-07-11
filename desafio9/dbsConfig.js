import mongoose from "mongoose";

//MONGODB CONFIG
export const db = mongoose.connect("mongodb+srv://Ariel:lospipis123@cluster0.wfl5s.mongodb.net/?retryWrites=true&w=majority", 
{ useNewUrlParser: true })

const chatSchema = new mongoose.Schema({
    author: {type: Object, required: true },
    text: {type: String, required: true},
    time: {type: String, required: true}
}, {
    versionKey: false 
})

export const msgsModel = mongoose.model("Msgs", chatSchema);


// id: {type: String, required: true, max: 25},
// nombre: {type: String, required: true, max: 20},
// apellido: {type: String, required: true},
// edad: {type: Number, required: true, max: 100},
// alias: {type: String, required: true, max: 100},
// avatar: {type: String, required: true, max: 10},
// },