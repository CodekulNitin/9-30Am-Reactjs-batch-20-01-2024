import { Checkbox, FormControlLabel } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import * as React from "react";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import InputField from "../common/formfiled/InputField";

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
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();
  const [itemName, setItemName] = useState("");
  const [itemCode, setItemCode] = useState("");
  const [activeCheckbox, setActiveCheckbox] = useState(true);
  const useRef1 = useRef("");
  const useRef2 = useRef("");
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
    if (useRef1.current) {
      useRef1.current.focus();
    }
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
            <InputField
              control={control}
              size="small"
              type="text"
              label="Item Name"
              name="itemName"
              value={itemName}
              inputRef={useRef1}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  useRef2.current.focus();
                }
              }}
            />
            <InputField
              control={control}
              size="small"
              type="text"
              label="Item Code"
              name="itemCode"
              inputRef={useRef2}
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
