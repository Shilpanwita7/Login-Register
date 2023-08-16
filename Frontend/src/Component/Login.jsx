import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate} from "react-router-dom";


const Login=()=>{
    let [mail, setMail]=useState("");
    let [password, setPassword]=useState("");

    let mailData=(e)=>{
      setMail(e.target.value)
    }
    let passwordData=(e)=>{
      setPassword(e.target.value)
    }

    let navigate=useNavigate()

    let btn=(e)=>{
        e.preventDefault()
        let data={mail,password};
        axios.post('http://localhost:4000/login',data)
        .then((res)=>{
          if(res.data.status===200){
            alert(res.data.message)
            navigate('/home')
          }else{
            alert(res.data.message)
          }
        })
        
    }

    

    return(
        <div className="Form-Container">
         
         <h2>Sign in</h2>
        
       <form action="" id="login">
        <label for="email">Email</label>
        <input type="mail" name="email" placeholder="yourmail@gmail.com" value={mail} onChange={mailData}/>
        <label for="password">Password</label>
        <input type="password" name="password" placeholder="*******************" value={password} onChange={passwordData}/>
        <button onClick={btn}>Login</button>
       </form>

       {/* <button className="link-btn" onClick={()=>props.onFormSwitch('register')}>Don't have an account? Register here</button> */}
        
        <Link to="/register">Don't have an account? Register here</Link>
        </div>
    )
}
export default Login