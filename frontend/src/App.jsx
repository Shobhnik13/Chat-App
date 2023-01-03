import { useState } from 'react'
import './App.css'
import Navbar from './Compnents/Navbar'
import {auth} from './Firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
const style={
  appContainer:'max-w-[700px] mx-auto text-center',
  sectionContainer:'flex flex-col h-[90vh] bg-gray-100 mt-10 shadow-xl border relative'
}
function App() {
  const [user]=useAuthState(auth)
  console.log(user)
  return (
    <div className={style.appContainer}>
      <section className={style.sectionContainer}>
      <Navbar />
      </section>
    </div>
  )
}

export default App
