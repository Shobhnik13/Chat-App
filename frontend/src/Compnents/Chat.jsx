import { query,collection,onSnapshot, orderBy } from 'firebase/firestore'
import {db} from '../Firebase'
import React,{useState,useEffect,useRef} from 'react'
import Message from './Message'
import SendMessage from './SendMessage'
const style={
main:'flex flex-col p-[10px] relative'
}
const Chat = () => {
    const [messages,setMessages]=useState([])
    const scroll=useRef()

    useEffect(()=>{
            const q=query(collection(db,'messages'), orderBy('timestamp'))
            const unsubscribe=onSnapshot(q,(querySnapshot)=>{
              let messages=[]
              querySnapshot.forEach((item)=>{
                messages.push({...item.data(),id:item.id})
              })
              setMessages(messages);  
            })
            return ()=>unsubscribe()
          },[])
  return (
    <>
    <main className={style.main}>
      {/* message component   */}
      {messages && messages.map((message)=>{
return(
    <Message key={message.id} messageText={message}/>
)
      })}

    </main>
    {/*send component  */}
    <SendMessage scrollSetting={scroll}/>
    <span ref={scroll}></span>
    </>
  )
}

export default Chat