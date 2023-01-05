import React from 'react'
import { auth } from '../Firebase'
import { FaRegTrashAlt } from 'react-icons/fa'
const style={
    message:`flex items-center shadow-xl m-4 py-2 px-3 rounded-tl-full rounded-tr-full`,
    name: `absolute mt-[-4rem] text-gray-600 text-xs`,
  sent: `bg-[#395dff] text-white flex-row-reverse text-end float-right rounded-bl-full`,
  received: `bg-[#e5e5ea] text-black float-left rounded-br-full`,
  trashButtonSent:`visible ml-2`,
  trashButtonReceived:`hidden`
}
const Message = ({messageText,deleteMessage}) => {
  const messageClass=
    messageText.uid===auth.currentUser.uid
    ?`${style.sent}`
    :`${style.received}`
    const buttonClass=
    messageText.uid===auth.currentUser.uid  
    ?`${style.trashButtonSent}`
    :`${style.trashButtonReceived}`
  return (
    <div>
    <div className={`${style.message} ${messageClass}`}>
        <p className={style.name}>{messageText.name}</p>
        <button  className={`${buttonClass}`} onClick={()=>deleteMessage(messageText)}><FaRegTrashAlt/></button>
        <p className={style.messageSent}>{messageText.text}</p>
    </div>
    </div>
  )
}

export default Message