import React from 'react'
const style={
    nav:'flex bg-gray-800 h-20 p-2 items-center justify-between',
    heading:'text-white text-3xl'
}
const Navbar = () => {
  return (
    <div className={style.nav}>
            <h1 className={style.heading}>Chat App</h1>
    </div>
  )
}

export default Navbar