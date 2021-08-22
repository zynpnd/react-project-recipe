import { useState, useEffect } from "react";


const Login = () => {

   

    return(
        <div className="login-wrapper">
        <form className="login-form" action=""  >
          <div className="login-icon-wrapper">
          <i class="fas fa-utensils"> <br/>Recipe App</i>
          </div>
          <div>
            <input
            
              className="user-name-input"
              type="text"
              name="username"
              placeholder="username"
             
            />
          </div>
          <div>
            <input
            
              className="password-input"
              type="password"
              name="password"
              placeholder="password"
            
            />
          </div>
          <button className="login-submit-button">Login</button>
        </form>
      </div>
    );
    
}

export default Login;
