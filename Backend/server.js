import express from "express"
import dotenv from "dotenv"
const app = express();
dotenv.config();
const port = process.env.PORT || 3000

app.get('/',(req,res)=>{
    res.send("Hellow i am smruti ranjan sahoo")
})
app.listen(3000,()=>{
    console.log(`App is listening at port number ${port}`)
})