import mongoose from "mongoose";

const authSchema = new mongoose.Schema({
    username:{
        type:String,
        trim:true,
        required:true
    },
    email: {
        type: String,
        trim: true,
        required: true,
        lowercase: true
    },
    useremail: {
        type: String,
        trim: true,
        required: true,
        lowercase: true,
        unique: true
    },
    userpassword:{
        type:String,
        trim:true

    }
},{timestamps:true})

const userModel = mongoose.model("authuser",authSchema)

export default userModel;
