import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login(){
    const[username,setUserName]=useState("")
    const[password,setPasword]=useState("")
    const navigate=useNavigate()

    const handleLogin=(e)=>{
        e.preventDefault()
        if(username==="admin@gmail.com" && password==="admin1234"){
            navigate("/admin")
        }else if(username==="customer@gmail.com" && password==="customer1234"){
            navigate("/customer")
        }else{
            alert("invalid credentials")
        }
    }
    return(
        <form onSubmit={handleLogin}>
            <input type="text" placeholder="username" value={username} onChange={(e)=>setUserName(e.target.value)}></input>
             <input type="password" placeholder="password" value={password} onChange={(e)=>setPasword(e.target.value)}></input>
             <button type="submit">Login</button>
        </form>
        
    )
}
export default Login;