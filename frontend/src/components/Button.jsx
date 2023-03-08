import styled from "styled-components";

const Button = styled.button`
    height: 32px;
    border-radius: 4px;
    border: none;
    background-color:${props => props.backgroundColor};
    color: ${props => props.color};
    padding: 6px 16px 6px 16px;
    font-weight: 500;
    cursor: pointer;
`
export default Button
