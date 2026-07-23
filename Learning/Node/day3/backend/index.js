import  { createServer } from "http"
import dotenv from "dotenv"

dotenv.config()

const PORT = process.env.PORT || 6000

const app = createServer((req,res)=>{
    res.end("server running ")
})

app.listen(PORT,()=>{
    console.log(`server running on http://localhost:${PORT}`)
})