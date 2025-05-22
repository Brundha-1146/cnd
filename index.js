import express, { Router } from "express"
import dotenv from "dotenv"
dotenv.config()
import connectDB from "./database/connectDB.js"
import cors from "cors"
import userRoutes from "./routes/userRoutes.js"
const app = express ()
app.use(express.json())
app.use(cors())
app.use("/api/user",userRoutes)
app.get("/",(req,res)=>{
    
    res.status(200).json({Message:"Api change successfully"})
})
app.get("/api/heart-beat",(req,res)=>{
    res.status(200).json({data:"Heart beat was successfull"})
})
app.listen(process.env.PORT,()=>{
    console.log(`Server running successfully at port ${process.env.PORT}`)
})
connectDB()