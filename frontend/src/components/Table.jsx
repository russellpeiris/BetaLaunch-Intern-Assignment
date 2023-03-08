import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';


const columns = [
  { field: 'name', headerName: 'Display Name', width: 230 },
  { field: 'empID', headerName: 'Emp ID', width: 230 },
  { field: 'designation', headerName: 'Designation', width: 230 },
  { field: 'empType', headerName: 'Emp Type', width: 230 },
  { field: 'exp', headerName: 'Experience',  width: 230 },
];

const rows = [
  { id: 1, name: 'John Doe', empID: 'EMP001', designation: 'Manager', empType: 'Full Time', exp: 5 },
  { id: 2, name: 'Jane Smith', empID: 'EMP002', designation: 'Engineer', empType: 'Full Time', exp: 2 },
  { id: 3, name: 'Bob Johnson', empID: 'EMP003', designation: 'Salesperson', empType: 'Full Time', exp: 10 },
  { id: 4, name: 'Mary Brown', empID: 'EMP004', designation: 'Manager', empType: 'Full Time', exp: 8 },
  { id: 5, name: 'Tom Wilson', empID: 'EMP005', designation: 'Designer', empType: 'Full Time', exp: 4 },
  { id: 11, name: 'John Doe', empID: 'EMP001', designation: 'Manager', empType: 'Full Time', exp: 5 },
  { id: 12, name: 'Jane Smith', empID: 'EMP002', designation: 'Engineer', empType: 'Full Time', exp: 2 },
  { id: 13, name: 'Bob Johnson', empID: 'EMP003', designation: 'Salesperson', empType: 'Full Time', exp: 10 },
  { id: 14, name: 'Mary Brown', empID: 'EMP004', designation: 'Manager', empType: 'Full Time', exp: 8 },
  { id: 15, name: 'Tom Wilson', empID: 'EMP005', designation: 'Designer', empType: 'Full Time', exp: 4 },
];


export default function Table() {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={2}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}
