import React from 'react'
import {auth} from '../Firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import Signin from './Signin'
import Logout from './Logout'
const style={
    nav:'flex bg-gray-800 h-20 p-2 items-center justify-between',
    heading:'text-white text-3xl'
}
const Navbar = () => {
  const [user]=useAuthState(auth)
    return (
    <div className={style.nav}>
            <h1 className={style.heading}>Chat App</h1>
            {user?<Logout/>:<Signin/>}
            
    </div>
  )
}

export default Navbar