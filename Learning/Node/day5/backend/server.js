import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import authRoute from "./routes/authRoutes.js"

dotenv.config()

const app = express()


app.use(cors())
app.use(express.json())

app.use("/api/auth",authRoute)

const PORT = process.env.PORT || 3000

const server = app.listen(PORT)

server.on("listening", () => {
    console.log(`server running on http://localhost:${PORT}`)
})

server.on("error", (error) => {
    console.error(`Failed to start server: ${error.message}`)
})

// with api = http://localhost:5000/api/auth
