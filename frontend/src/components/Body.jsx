/* eslint-disable no-underscore-dangle */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-alert */
/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Button from './Button';
import Table from './Table';
import AddEmployee from '../pages/AddEmployee';

const BodyContainer = styled.div`

`;
const TableContainer = styled.div`
    margin: 0 32px;
`;
const ButtonsContainer = styled.div`
    padding: 24px 32px;
    display: flex;
    align-items: center;
    gap: 8px;
    justify-content: end;
`;
const Select = styled.select`
    width: 174px;
    height: 32px;
    border-radius: 4px;
    border: 1px solid #E0E0E0;
    background-color: #ffffff;
    color: black;
    outline: none;
`;
const Option = styled.option`
    
`;
function Body() {
  const [employees, setEmployees] = useState([]);
  const [selectedId, setSelectedId] = useState(false);
  console.log(selectedId);

  const deleteEmployee = (id) => {
    axios
      .delete(`http://localhost:5000/employees/${id}`)
      .then(() => {
        alert('Employee deleted successfully!');
        const updatedEmployees = employees.filter((emp) => emp._id !== id);
        setEmployees(updatedEmployees);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axios.get('http://localhost:5000/employees')
      .then((res) => {
        setEmployees(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [showPopUp, setShowPopUp] = useState(false);

  const handleButtonClick = () => {
    setShowPopUp(true);
  };

  const handleClosePopup = () => {
    setShowPopUp(false);
  };

  const [empType, setEmpType] = useState('All');

  const handleChange = (e) => {
    setEmpType(e.target.value);
  };

  // If empType is Other, then all undefined employee types will
  // filter and if not. Or filtered according to the given type

  const filteredRows = empType === 'Other'
    ? employees.filter((row) => row.empType !== 'All'
          && row.empType !== 'Full Time'
          && row.empType !== 'Part Time'
          && row.empType !== 'Contract Basis')
    : empType === 'All'
      ? employees
      : employees.filter((row) => row.empType === empType);

  return (

    <BodyContainer>
      <ButtonsContainer>
        <Select value={empType} onChange={handleChange}>
          <Option value="All">All Employees</Option>
          <Option value="Full Time">Full Time</Option>
          <Option value="Part Time">Part Time</Option>
          <Option value="Contract Basis">Contract Basis</Option>
          <Option value="Other">Other</Option>
        </Select>
        <Button
          text="Add People"
          color="white"
          backgroundColor="#0052EA"
          onClick={handleButtonClick}
        >
          Add People
        </Button>
      </ButtonsContainer>
      <TableContainer>
        <Table
          rowData={filteredRows}
          deleteEmployee={deleteEmployee}
          setShowPopUp={setShowPopUp}
          setSelectedId={setSelectedId}
        />
        <p style={{ color: '#C62828', fontSize: '14px' }}> Due to issues in @mui/x-data-grid v6.0.0 (latest) pagination does not work. It works in v5 which I used in a different project.</p>
      </TableContainer>
      {showPopUp && <AddEmployee selectedId={selectedId} onClose={handleClosePopup} />}
    </BodyContainer>
  );
}

export default Body;
