import axios from "axios"

const API_BASE_URL  = import.meta.env.VITE_API_BASE_URL;

const userApi = axios.create({
  baseURL: `${API_BASE_URL}`,
  headers: {
    "Content-Type": "application/json",
  },
});
 
//* post /api/user/create
export const createData = async(userData)=>{
     const response = await  userApi.post("/create",userData)
     return response.data
}

//* get /api/user/info

export const getData = async()=>{
   const response = await userApi.get("/info")

   return response.data
}