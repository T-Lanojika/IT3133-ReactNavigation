import { useNavigate} from "react-router-dom";
import {useState} from 'react';


export default function Login(){
    const navigate=useNavigate();
    const [password,setPassword]=useState("");
    const [username,setUsername]= useState("")

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
      }
    
      const handlePasswordChange = (event) => {
        setPassword(event.target.value);
      }

    const authenticate=()=>{
        if(handlePasswordChange.password === password && handleUsernameChange.username === username){
            navigate('/dash')
        }
        else{
            return;
        }
    }   

    return(
        <div>
            <h1>Login here</h1>
            <form style={{padding:20}}>
                <label>Uername </label>
                <input type="text" name="username" value={username}></input><br/>
                <label>Password </label>
                <input type="password" name="password" value={password}></input><br/>
            </form>
            <button onClick={authenticate}>Login</button>
        </div>
    )
}