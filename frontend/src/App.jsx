import { useState } from 'react'
import './App.css'
import Navbar from './Compnents/Navbar'

const style={
  appContainer:'max-w-[700px] mx-auto text-center',
  sectionContainer:'flex flex-col h-[90vh] bg-gray-100 mt-10 shadow-xl border relative'
}
function App() {
  
  return (
    <div className={style.appContainer}>
      <section className={style.sectionContainer}>
      <Navbar />
      </section>
    </div>
  )
}

export default App
