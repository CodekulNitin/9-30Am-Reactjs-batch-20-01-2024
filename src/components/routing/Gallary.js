import Button from "@mui/material/Button";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import FormModal from "./FormModal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function Gallary() {
  let location = useLocation();
  console.log("location", location);
  const [tableData, setTableData] = useState([]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      {/* <h1>UserName : {location.state.userName}</h1> */}

      <div>
        <Button onClick={handleOpen}>Open modal</Button>

        <FormModal
          open={open}
          handleClose={handleClose}
          setTableData={setTableData}
          tableData={tableData}
        />
      </div>
    </div>
  );
}

export default Gallary;
