import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import connectDB from "./config/db.js"
import authRoute from "./routes/authRoutes.js"


dotenv.config()

const app = express()
connectDB()

app.use(cors())

app.use(express.json())

//! API = http://localhost:5000/api/users
app.use("/api/users",authRoute)




const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`server running on http://localhost:${PORT}`)
})


