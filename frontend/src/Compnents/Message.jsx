import React from 'react'
const style={
    message:`flex items-center shadow-xl m-4 py-2 px-3 rounded-tl-full rounded-tr-full`,
    name:`fixed mt-[-4rem] text-grey-600 text-xs`
}
const Message = (props) => {
  return (
    <div className={style.message}>
        <p className={style.name}>Shobhnik</p>
        <p className={style.messageSent}>{props.messageText.text}</p>
    </div>
  )
}

export default Message