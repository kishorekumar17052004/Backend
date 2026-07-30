import mongoose from "mongoose";


const userSchema = await new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true
    },
    age:{
        type:Number,
        required:true
    }
},{timestamps:true})

const userModel = mongoose.model("student",userSchema)

export default userModel 