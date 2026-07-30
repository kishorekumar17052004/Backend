import express from "express" 
import { createData ,getData } from "../controllers/userContrillers.js"

const routes  = express.Router()
// ! End Point = http://localhost:5000/api/user/register
routes.post("/register", createData)

// ! End Point = http://localhost:5000/api/user/info/
routes.get("/info",getData)

export default routes 