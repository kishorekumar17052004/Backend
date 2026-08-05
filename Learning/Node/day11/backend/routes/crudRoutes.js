import express from "express"
import { createData , getData} from "../controllers/crudControllers.js"


const routes = express.Router()


//! post api for create users =http://localhost:5000/api/users/createData 
routes.post("/createData",createData)

//! get api for create users =http://localhost:5000/api/users/info
routes.get("/info",getData)

export default routes