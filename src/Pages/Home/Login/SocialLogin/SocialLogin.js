import React from "react";
import auth from "../../../../firebase.init";
import { useNavigate } from "react-router-dom";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] =
    useSignInWithGoogle(auth);
 

  const navigate = useNavigate();

  if (user) {
    navigate("/");
  }


  if(loading){
   <h2 className="text-center">loading......</h2>
    }

  let errorSocial;



  if (error) {
    errorSocial = (
      <p className="text-info bg-danger  text-center p-1 rounded">
        Error: {error?.message}
      </p>
    );
  }

  
  

  return (
    <div className="py-2 mx-2  align-items-center justify-content-center ">
      <div className="my-2">
        
        <h6 className="">{errorSocial}</h6>
      </div>
      
      <button
        onClick={() => signInWithGoogle()}
        className="btn my-3 w-100  btn-info "
      >
        With Google signin
      </button>
    </div>
  );
};

export default SocialLogin;
