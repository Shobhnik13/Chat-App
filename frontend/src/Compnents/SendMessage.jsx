import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import React, { useState } from 'react'
import {auth,db} from '../Firebase'
const style={
  form:` w-full h-14 max-w-[700px] flex text-xl sticky top-[1000px]`,
  input:`w-full text-xl p-3 bg-gray-900 text-white outline-none border-none`,
  sendButton:`w-[20%] bg-green-500`
}
const SendMessage = ({scrollSetting}) => {
  const [input,setInput]=useState('')
  const send=async (e)=>{
    e.preventDefault()
    if(input===''){
      alert('Please enter a valid message')
      return;
    }
    const {uid,displayName}=auth.currentUser
    await addDoc(collection(db,'messages'),{
      text:input,
      name:displayName,
      uid,
      timestamp:serverTimestamp()
    })
    setInput('');
    scrollSetting.current.scrollIntoView({behavior :'smooth'})
  }
  return (
    <form className={style.form} onSubmit={send}> 
        <input 
        type="text" 
        placeholder='message' 
        className={style.input} 
        value={input}
        onChange={(e)=>setInput(e.target.value)}
        />
        
        <button type="submit" 
        className={style.sendButton}
        >
          Send
          </button>
    </form>
  )
}

export default SendMessage