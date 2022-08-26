import SignUpForm from '../../sign-up-form/sign-up-form.component';
import SignInForm from '../../sign-in-form/sign-in-form.component';
import {AuthenticationContainer} from './authentication.styles';
// import { useEffect } from 'react';
// import { getRedirectResult } from 'firebase/auth';
// import {auth,signInWithGooglePopUp,signInWithGoogleRedirect,createUserDocumentFromAuth,createAuthUserWithEmailAndPassword} from '../../utils/firebase/firebase.utils'
const Authentication = ()=>{


    //   useEffect(() => {
    //     const unsubscribe = async () => {
    //       const response = await getRedirectResult(auth);
    //       console.log(response);
    //     };
     
    //     return () => unsubscribe();
    //   }, []);
    
    


    // const logGoogleUser = async()=>{
    //     const {user} = await signInWithGooglePopUp();
    //     const userDocRef = await createUserDocumentFromAuth(user)
    // }

    return(
        <AuthenticationContainer>
            <SignInForm/>
            <SignUpForm/>
            {/* <button onClick={signInWithGoogleRedirect }>
                Sign in with google Redirect
            </button> */}
        </AuthenticationContainer>
    )
}

export default Authentication;