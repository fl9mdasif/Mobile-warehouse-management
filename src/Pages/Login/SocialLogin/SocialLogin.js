import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import googleLogo from '../../../images/google.png';

const SocialLogin = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, user, error] = useSignInWithGoogle(auth);


    let errorElement;
    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message} </p>
    }
    if (user) {
        navigate('/home');
    }
    return (
        <div>
            <>-------- or --------</>
            <button
                className="btn btn-info w-50 d-block mx-auto my-2"
                onClick={() => signInWithGoogle()} >
                <img style={{ width: '30px' }} src={googleLogo} alt="" />
                <span className=" px-2"> Google Sign In</span>
            </button>
            {errorElement}
        </div>
    );
};

export default SocialLogin;