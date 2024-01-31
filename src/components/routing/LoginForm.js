import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate("");

  const handleLogin = () => {
    const loginObj = {
      userName: userName,
      userPassword: password,
    };

    navigate("/gallary", { state: loginObj });
    setUserName("");
    setPassword("");
  };
  return (
    <div className="grid justify-center gap-2 mt-16">
      <TextField
        name="userName"
        label="User Name"
        size="small"
        defaultValue={userName}
        onChange={(e) => {
          setUserName(e.target.value);
          console.log("userName", e.target.value);
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

export default LoginForm;
