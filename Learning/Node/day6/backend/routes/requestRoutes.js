import express from "express"
import { getRegister, registerData } from "../controllers/requestController.js"

const routes = express.Router()
// ! End Point
// ! register API = http://localhost:5000/api/register/user
// ! getREgister API = http://localhost:5000/api/register/getuser

routes.post("/user",registerData)
routes.get("/getuser",getRegister)

export default routes