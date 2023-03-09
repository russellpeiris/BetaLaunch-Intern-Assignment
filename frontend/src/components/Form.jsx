/* eslint-disable no-return-assign */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    padding: 24px 32px;
`;

const Field = styled.input`
    grid-column: span ${(props) => (props.span ? props.span : 1)};
    border: 1px solid #E0E0E0;
    border-radius: 4px;
    padding: 12px 16px;
    outline: none;
`;
const Select = styled.select`
    grid-column: span ${(props) => (props.span ? props.span : 1)};
    border: 1px solid #E0E0E0;
    border-radius: 4px;
    padding: 12px 16px;
    outline: none;
`;
const TextArea = styled.textarea`
    grid-column: span ${(props) => (props.span ? props.span : 1)};
    border: 1px solid #E0E0E0;
    border-radius: 4px;
    padding: 12px 16px;
    outline: none;
    max-width: inherit;
    resize: none;
`;
function Form({ handleChange, handleSubmit, empData }) {
  return (
    <FormContainer onSubmit={handleSubmit}>
      <Field
        name="name"
        onChange={handleChange}
        value={empData.name}
        placeholder="Full Name*"
        span={2}
      />

      <Field
        name="initials"
        value={empData.initials}
        placeholder="Name with initials*"
        onChange={handleChange}
      />

      <Field
        name="displayName"
        value={empData.displayName}
        placeholder="Prefered / Display Name"
        onChange={handleChange}
      />

      <Select
        name="gender"
        value={empData.gender}
        onChange={handleChange}
      >
        <option value="">--Select Gender--</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>

      </Select>

      <Field
        name="dob"
        value={empData.dob}
        onChange={handleChange}
        placeholder="Date of Birth"
        type="text"
        onFocus={(e) => (e.target.type = 'date')}
        onBlur={(e) => (e.target.type = 'text')}
      />

      <Field
        name="email"
        value={empData.email}
        onChange={handleChange}
        placeholder="Email"
        type="email"
      />

      <Field
        name="mobile"
        value={empData.mobile}
        onChange={handleChange}
        placeholder="07X-XXX-XXXX"
        type="tel"
        maxLength={10}
      />

      <Field
        name="designation"
        value={empData.designation}
        onChange={handleChange}
        placeholder="Designation"
      />
      <Select
        name="empType"
        value={empData.empType}
        onChange={handleChange}
      >
        <option value="">--Select Employee Type--</option>
        <option value="Full Time">Full Time</option>
        <option value="Part Time">Part Time</option>
        <option value="Contract Basis">Contract Basis</option>
        <option value="Other">Other</option>
      </Select>

      <Field
        placeholder="Joined Date"
        name="joinedDate"
        value={empData.joinedDate}
        onChange={handleChange}
        onFocus={(e) => (e.target.type = 'date')}
        onBlur={(e) => (e.target.type = 'text')}
      />
      <Select
        name="exp"
        value={empData.exp}
        onChange={handleChange}
      >
        <option value="">--Select Experience--</option>
        <option value="Less than 1 Year">0 - 1</option>
        <option value="1 Year">1 Year</option>
        <option value="2 Year">2 Year</option>
        <option value="3 Year">3 Year</option>
      </Select>

      <Field
        name="salary"
        value={empData.salary}
        onChange={handleChange}
        placeholder="Salary"
      />

      <TextArea
        name="note"
        value={empData.note}
        onChange={handleChange}
        placeholder="Personal Notes"
        span={2}
        rows={5}
      />
    </FormContainer>
  );
}

export default Form;
