import React from 'react'
import {auth} from '../Firebase'
import { signOut } from 'firebase/auth'
const style={
    button:'bg-gray-200 px-4 py-2 hover:bg-gray-100'
}

const signout=()=>{
    signOut(auth)
}

const Logout = () => {
  return (
    <div >
        <button className={style.button} onClick={signout}>Logout</button>
    </div>
  )
}

export default Logout