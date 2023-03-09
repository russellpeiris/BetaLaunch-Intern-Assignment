/* eslint-disable no-alert */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Border } from '../components/Border';
import Form from '../components/Form';
import { PopUpFooter } from '../components/PopUpFooter';
import TitleBar from '../components/TitleBar';

const Container = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); 
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.3);
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
    
`;
const PopUp = styled.div`
    margin: 30px;
    height: max-content;
    width: 830px;
    position: relative;
    background-color: #ffffff;
    position: relative;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
`;

function AddEmployee({ onClose, selectedId }) {
  const [empData, setEmpData] = useState({
    name: '',
    initials: '',
    displayName: '',
    gender: '',
    dob: '',
    email: '',
    mobile: '',
    designation: '',
    empType: '',
    joinedDate: '',
    exp: '',
    salary: '',
    note: '',
  });

  const handleChange = (e) => {
    setEmpData({
      ...empData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    const getEmployee = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/employees/${selectedId}`);
        setEmpData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getEmployee();
  }, []);

  const updateEmployee = async () => {
    try {
      console.log(selectedId);
      await axios.patch(`http://localhost:5000/employees/update/${selectedId}`, empData);
      // eslint-disable-next-line no-alert
      alert('Updated Successfully!');
      onClose();
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/employees/create', empData);
      console.log(empData);
      alert('Added Successfully!');
      onClose();
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <PopUp>
        <TitleBar height="56px" ptop="16px" pleft="24px" title="Add People" />
        <Border />
        <Form handleChange={handleChange} empData={empData} />
        <Border />
        <PopUpFooter
          handleSubmit={handleSubmit}
          onClose={onClose}
          selectedId={selectedId}
          updateEmployee={updateEmployee}
        />
      </PopUp>

    </Container>
  );
}

export default AddEmployee;
