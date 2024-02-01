import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import ItemCreationModal from "./ItemCreationModal";
import Paper from "@mui/material/Paper";

function ItemCreationList() {
  const [tableData, setTableData] = useState([]);
  const [openItemCreationModal, setOpenItemCreationModal] = useState(false);
  const handleCloseItemCreationModal = () => setOpenItemCreationModal(false);

  console.log("tableData", tableData);
  return (
    <div className="pt-5 text-center px-4">
      <h1 className="text-lg font-semibold">Item Creation List</h1>
      <div className="flex justify-between whitespace-nowrap items-center">
        <div className="w-4/12 flex space-x-2 items-center">
          <TextField
            size="small"
            label="Search By Item Name/Item Code"
            fullWidth
          />
          <button
            type="button"
            className="bg-indigo-900 text-white rounded h-9 px-3"
          >
            Search
          </button>
        </div>
        <div>
          <button
            type="button"
            className="bg-indigo-900 text-white rounded h-9 px-3"
            onClick={() => setOpenItemCreationModal(true)}
          >
            Add +
          </button>
        </div>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small">
          <TableHead>
            <TableRow sx={{ background: "lightgray" }}>
              <TableCell>Action</TableCell>
              <TableCell>Item Name</TableCell>
              <TableCell>Item Code</TableCell>
              <TableCell>Active</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>
                  <button>Edit</button> &nbsp;
                  <button>Delete</button>
                </TableCell>
                <TableCell component="th" scope="row">
                  {row["Item Name"]}
                </TableCell>
                <TableCell>{row["Item Code"]}</TableCell>
                <TableCell>{row.Active}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {ItemCreationModal ? (
        <ItemCreationModal
          open={openItemCreationModal}
          handleClose={handleCloseItemCreationModal}
          setTableData={setTableData}
          tableData={tableData}
        />
      ) : null}
    </div>
  );
}

export default ItemCreationList;
