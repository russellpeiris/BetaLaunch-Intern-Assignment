import React from 'react'
import styled from 'styled-components'
import { Border } from '../components/Border'
import Form from '../components/Form'
import { PopUpFooter } from '../components/PopUpFooter'
import TitleBar from '../components/TitleBar'

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
    
`
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
`

const AddEmployee = ({onClose}) => {
  return (
    <Container>
        <PopUp>
            <TitleBar height = '56px' ptop = '16px' pleft = '24px'  title="Add People"/>
            <Border/>
            <Form/>
            <Border/>
            <PopUpFooter onClose={onClose}/>
        </PopUp>

    </Container>    
  )
}

export default AddEmployee
