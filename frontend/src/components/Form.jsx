import React from 'react'
import styled from 'styled-components'
import { TextField } from '@mui/material'
const FormContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    padding: 24px 32px;
`
const Text = styled.div`
    font-size: 16px;
    font-weight: 500;
`

const Field = styled.input`
    grid-column: span ${props => props.span ? props.span : 1};
    border: 1px solid #E0E0E0;
    border-radius: 4px;
    padding: 12px 16px;
    outline: none;
`
const Select = styled.select`
    grid-column: span ${props => props.span ? props.span : 1};
    border: 1px solid #E0E0E0;
    border-radius: 4px;
    padding: 12px 16px;
    outline: none;
`
const TextArea = styled.textarea`
    grid-column: span ${props => props.span ? props.span : 1};
    border: 1px solid #E0E0E0;
    border-radius: 4px;
    padding: 12px 16px;
    outline: none;
    max-width: inherit;
    resize: none;
`
const Form = () => {
  return (
    <FormContainer>
      <Field placeholder='Full Name*' span={2}/>
      <Field placeholder='Name with initials*'/>
      <Field placeholder='Prefered / Display Name'/>
      <Select />
      <Field placeholder='Date of Birth' type="text" 
        onFocus={(e) => (e.target.type = "date")}
        onBlur={(e) => (e.target.type = "text")}
      />
      <Field placeholder='Email' type="email"/>
      <Field placeholder='07X-XXX-XXXX' type="tel" maxLength={10}/>
      <Field placeholder='Designation'/>
      <Select />
      <Field placeholder='Joined Date'
        onFocus={(e) => (e.target.type = "date")}
        onBlur={(e) => (e.target.type = "text")}
      />
      <Select />
      <Field placeholder='Salary'/>
      <TextArea placeholder='Personal Notes' span={2}  rows={5} />
    </FormContainer>
  )
}

export default Form
