import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register=()=>{

   let [name, setName]=useState("")
   let [surname, setSurname]=useState("")
   let [mail, setMail]=useState("")
   let [password, setPassword]=useState("")
   let [confirmPassword, setConfirmPassword]=useState("")

   let navigator=useNavigate()

   let nameData=(e)=>{
    setName(e.target.value)
   }
   let surData=(e)=>{
    setSurname(e.target.value)
   }
   let mailData=(e)=>{
    setMail(e.target.value)
   }
   let passwordData=(e)=>{
    setPassword(e.target.value)
   }
   let confirmData=(e)=>{
    setConfirmPassword(e.target.value)
   }


const handleSubmit=(e)=>{
    e.preventDefault();
    let data={name, surname, mail, password, confirmPassword}

    if(name && surname && mail && (password===confirmPassword)){
        axios.post('http://localhost:4000/register',data)
        .then((res)=>{
            alert(res.data.message)
            navigator('/')
        })
    }else{
        alert('invalid data')
    }

    
}

    return(
        <div className="Form-Container">

             <h2>Sign up</h2>
            <form action="" id="register" onSubmit={handleSubmit}>

               <label htmlFor="name">First Name</label>
               <input type="text" name="name" placeholder="Enter your name" value={name} onChange={nameData} /> 

               <label htmlFor="surname">Last Name</label>
               <input type="text" name="surname" placeholder="Enter your surname" value={surname} onChange={surData} /> 

               <label htmlFor="email">Mail Id</label>
               <input type="mail" name="email" placeholder="Enter your mail" value={mail} onChange={mailData}  /> 

               <label htmlFor="passwrd">Password</label>
               <input type="password" name="passwrd" placeholder="Enter a password" value={password} onChange={passwordData} />
               <input type="password" name="passwrd" placeholder="confirm your password" value={confirmPassword} onChange={confirmData} /> 

               <button type="submit">Register</button>
            </form>

            {/* <button className="link-btn" onClick={()=> props.onFormSwitch('login')}>Already have an account? Login here</button> */}

            <Link to="/">Already have an account? Login here</Link>

        </div>
    )
}
export default Register