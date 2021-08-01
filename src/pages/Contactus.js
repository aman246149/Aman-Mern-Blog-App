import React ,{useState} from "react";
import "./AllPage.css";

function Login() {

  const [createaccount, setcreateaccount] = useState(false)

  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")



  function handleCreateAccount(){
    if (createaccount) {
        setcreateaccount(false)
      }else{
        setcreateaccount(true)

      }
  }

  function signUpActivity(e){
      console.log(email,password)
  }

  return (
    <div className="section">
      <div className="logincontainer">
        <label htmlFor="email">Email</label>
        <input type="email" required placeholder="email" onChange={(data)=>setEmail(data.target.value)}/>
        <label htmlFor="password">Password</label>
        <input type="password" required onChange={(data)=>setPassword(data.target.value)}/>
        <input type="submit" value={createaccount===false?"Create Account":"Login"} onClick={signUpActivity}/>
        <h5>{createaccount===false?"Dont have an account?":"Already Have An Account"} <span className="createaccount" onClick={handleCreateAccount}>{createaccount===false?"Create Account":"Login"}</span></h5>
      </div>
    </div>
  );
}

export default Login;
