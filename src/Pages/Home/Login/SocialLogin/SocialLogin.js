import React from 'react';
import auth from "../../../../firebase.init";
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';


const SocialLogin = () => {





    const [signInWithGoogle, user, loading, error] =
    useSignInWithGoogle(auth);



    return (

        <div className='py-2 mx-2 d-flex align-items-center justify-content-center '>
            <button onClick={()=>signInWithGoogle()} className="btn my-2 mx-5  btn-info btn-block">With Google signin</button>
            <button className="btn btn-block btn-info ">Signin with Github</button>
            
        </div>
    );
};

export default SocialLogin;