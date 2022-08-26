import { useState } from "react";
import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import { createUserDocumentFromAuth,signInWithGooglePopUp,signInAuthUserWithEmailAndPassword } from "../utils/firebase/firebase.utils";
import {ButtonsContainer,SignUpContainer} from './sign-in-form.styles';

const defaultFormFields = {
    email:'',
    password:'',
}

const SignInForm = () =>{

    const [formFields,setFormFields] = useState(defaultFormFields);
    const {email,password} = formFields;


    const resetFormFields = () =>{
        setFormFields(defaultFormFields)
    }

    const signInWithGoogle = async()=>{
       await signInWithGooglePopUp();

    }

    const handleSubmit = async (event) =>{
        event.preventDefault();


        try {
            await signInAuthUserWithEmailAndPassword(email, password);
            resetFormFields();

        } catch (error) {
            console.log('user sign in failed', error);
        }
    };
 
    const handleChange= (event)=>{
         const {name,value} = event.target;
         setFormFields({...formFields,[name]:value})
    };

    return(
        <SignUpContainer>
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form  onSubmit={handleSubmit}>
                <FormInput  label="email" type="email" required onChange={handleChange} name="email" value={email}/>
                <FormInput label="Password"  type="password" required onChange={handleChange} name="password" value={password}/>
                <ButtonsContainer>
                    <Button type="submit">Sign In</Button>
                    <Button type="button" button_type={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>Google sign in</Button>
                </ButtonsContainer>
            </form>
        </SignUpContainer>
    )
}


export default SignInForm;