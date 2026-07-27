import express from "express"
import { register } from "../controllers/authControllers.js"

// with end point
// with api = http://localhost:5000/api/auth/register
const routes = express.Router()

routes.post("/register",register)

export default routes