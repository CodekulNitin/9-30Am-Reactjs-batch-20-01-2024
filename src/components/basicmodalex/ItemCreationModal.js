import { Checkbox, FormControlLabel, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import * as React from "react";
import { useEffect } from "react";
import { useRef, useState } from "react";

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
  const [itemName, setItemName] = useState("");
  const [itemCode, setItemCode] = useState("");
  const [activeCheckbox, setActiveCheckbox] = useState(true);
  const useRef1 = useRef("");

  console.log("itemCreationData", itemName, itemCode, activeCheckbox);

  function handlSubmit() {
    let tempArr = [...props.tableData];
    let filteredArr = tempArr.filter(
      (list) => list["Item Code"] === props.selectedEditRow?.["Item Code"]
    ); //

    console.log("filteredArr", filteredArr);
    let tempObj = {
      "Item Name": itemName,
      "Item Code": itemCode,
      Active: activeCheckbox,
    };
    if (itemName !== "" && itemCode !== "") {
      tempArr.push(tempObj);
      props.setTableData(tempArr);
      setItemName("");
      setItemCode("");
      setActiveCheckbox(true);
      props.handleClose();
    }
  }
  React.useEffect(() => {
    if (props.selectedEditRow) {
      setItemName(props.selectedEditRow["Item Name"]);
      setItemCode(props.selectedEditRow["Item Code"]);
      setActiveCheckbox(props.selectedEditRow.Active);
    }
  }, [props.selectedEditRow]);

  useEffect(() => {
    useRef1.current.focus();
  }, []);

  console.log("selectedRow", props.selectedEditRow, itemCode);

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
              onClick={() => {
                props.handleClose();
                props.setSelectedEditRow(null);
                setItemName("");
                setItemCode("");
                setActiveCheckbox(true);
              }}
            >
              X
            </button>
          </div>
          <div className="flex space-x-2 items-center pt-2">
            <fieldset ref={useRef1}>
              <TextField
                size="small"
                type="text"
                label="Item Name"
                name="itemName"
                value={itemName}
                autoFocus={useRef1 !== "" ? true : false}
                onChange={(e) => setItemName(e.target.value)}
              />
            </fieldset>
            <TextField
              size="small"
              label="Item Code"
              name="itemCode"
              value={itemCode}
              onChange={(e) => setItemCode(e.target.value)}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={activeCheckbox}
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
              {props.selectedEditRow !== null ? "Update" : "Save"}
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
