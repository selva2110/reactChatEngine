
import './App.css';
import { useState } from 'react';
import { LoginPage } from './LoginPage';
import { ChatPage } from './ChatPage';

function App() {
 
  const[user,setUser] = useState(undefined)
  if(!user){
    return<LoginPage onAuth={(user)=> setUser(user)}/>
  }else{
    return<ChatPage user={user}/>
  }
}

export default App;
