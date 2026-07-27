let arr = []

export const register = async(req,res)=>{

    try {
        console.log(req.body)
        arr.push(req.body)
        console.log(arr)

        

      
    } catch (error) {
        console.error(error)
    }

}
