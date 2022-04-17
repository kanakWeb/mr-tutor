import React from "react";
import { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const navigate = useNavigate();
  const location = useLocation();

  const handleLoginEmail = (event) => {
    setEmail(event.target.value);
  };
  const hanleLoginPassword = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email,password)
  };

  let from = location.state?.from?.pathname || "/";

  if (user) {
    navigate(from, { replace: true });
  }
  return (
    <div>
      <div class="container my-5">
        <div class="row justify-content-center">
          <div class="col-12 col-md-8 col-lg-6 pb-5">
            {/* --Form with header-- */}

            <form onSubmit={handleLogin}>
              <div class="card border-primary rounded-0">
                <div class="card-header p-0">
                  <div class="bg-info text-white text-center py-2">
                    <h3>Please login information</h3>
                  </div>
                </div>
                <div class="card-body p-3">
                  {/*  --Body--*/}
                  <div class="form-group">
                    <div class="input-group mb-2">
                      <div class="input-group-prepend">
                        <div class="input-group-text">
                          <span>@</span>
                        </div>
                      </div>
                      <input
                      onChange={handleLoginEmail}
                        type="text"
                        class="form-control"
                        id="nombre"
                        name="nombre"
                        placeholder="please enter your email"
                        required
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="input-group mb-2 my-3">
                      <div class="input-group-prepend">
                        <div class="input-group-text">
                          <span>@</span>
                        </div>
                      </div>
                      <input
                      onChange={hanleLoginPassword}
                        type="password"
                        class="form-control"
                        id="nombre"
                        name="password"
                        placeholder="please enter your password"
                        required
                      />
                    </div>
                  </div>

                  <div class="form-group"></div>

                  <div class="text-center">
                    <input
                      type="submit"
                      value="Log in"
                      class="btn btn-info btn-block rounded-2 my-3 py-2"
                    />
                  </div>
                  <div className="d-flex align-items-center ">
                    <span>haven't account?</span>
                    <Link
                      className="btn-link btn mx-2 text-decoration-none btn-block"
                      to="/signup"
                    >
                      Sign up
                    </Link>
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
  );
};

export default Login;
