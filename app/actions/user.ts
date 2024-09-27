"use server"
import prisma from "@/db";
export async function solve(email:string,name:string){
   const resp= await prisma.user.create({data:{email:email,name:name}})
    return{message:"signed  up"}
}