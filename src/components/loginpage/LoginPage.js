import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

function LoginPage({ setLoginInfo, loginInfo }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    if (loginInfo !== null) {
      const loginObj = {
        userName: userName,
        userPassword: password,
      };
      setLoginInfo(loginObj);
      setUserName("");
      setPassword("");
    } else {
      alert("Please Fill User Name And Password");
    }
  };
  return (
    <div className="grid justify-center gap-2 mt-16">
      <TextField
        name="userName"
        label="User Name"
        size="small"
        defaultValue={userName}
        onChange={(e) => {setUserName(e.target.value)
        console.log("userName",e.target.value);
        }}
      />
      <TextField
        name="password"
        label="Password"
        size="small"
        defaultValue={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button type="button" variant="contained" onClick={handleLogin}>
        Login
      </Button>
    </div>
  );
}

export default LoginPage;
