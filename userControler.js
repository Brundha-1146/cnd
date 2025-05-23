//import express from "express"
// import {register} from "../controler/userControler.js"
// import userRoutes from "../userRoutes"
// const userRoutes =express.Router()
// userRoutes.post("/register",register)

import User from "..model/MuserModel.js"
export const register=async(req,res)=>{
    const {name,email,phoneNumber,password}=req.body
    try{
        const user=await User.create({
            name,email,phoneNumber,password
        })
        res.status(200).json(user)
    }catch(error){
        console.log(error)
        res.status(500).json({message:error})
    }
}