import dotenv from "dotenv"
import  { createServer } from "http"

dotenv.config()
const PORT = process.env.PORT || 6000

const app = createServer((req,res)=>{
     res.end("hello world")
})

app.listen(PORT,()=>{
    console.log(`server run on http://localhost:${PORT}`)
})

