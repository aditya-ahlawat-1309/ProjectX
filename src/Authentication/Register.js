import React , {useState} from 'react'
import "./Register.css" 

import {NavLink , useHistory} from 'react-router-dom';



const Register = () => {


  const history = useHistory();

  const [user,setUser] = useState(
    {
      name:"",
      email:"",
      phone:"",
      work:"",
      password:"",
      cpassword:"",
    }
  );




  let name,value;

  const handleInputs = (e) => {
       console.log(e);
       name=e.target.name;
       value = e.target.value;

       setUser({...user , [name]:value})
   }


   const PostData = async (e) => {
         e.preventDefault();
         
        //  Object Destructering instead of writing user.name
         const {name , email , phone , work , password , cpassword} = user;

        const res = await fetch("https://moc0183.herokuapp.com/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            name,
            email,
            phone,
            work,
            password,
            cpassword,
          }),
        });

        const data = await res.json();
        
        if(res.status === 422 
          || !data
          )
        {
          window.alert("Invalid Registration");
          console.log("Invalid");

        } 
        else{
          window.alert("Successful Registration");
          console.log("Successful");

          history.push("/signin");
        }

   }

  return (
    <div class="box">
      <div class="Left-Sign-Up">
        <div class="left-text">
          <span style={{ fontSize: "3.5rem", marginLeft: "30%" }}>Sign Up</span>
          <br />
          <span style={{ fontSize: "2.5rem", marginLeft: "45%" }}>to</span>
          <br />
          <span style={{ fontSize: "2.5rem", marginLeft: "33%" }}>
            Continue
          </span>
        </div>
      </div>
      {/* never use method in form */}
      <form>
        <div class="container-register">
          <div class="center-register">
            <h1 style={{ color: "#fff", marginLeft: "40%" }}>Register</h1>
            <p style={{ color: "#fff", marginLeft: "27%" }}>
              Please fill in this form to create an account.
            </p>
            <hr style={{ color: "#fff" }} />
            <div class="label-elem">
              <label style={{ color: "white", marginLeft: "0%" }} for="name">
                <b>Name</b>
              </label>
              <input
                type="text"
                placeholder="Enter Name"
                name="name"
                id="name"
                value={user.name}
                onChange={handleInputs}
                required
                class="register-input"
              />

              <label style={{ color: "white", marginLeft: "0%" }} for="email">
                <b>Email</b>
              </label>
              <input
                type="text"
                placeholder="Enter Email"
                name="email"
                id="email"
                value={user.email}
                onChange={handleInputs}
                required
                class="register-input"
              />

              <label style={{ color: "white", marginLeft: "0%" }} for="phone">
                <b>Phone</b>
              </label>
              <input
                type="text"
                placeholder="Enter Phone Number"
                name="phone"
                id="number"
                value={user.phone}
                onChange={handleInputs}
                required
                class="register-input"
              />

              <label style={{ color: "white", marginLeft: "0%" }} for="work">
                <b>Work</b>
              </label>
              <input
                type="text"
                placeholder="Enter Work Place"
                name="work"
                id="work"
                value={user.work}
                onChange={handleInputs}
                required
                class="register-input"
              />

              <label style={{ color: "white", marginLeft: "0%" }} for="psw">
                <b>Password</b>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                name="password"
                id="psw"
                value={user.password}
                onChange={handleInputs}
                required
                class="register-input"
              />

              <label
                style={{ color: "white", marginLeft: "0%" }}
                for="psw-repeat"
              >
                <b>Repeat Password</b>
              </label>
              <input
                type="password"
                placeholder="Repeat Password"
                name="cpassword"
                id="psw-repeat"
                value={user.cpassword}
                onChange={handleInputs}
                required
                class="register-input"
              />
            </div>
            <hr />
            <p style={{ color: "white", marginLeft: "16.5%" }}>
              By creating an account you agree to our{" "}
              <a href="#" class="a-register">
                Terms & Privacy Policy
              </a>
              .
            </p>

            <button type="submit" class="registerbtn" onClick={PostData}>
              Register
            </button>
            <div class="container signin">
              <p>
                Already have an account?{" "}
                <a href="/signin" class="a-register">
                  Sign in
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

export default Register
