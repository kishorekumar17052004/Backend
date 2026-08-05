 import mongoose from "mongoose"

const crudSchema = new mongoose.Schema({
    username:String,
    useremail:String,
    userage:Number

},{timestamps:true}) 

const crudModel = mongoose.model("cruduser" , crudSchema)

export default crudModel;