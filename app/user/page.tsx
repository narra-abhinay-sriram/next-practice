//import Signup from "@/components/Signup"
//import axios from "axios";
import prisma from "../../db"
async function fetchdata(){
 await prisma.user.findFirst({})
 //console.log(resp)
 return {email:"abhinay"}
}
const Sign = async() => {
    const resutls= await fetchdata()
  return (
    <div>
     {resutls.email}
    </div>
  )
}

export default Sign
