import express from "express"
import { createUser } from "../controllers/authControllers.js";

const routes = express.Router()

//! register post api end point = http://localhost:5000/api/users/register
routes.post("/register",createUser)


export default routes;
