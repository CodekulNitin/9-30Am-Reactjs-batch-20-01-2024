import React, { useState } from "react";
import LoginPage from "./components/loginpage/LoginPage";
import HomePage from "./components/routing/HomePage";
import Navbar from "./components/routing/Navbar";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import About from "./components/routing/About";
import LoginForm from "./components/routing/LoginForm";
import Gallary from "./components/routing/Gallary";

function App() {
  const [loginInfo, setLoginInfo] = useState(null);

  console.log("loginInfo", loginInfo);
  return (
    <div className="App">
      {/* {loginInfo === null ? (
        <LoginPage setLoginInfo={setLoginInfo} loginInfo={loginInfo}/>
      ) : (
        <HomePage loginInfo={loginInfo}/>
      )} */}
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/loginform" element={<LoginForm />} />
          <Route path="/gallary" element={<Gallary />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
