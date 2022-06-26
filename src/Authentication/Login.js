import React,{useState} from 'react'
import "./Login.css";
import "./Register.css"
import {useHistory} from "react-router-dom";

const Login = ()  => {

 const history = useHistory();

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

const loginUser = async (e) => {
    e.preventDefault();
console.log("1");
    const res = await fetch("https://moc0183.herokuapp.com/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await res.json();

    try{
    if(res.status === 400 
       || !data
      ) 
    {
      window.alert("Invalid Credentials");
      console.log("Invalid");
    }else{
      window.alert("Login Successful");
      history.push("/home");
    }

  }
  catch (err){
console.log("4");
  }
}

    return (
      <div class="box-signIn">
        <div class="Left-Sign-In">
          <div class="left-text">
            <span
              style={{
                fontSize: "3.5rem",
                marginLeft: "-174%",
                position: "absolute",
              }}
            >
              LogIn To See Some Cool Stuff
            </span>
          </div>
        </div>
        <form method="post">
          <div class="container-signin">
            <div class="label-elem-signin">
              <div>
                <h1 style={{ color: "#fff", marginLeft: "43%" }}>Login</h1>
                <p style={{ color: "#fff", marginLeft: "23%" }}>
                  Please fill in this form to LogIn into your account.
                </p>
                <hr style={{ color: "#fff" }} />
              </div>
              <label for="email">
                <b>Email</b>
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="Enter Email"
                name="email"
                required
                class="login-input"
              />

              <label for="password">
                <b>Password</b>
              </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Enter Password"
                name="password"
                required
                class="login-input"
              />

              <button class="login-button" type="submit" onClick={loginUser}>
                Login
              </button>
              <label></label>
              <div class="container signin">
                <p>
                  Don't have an account?{" "}
                  <a href="/register" class="a-register">
                    Register
                  </a>
                  .
                  <br />
                  Or
                  <br />
                  Go To{" "}
                  <a href="/" class="a-register">
                    HOME
                  </a>
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
}

export default Login
