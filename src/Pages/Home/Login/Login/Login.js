import React from "react";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div>
      <div class="container my-5">
        <div class="row justify-content-center">
          <div class="col-12 col-md-8 col-lg-6 pb-5">
            {/* --Form with header-- */}

            <form action="mail.php" method="post">
              <div class="card border-primary rounded-0">
                <div class="card-header p-0">
                  <div class="bg-info text-white text-center py-2">
                    <h3>
                       Please login information
                    </h3>
                    
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
                    <div class="input-group mb-2">
                      <div class="input-group-prepend">
                        <div class="input-group-text">
						<span>@</span>
                        </div>
                      </div>
                      <input
                        type="password"
                        class="form-control"
                        id="nombre"
                        name="password"
                        placeholder="please enter your password"
                        required
                      />
                    </div>
                  </div>

                  <div class="form-group">
                   
                  </div>

                  <div class="text-center">
                    <input
                      type="submit"
                      value="Log in"
                      class="btn btn-info btn-block rounded-0 py-2"
                    />
                  </div>
				  <p>haven't account?</p>
                    <Link to='/signup'>Sign up</Link>
                </div>
				
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
