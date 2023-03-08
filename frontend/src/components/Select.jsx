import styled from "styled-components";
import React from 'react'

const StyledSelect = styled.select`
    width: 174px;
    height: 32px;
    border-radius: 4px;
    border: 1px solid #E0E0E0;
    background-color: #ffffff;
    color: black;
    outline: none;
`
const Option = styled.option`
    
`
export const Select = () => {
  return (
    <StyledSelect>
        <Option>Employee Types</Option>
        <Option value="fulltime">Full Time</Option>
        <Option value="parttime">Part Time</Option>
        <Option value="contractbasis">Contract Basis</Option>
        <Option value="other">Other</Option>
    </StyledSelect>
  )
}
