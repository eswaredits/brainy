import zod from "zod"

export const signUpBodyZodSchema = zod.object({
    email:zod.string().email(),
    password:zod.string().min(8,{message:"password should atleast be 8 characters long "}).regex(/[a-z]/,{message:"password should atleast contain one lowercase letter"}).regex(/[A-Z]/,{message:"password should atleast contain one uppercase letter "}).regex(/[0-9]/,{message:"password should alteast have one number"}),
})

export const signInBodyZodSchema = zod.object({
    username:zod.string().email(),
    password:zod.string().min(8,{message:"password should atleast be 8 characters long "}).regex(/[a-z]/,{message:"password should atleast contain one lowercase letter"}).regex(/[A-Z]/,{message:"password should atleast contain one uppercase letter "}).regex(/[0-9]/,{message:"password should alteast have one number"}),
})
 
