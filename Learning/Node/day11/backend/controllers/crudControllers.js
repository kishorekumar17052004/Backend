import crudModel from "../model/crudModel.js";

export const createData = async(req,res)=>{
   try {
    const {username , useremail,userage} = req.body;

    const checkfeild = !username || !useremail || !userage
    if(checkfeild){
       return res.status(400).json({mgs:"please fill fields"})
    }
    const checkemail = await crudModel.findOne({useremail})  
    if(checkemail){
        return res.ststus(409).json({msg:"This eamil Already exist"})
    }

    const createData = await crudModel.create({username , useremail,userage})
    res.status(200).json({msg:"successfully created ",createData}) 
    
   } catch (error) {
    res.ststus(500).json({msg:"something went wrong in server..."})
   }
}

export const getData = async(req,res)=>{
   try {
      const userData = await crudModel.find()

      res.status(200).json({msg:"Successfully Get AllData",userData})
      
      
   } catch (error) {
      res.ststus(500).json({msg:"something went wrong in server..."})
   }
}