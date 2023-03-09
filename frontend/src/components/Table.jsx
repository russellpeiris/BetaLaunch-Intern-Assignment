/* eslint-disable react/prop-types */
import React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import Button from './Button';

export default function Table({
  rowData, deleteEmployee, setSelectedId, setShowPopUp,
}) {
  const columns = [

    { field: 'name', headerName: 'Display Name', flex: 1 },
    {
      field: '_id', headerName: 'Emp ID', flex: 1, valueFormatter: (params) => params.value.slice(-4),
    },
    { field: 'designation', headerName: 'Designation', flex: 1 },
    { field: 'empType', headerName: 'Emp Type', flex: 1 },
    { field: 'exp', headerName: 'Experience', flex: 1 },
    {
      field: '',
      headerName: 'Action',
      flex: 1,
      align: 'center',
      headerAlign: 'center',

      renderCell: (params) => {
        const handleDelete = () => {
          deleteEmployee(params.id);
        };

        const handleUpdate = () => {
          setShowPopUp(true);
          setSelectedId(params.id);
        };

        return (
          <div style={{ display: 'flex', gap: '8px' }}>
            <Button backgroundColor="transparent" color="#0052EA" onClick={handleUpdate}>Edit</Button>
            <Button backgroundColor="transparent" color="#C62828" onClick={handleDelete}>Delete</Button>
          </div>
        );
      },

    },
  ];

  // eslint-disable-next-line no-underscore-dangle
  const getRowId = (row) => row._id;
  return (

    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rowData}
        columns={columns}
        pageSize={2}
        getRowId={getRowId}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}
