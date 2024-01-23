import React from 'react'
import axios from 'axios'

export const LoginPage = (props) => {
    const onSubmit = async(e) => {
        e.preventDefault();
        const { value } = e.target[0];
    try{
         const r = await axios.put(
            'https://api.chatengine.io/users/',
            {username:value,secret:value,firstname:value},
            {headers:{"private-key":"e2c015f5-1b2c-42d9-b966-a66e01eaff0a"}}
         )
    }catch(e){ 
       console.log(e)
       }
       props.onAuth({ username: value, secret: value }); 
     };
    
      return (
        <div className="background">
          <form onSubmit={onSubmit} className="form-card">
            <div className="form-title">Welcome 👋</div>
    
            <div className="form-subtitle">Set a username to get started</div>
    
            <div className="auth">
              <div className="auth-label">Username</div>
              <input className="auth-input" name="username" />
              <button className="auth-button" type="submit">
                Enter
              </button>
            </div>
          </form>
        </div>
      );
}
