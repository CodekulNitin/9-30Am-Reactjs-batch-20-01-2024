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
  const [selectedEditRow, setSelectedEditRow] = useState(null);
  const [openItemCreationModal, setOpenItemCreationModal] = useState(false);
  const handleCloseItemCreationModal = () => setOpenItemCreationModal(false);

  console.log("selectedEditRow", selectedEditRow);
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
      <div className="mt-5">
        {tableData.length > 0 ? (
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
                {tableData.map((row, index) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedEditRow(row);
                          setOpenItemCreationModal(true);
                        }}
                      >
                        Edit
                      </button>
                      &nbsp;
                      <button>Delete</button>
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row["Item Name"]}
                    </TableCell>
                    <TableCell>{row["Item Code"]}</TableCell>
                    <TableCell>
                      {row.Active ? (
                        <span className="text-green-600 border border-green-600 p-1 px-2 rounded">
                          Active
                        </span>
                      ) : (
                        <span className="text-red-600 border border-red-600 rounded p-1">
                          InActive
                        </span>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <h1 className="my-28 text-gray-600">No Records Found...</h1>
        )}
      </div>
      {openItemCreationModal && (
        <ItemCreationModal
          open={openItemCreationModal}
          handleClose={handleCloseItemCreationModal}
          setTableData={setTableData}
          tableData={tableData}
          selectedEditRow={selectedEditRow}
          setSelectedEditRow={setSelectedEditRow}
        />
      )}
    </div>
  );
}

export default ItemCreationList;
