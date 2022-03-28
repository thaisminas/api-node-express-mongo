import mongoose from "mongoose";


mongoose.connect("mongodb+srv://thais2929:1234@cluster0.ggebz.mongodb.net/alura-node")

let db = mongoose.connection;

export default db;