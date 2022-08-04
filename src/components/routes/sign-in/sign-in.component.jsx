import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';
import {auth,signInWithGooglePopUp,signInWithGoogleRedirect,createUserDocumentFromAuth,createAuthUserWithEmailAndPassword} from '../../utils/firebase/firebase.utils'
import SignUpForm from '../../sign-up-form/sign-up-form.component';

const SignIn = ()=>{


    //   useEffect(() => {
    //     const unsubscribe = async () => {
    //       const response = await getRedirectResult(auth);
    //       console.log(response);
    //     };
     
    //     return () => unsubscribe();
    //   }, []);
    
    


    const logGoogleUser = async()=>{
        const {user} = await signInWithGooglePopUp();
        const userDocRef = await createUserDocumentFromAuth(user)
    }

    return(
        <div>
            <h1>Sign In page</h1>
            <button onClick={logGoogleUser}>
                Sign in with google popup
            </button>
            <SignUpForm/>
            {/* <button onClick={signInWithGoogleRedirect }>
                Sign in with google Redirect
            </button> */}
        </div>
    )
}

export default SignIn;