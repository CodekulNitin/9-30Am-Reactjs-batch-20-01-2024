import React, { useState } from "react";
import LoginPage from "../loginpage/LoginPage";

function Navbar({userData,productData}) {
  const [openLoginModal, setOpenLoginModal] = useState(false); //
  const handleCloseLoginModal = () => setOpenLoginModal(false);

  // console.log("props",props);

  return (
    <>
      <nav className="flex justify-between w-full fixed px-6 p-4 shadow">
        <ul>
          <li>
            <a>Logo</a>
          </li>
        </ul>
        <ul className="flex space-x-4 items-center">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Contact us</a>
          </li>
          <button
            type="button"
            onClick={() => {
              setOpenLoginModal(true);
            }}
          >
            Log In
          </button>
          <a>
            {userData?.userName}
            {productData.productName}
          </a>
        </ul>
      </nav>
      <LoginPage open={openLoginModal} handleClose={handleCloseLoginModal} />
    </>
  );
}
export default Navbar;
