import express, { Request, Response } from "express"
import { signUpBodyZodSchema } from "../zodValidation"
export const authRouter = express.Router()

authRouter.post("/signup",async(req:Request,res:Response):Promise<any>=>{
    const isValid= signUpBodyZodSchema.safeParse(req.body)
    if(!isValid.success){
        const errors = isValid.error.errors.map(err=>err.message)
         return res.status(400).json({success:false,message:errors})
     }
     try {
        
     } catch (error) {
        
     }
    
})

authRouter.post("/signin",async(req:Request,res:Response):Promise<any>=>{

})