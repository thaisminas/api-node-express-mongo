import mongoose from "mongoose";


mongoose.connect("mongodb+srv://thais2929:yLeI2WJXyHO76ZpD@cluster0.ggebz.mongodb.net/alura-node")

let db = mongoose.connection;

export default db;