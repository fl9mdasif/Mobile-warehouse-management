import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const [user, Loading] = useAuthState(auth);
    let location = useLocation();
    if (Loading) {
        return <p className="text-center">Loading...</p>
    }
    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>;
    }
    return children;
};
export default PrivateRoute;


// import React from 'react';
// import { ToastContainer } from 'react-bootstrap';
// import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
// import { Navigate, useLocation } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import auth from '../../../firebase.init';
// import Loading from '../../Shared/Loading/Loading'

// const RequireAuth = ({ children }) => {
//     const [user, loading] = useAuthState(auth);
//     // console.log(user)
//     const location = useLocation();
//     const [sendEmailVerification] = useSendEmailVerification(auth);
//     if (loading) {
//         return <Loading ></Loading>
//     }
//     if (!user) {
//         return <Navigate to='/login' state={{ from: location }} replace></Navigate>;
//     }

//     if (user.providerData[0]?.providerID === 'password' && !user.emailVerified) {
//         return (
//             <div className='text-center mt-5'>
//                 <h3 className='text-danger'>Your Email is not verified!!</h3>
//                 <h5 className='text-success'> Please Verify your email address</h5>
//                 <button
//                     className='btn btn-primary'
//                     onClick={async () => {
//                         await sendEmailVerification();
//                         toast('Sent email');
//                     }}
//                 >
//                     Send Verification Email Again
//                 </button>
//                 <ToastContainer></ToastContainer>
//             </div>
//         )
//     }

//     return children;
// };

// export default RequireAuth;