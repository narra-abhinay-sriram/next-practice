"use client"
import { solve } from "@/app/actions/user"
//import axios from "axios"
import { useState } from "react"

const Signup = () => {
const [name,setname]=useState("")
const [pass,setpass]=useState("")

  return (
    <div className="flex flex-col justify-center items-center mt-60">
      <input onChange={(e)=>{setname(e.target.value)}}
      className="border border-black p-2 m-2" type="text" placeholder="name"  />
      <input onChange={(e)=>{setpass(e.target.value)}}
       className="border border-black p-2 m-2" type="text" placeholder="name"  />
<button
onClick={async()=>{
    const resp = await solve(name,pass)
    console.log(resp)
}}
 className="border border-black p-2 m-2">sign up</button>
    </div>
  )
}

export default Signup
