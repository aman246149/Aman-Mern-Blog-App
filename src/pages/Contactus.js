import React, { useState } from "react";
import "./AllPage.css";
import axios from "axios";

function Login() {
  const [createaccount, setcreateaccount] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorstate, setErrorState] = useState("");
  const [loaderdata, setLoader] = useState(false);

  function handleCreateAccount() {
    if (createaccount) {
      setcreateaccount(false);
    } else {
      setcreateaccount(true);
    }
  }

  function signUpActivity(e) {
    setLoader(true);
    console.log(email, password);
    const data = JSON.stringify({
      email: email,
      password: password,
    });

    console.log(data);
    if (createaccount === true) {
      axios
        .post("http://localhost:3000/api/user/login", data, {
          headers: { "Content-Type": "application/json" },
        })
        .then((response) => setLoader(false))
        .catch((err) => {
          setErrorState("email or password does not match");
          setLoader(false);
        });
    } else {
      console.log("regisre");
      axios
        .post("http://localhost:3000/api/user/register", data, {
          headers: { "Content-Type": "application/json" },
        })
        .then((response) => setLoader(false))
        .catch((err) => {
          setErrorState("already exist email");
          setLoader(false);
        });
    }

    //handling error state
    setTimeout(() => setErrorState(""), 3000);
  }

  return (
    <div className="section">
      <h2 className="loading">{loaderdata===true?"Loading":null}</h2>
      <div className="logincontainer">
        <div className={`${errorstate !== "" ? "errorbox" : "nonactive"}`}>
          {errorstate !== "" ? errorstate : ""}
        </div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          required
          placeholder="email"
          onChange={(data) => setEmail(data.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          required
          placeholder="password"
          onChange={(data) => setPassword(data.target.value)}
        />
        <input
          type="submit"
          value={createaccount === false ? "Create Account" : "Login"}
          onClick={signUpActivity}
        />
        <h5>
          {createaccount === false
            ? "Dont have an account?"
            : "Already Have An Account"}{" "}
          <span className="createaccount" onClick={handleCreateAccount}>
            {createaccount === false ? "Create Account" : "Login"}
          </span>
        </h5>
      </div>
    </div>
  );
}

export default Login;
