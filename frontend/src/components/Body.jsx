import React, {useState} from 'react'
import styled from 'styled-components'
import Button from './Button'
import { Select } from './Select'
import Table from './Table';
import AddEmployee from '../pages/AddEmployee'

const BodyContainer = styled.div`

`
const TableContainer = styled.div`
    margin: 0 32px;
`
const ButtonsContainer = styled.div`
    padding: 24px 32px;
    display: flex;
    align-items: center;
    gap: 8px;
    justify-content: end;
`

const Body = () => {
    const [showPopUp, setShowPopUp] = useState(false)

    function handleButtonClick() {
        setShowPopUp(true);
        console.log('works')
      }
    
      function handleClosePopup() {
        setShowPopUp(false);
      }
  return (
    <BodyContainer>
        <ButtonsContainer>
            <Select/>
            <Button 
                text="Add People" color="white" 
                backgroundColor="#0052EA"
                onClick={handleButtonClick}>
                Add People
            </Button>
        </ButtonsContainer>
        <TableContainer>
            <Table/>
        </TableContainer>
            {showPopUp && <AddEmployee onClose = {handleClosePopup}/>}
    </BodyContainer>
  )
}

export default Body
