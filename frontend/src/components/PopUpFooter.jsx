/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const ButtonsContainer = styled.div`
    padding: 24px 32px;
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: end;
    border-radius: inherit;
`;
// eslint-disable-next-line import/prefer-default-export
export function PopUpFooter({
  onClose, handleSubmit, selectedId, updateEmployee,
}) {
  function handleCancelClick() {
    onClose();
  }
  return (
    <ButtonsContainer>
      <Button
        text="Cancel"
        color="#0052EA"
        backgroundColor="#ffffff"
        onClick={handleCancelClick}
      >
        Cancel
      </Button>
      <Button
        color="white"
        backgroundColor="#0052EA"
        onClick={selectedId ? updateEmployee : handleSubmit}
      >
        {
                     selectedId ? 'Update' : 'Add People'
               }
      </Button>
    </ButtonsContainer>
  );
}
