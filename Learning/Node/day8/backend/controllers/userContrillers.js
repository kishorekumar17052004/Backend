import userModel from "../model/userModel.js";

export const createData = async(req,res)=>{
    try {
        const {name , email , age} = req.body;

        const student = await userModel.create({name , email , age})

        res.status(201).json({
            msg:"AllData Succesfully Created",
            student

        })
        
    } catch (error) {
      res.status(500).json({
        msg:"student was Not available",
        error

      })  
    }
}

export const getData = async(req,res)=>{
    try {
        const StudentData = await userModel.find()

        res.status(200).json({msg:"get Student Successfully",StudentData})
    } catch (error) {
         res.status(500).json({
        msg:"student was Not available",
        error

      })
    }
}