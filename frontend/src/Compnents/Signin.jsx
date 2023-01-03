import React from 'react'
import GoogleButton from 'react-google-button'
import {auth} from '../Firebase'
import { GoogleAuthProvider,signInWithRedirect,signInWithPopup } from 'firebase/auth'
const style={
     
}
const googleSignIn=()=>{
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
}
const Signin = () => {
  return (
    <div>
    <GoogleButton onClick={googleSignIn}/>
    </div>
  )
}

export default Signin