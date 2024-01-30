import React, { useState } from "react";
import LoginPage from "./components/loginpage/LoginPage";
import HomePage from "./components/homepage/HomePage";

function App() {
  const [loginInfo, setLoginInfo] = useState(null);

console.log("loginInfo",loginInfo);
  return (
    <div className="App">
      {loginInfo === null ? (
        <LoginPage setLoginInfo={setLoginInfo} loginInfo={loginInfo}/>
      ) : (
        <HomePage loginInfo={loginInfo}/>
      )}
    </div>
  );
}

export default App;
