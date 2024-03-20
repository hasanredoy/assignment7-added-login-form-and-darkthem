import { useState } from "react";

import Modal from "./Modal";


const Registration = ({handleSingUp}) => {

  const [name , setName]= useState("")
  const [email , setEmail]= useState("")
  const [password , setPassword]= useState("")

  const [isShowingModal , setIsShowingModal] =useState(false)
  
  const handleSubmit = (event)=>{
    event.preventDefault()
    console.log('name ', name , "email", email, "password" , password);
    setIsShowingModal(!isShowingModal)
  }

  const handleChange=()=>{
    setIsShowingModal(false)
  }

  return (

 
 <div className=" flex justify-center align-middle content-center items-center mt-10 lg:mt-0 p-10 lg:p-5 rounded-xl bg-slate-300  w-full lg:w-[30%]">
     {
      !isShowingModal&&(
        <form 
        onSubmit={(event)=>handleSubmit(event)}
        className=" flex flex-col space-y-5 w-[100%]" action="form">
  
          <label className=" text-xl font-bold " htmlFor="text">{"You're"} Name</label>
          <input
          onChange={(event)=> setName(event.target.value)}
          className=" placeholder-black  bg-orange-400 border border-black rounded-xl px-10 py-3" type="text" placeholder="You're Name" required/>
  
  
          <label className=" text-xl font-bold " htmlFor="email">{"You're"} Email</label>
          <input 
          onChange={(event)=> setEmail(event.target.value.toLowerCase())} 
          className=" placeholder-black  bg-orange-400 border border-black rounded-xl px-10 py-3" type="email" placeholder="You're Email" required/>
  
  
  
          <label className=" text-xl font-bold " htmlFor="text">Password</label>
          <input
          onChange={(event)=> setPassword(event.target.value)}
          className=" placeholder-black  bg-orange-400 border border-black rounded-xl px-10 py-3" type="password" placeholder="Password"  required/>
  
          <div className=" flex  gap-x-4">
             <input
             
             className=" text-xl" type="checkbox" name="" id="" required/>
            <p> Do You agree With our terms and conditions</p>
          </div>
          <button
          
           className="btn btn-primary w-[50%] mx-auto">
            Sing Up
          </button>
        </form>
      )
     }

      {
        isShowingModal&&(
        <Modal name={name} email={email} handleChange={handleChange}  handleSingUp={handleSingUp}></Modal>
        )
      }
    </div>

  );
};


export default Registration;