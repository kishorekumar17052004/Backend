import mongoose from "mongoose";

const connectDB = async()=>{
  try {
    const db  = await mongoose.connect(process.env.MONGODB_URI)
    console.log(`Database Connected Successfully ${db.connection.host}`)
  } catch (error) {
    console.log(`Database Connecention failed`,error.message)
    process.exit(1)
  }
}
export default connectDB;