import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  signInWithRedirect, 
  signInWithPopup, 
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged} from 'firebase/auth';
import {getFirestore,doc,getDoc,setDoc} from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {

    apiKey: "AIzaSyAhy_xl9ED4FOTOXBD8Z6N3zZSzHu5NQu8",
  
    authDomain: "e-store-db-66216.firebaseapp.com",
  
    projectId: "e-store-db-66216",
  
    storageBucket: "e-store-db-66216.appspot.com",
  
    messagingSenderId: "813158576186",
  
    appId: "1:813158576186:web:7aa8a36858bb3fbbb34503"
  
  };
  
// Initialize Firebase

const app = initializeApp(firebaseConfig);  

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt:"select_account"
});

export const auth = getAuth();
export const signInWithGooglePopUp = () =>signInWithPopup(auth, googleProvider);
// export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth,additionalInformation = {displayName:'Nep'}) =>{
  if(!userAuth) return;
  const userDocRef = doc(db,'users',userAuth.uid);
  console.log(userDocRef)

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot.exists())

  if (!userSnapshot.exists()) {
    console.log(userAuth)
    const { displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef,{
        displayName,
        email,
        createdAt,
        ...additionalInformation
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }

  }
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async(email,password)=>{
  if(!email || !password) return;

  return await createUserWithEmailAndPassword(auth,email,password);
};

export const signInAuthUserWithEmailAndPassword = async(email,password)=>{
  if(!email || !password) return;

  return await signInWithEmailAndPassword(auth,email,password);
};


export const signOutUser = async()=>signOut(auth)

export const onAuthStateChangedListener= (callback) => 
  onAuthStateChanged(auth,callback);