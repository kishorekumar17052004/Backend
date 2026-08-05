import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import connectDB from "./config/db.js"
import crudRoute from  "./routes/crudRoutes.js"


dotenv.config()

const app = express()
connectDB()

app.use(cors())

app.use(express.json())

//! API = http://localhost:5000/api/users
app.use("/api/users",crudRoute)




const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`server running on http://localhost:${PORT}`)
})


