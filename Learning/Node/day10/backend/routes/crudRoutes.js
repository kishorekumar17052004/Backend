import express from "express"
import { createData } from "../controllers/crudControllers.js"


const routes = express.Router()

routes.post("/createData",createData)

export default routes