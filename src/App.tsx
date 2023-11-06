import React, { useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { login } from "./redux/reducers/authSlice";

function App() {
  const [cred, setCred] = useState({ username: "", password: "" });
  const dispatch=useDispatch();

  const login = () => {
    console.log(cred, "cred");
  };
  return (
    <div className="App">
      <div className="login_container">
        <div className="form_container">
          <label htmlFor="user-name">User Name: </label>
          <input
            id="user-name"
            type="text"
            placeholder="Exp:abcd@gmail.com"
            className="login-field"
            onChange={(e) => {
              setCred({ ...cred, username: e.target.value });
            }}
          />
        </div>
        <div className="form_container">
          <label htmlFor="password">Password: </label>
          <input
            id="password"
            type="password"
            placeholder="Password"
            className="login-field"
            onChange={(e) => setCred({ ...cred, password: e.target.value })}
          />
        </div>
        <button className="submit-button" onClick={login}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default App;
