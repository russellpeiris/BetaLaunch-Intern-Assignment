import styled from "styled-components";
import Button from "./Button";

const ButtonsContainer = styled.div`
    padding: 24px 32px;
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: end;
    border-radius: inherit;
`
export const PopUpFooter = ({onClose}) => {
    function handleCancelClick() {
        onClose();
      }
    return (
        <ButtonsContainer>
            <Button 
                text="Cancel" color="#0052EA" 
                backgroundColor="#ffffff" 
                onClick={handleCancelClick}>
                Cancel
            </Button>
            <Button 
                text="Add People" 
                color="white" 
                backgroundColor="#0052EA">
                Add People
            </Button>
        </ButtonsContainer>
    );
}