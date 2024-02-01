import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="flex w-full justify-between p-2 shadow items-center">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
        <ul className="flex space-x-3 items-center">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/loginform">LoginForm</Link>
          </li>
          <li>
            <Link to="/gallary">Gallary</Link>
          </li>
          <li>
            <Button>Log In</Button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
