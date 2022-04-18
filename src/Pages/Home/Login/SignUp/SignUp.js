import React from "react";
import { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";



const SignUp = () => {
  const[name,setName]=useState()
  const[email,SetEmail]=useState()
  const[password,setPassword]=useState()
const navigate=useNavigate()

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});

  const handleNameSignup=(event)=>{
    setName(event.target.value)
  }
  
  const handleEmailSignup=(event)=>{
    SetEmail(event.target.value)
  }
  const handlePasswordSignup=(event)=>{
    setPassword(event.target.value)
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  const handleSignup=(event)=>{
    event.preventDefault()
     createUserWithEmailAndPassword(email,password)
    navigate("/");

  }

  

  return (
    <div>
      <div>
        <div class="container my-5">
          <div class="row justify-content-center">
            <div class="col-12 col-md-8 col-lg-6 pb-5">
              {/* --Form with header-- */}

              <form onSubmit={handleSignup} >
                <div class="card border-primary rounded-0">
                  <div class="card-header p-0">
                    <div class="bg-info text-white text-center py-2">
                      <h3>Please Signup</h3>
                      <p class="m-0">pleage right information</p>
                    </div>
                  </div>
                  <div class="card-body p-3">
                    {/*  --Body--*/}
                    <div class="form-group">
                      <div class="input-group mb-2">
                        <div class="input-group-prepend">
                          <div class="input-group-text">
                            <span>🧑🏼‍🤝‍🧑🏻 </span>
                          </div>
                        </div>
                        <input
                        onChange={handleNameSignup}
                          type="text"
                          class="form-control"
                          id="name"
                          name="name"
                          placeholder="your name"
                          required
                        />
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="input-group mb-2">
                        <div class="input-group-prepend">
                          <div class="input-group-text">
                            <span>📨</span>
                          </div>
                        </div>
                        <input
                        onChange={handleEmailSignup}
                          type="email"
                          class="form-control"
                          id="email"
                          name="email"
                          placeholder="email@gmail.com"
                          required
                        />
                      </div>
                    </div>

                    <div class="form-group">
                      <div class="input-group mb-2">
                        <div class="input-group-prepend">
                          <div class="input-group-text">
                            <span>🔑</span>
                          </div>
                        </div>
                        <input
                        onChange={handlePasswordSignup}
                          type="password"
                          class="form-control"
                          placeholder="password"
                          required
                        />
                      </div>
                    </div>

                    <div class="text-center">
                      <input
                        type="submit"
                        value="Sign up"
                        class="btn btn-info btn-block rounded-0 py-2"
                      />
                    </div>
                    <div className="d-flex align-items-center "> 
                  <span>already have an ccount?</span>
                  <Link className="btn-link btn mx-2 text-decoration-none btn-block" to="/login">Log In</Link>
                  </div>
                  </div>
                 <SocialLogin></SocialLogin>
                </div>
              </form>
              {/* --Form with header-- */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
