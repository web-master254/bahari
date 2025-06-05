import './loginform.css';
import { useState, } from 'react';
import { useNavigate } from 'react-router-dom';


function LoginForm(props){

    
  const [password,setPassword] = useState('');
  const [user,setUser] = useState('')
     const user_ = "dominic";
  const password_ = "1234"

  const navigate = useNavigate()
function login(user1,pass1){
 if(pass1 === password_ && user1 === user_){
navigate('/dashboard')
 }else{
    alert("wrong credentials. Try again.")
 }
 }
    return(
       <div className="login-form">
        <form>
            <div className='form-name'>
                <h2>Login</h2>
            </div>
            <div className="username inputs">
                <label className="user labels">
                    <h3>Username: </h3>
                    <input
                    onChange={(e)=>setUser(e.target.value)}
                    type="text"
                    />
                </label>
            </div>
            <div className="password inputs">
                <label className=" pass labels">
                    <h3>Pasword: </h3>
                    <input
                    onChange={(e)=>setPassword(e.target.value)}
                    type="password"
                    />
                </label>
            </div>
            <div className="login-button">
                <button
                onClick={()=>login(user,password)}
                >Login</button>
            </div>
        </form>
     
       </div>
    )
}

export default LoginForm;