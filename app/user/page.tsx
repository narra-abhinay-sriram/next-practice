//import Signup from "@/components/Signup"
import axios from "axios";

async function fetchdata(){
  const resp= await axios.post("http://localhost:3000/api/user")
  return resp.data;
}
const Sign = async() => {
    const resutls= await fetchdata()
  return (
    <div>
     {resutls.mesage}
    </div>
  )
}

export default Sign
