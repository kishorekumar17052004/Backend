const users = []

export const registerData = async(req,res)=>{
    try {
        const data = req.body
          
        users.push(data)

        res.status(201).json({
            msg:"register Successfully",
            users:users
        })


    } catch (error) {
         res.status(500).json({
           msg:"user not re" 
         })
    }
}

export const getRegister = async(req,res)=>{
    try {
        res.status(200).json({
            msg:"successfully get user",
            users:users
        })
        
    } catch (error) {
        res.status(404).json({
            msg:"no user found"
        })
    }
}