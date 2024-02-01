import { Checkbox, FormControlLabel, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import * as React from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 2,
};

export default function ItemCreationModal(props) {
  const [itemName, setItemName] = React.useState("");
  const [itemCode, setItemCode] = React.useState("");
  const [activeCheckbox, setActiveCheckbox] = React.useState(true);

  console.log("itemCreationData", itemName, itemCode, activeCheckbox);

  function handlSubmit() {
    let tempArr = [...props.tableData];

    let tempObj = {
      "Item Name": itemName,
      "Item Code": itemCode,
      Active: activeCheckbox,
    };
    console.log("tempObj", tempObj);
    if (itemName !== "" || itemCode !== "") {
      tempArr.push(tempObj);
      props.setTableData(tempArr);
      setItemName("");
      setItemCode("");
      setActiveCheckbox(true);
      props.handleClose();
    }
  }

  return (
    <div>
      <Modal
        open={props.open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex justify-between items-center">
            <h1 className="font-semibold text-lg">Item Creation Modal</h1>
            <button
              className="text-red-600 border border-red-600 px-2 rounded font-semibold"
              onClick={props.handleClose}
            >
              X
            </button>
          </div>
          <div className="flex space-x-2 items-center pt-2">
            <TextField
              size="small"
              label="Item Name"
              name="itemName"
              defaultValue={itemName}
              onChange={(e) => setItemName(e.target.value)}
            />
            <TextField
              size="small"
              label="Item Code"
              name="itemCode"
              defaultValue={itemCode}
              onChange={(e) => setItemCode(e.target.value)}
            />
            <FormControlLabel
              control={
                <Checkbox
                  defaultChecked={activeCheckbox}
                  onChange={(e) => setActiveCheckbox(e.target.checked)}
                />
              }
              label="Active"
            />
          </div>
          <div className="flex justify-end pt-2">
            <button
              type="button"
              className="bg-green-600 rounded px-3 text-white h-9"
              onClick={handlSubmit}
            >
              Save
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
