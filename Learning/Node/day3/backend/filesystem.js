
import fs from "fs"
import path from  "path"
import process from "process"

const filePath = path.join(process.cwd(),"public","home")

fs.mkdir(filePath,{recursive:true},(error)=>{
    if(error){
        console.log(error)
        return
    } else{
        console.log(`successfully folder created `)
    }
})

const file = path.join(filePath,"data.txt")

fs.writeFile(file,"WellCome to React",(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(`successfilly write the data `)
    }
})
 
fs.readFile(file, "utf-8",(err,data)=>{
    if(err){
        console.log(err)
        return
    }
    else{
        console.log(data)
    }
})