import React from 'react'
import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'

export const ChatPage = (props) => {
    const chatprops = useMultiChatLogic("156c7234-da62-44d0-972d-1ad28cc1c6a5",props.user.username,props.user.username)
  return (
    <div style={{height:'100vh'}}>
       <MultiChatSocket {...chatprops} />
       <MultiChatWindow {...chatprops} style={{height:"100%"}}/>
    </div>
  )
}
