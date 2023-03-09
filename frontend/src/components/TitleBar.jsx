import React from 'react';
import styled from 'styled-components';

const TitleBarContainer = styled.div`
    height: ${(props) => props.height};
    background-color: #ffffff;
    border-radius: inherit;
`;
const Title = styled.div`
    font-size: 20px;
    font-weight: 600;
    padding-top: ${(props) => props.ptop};
    padding-left: ${(props) => props.pleft};
`;

function TitleBar(props) {
  return (
    <TitleBarContainer height={props.height}>
      <Title ptop={props.ptop} pleft={props.pleft}>{props.title}</Title>
    </TitleBarContainer>
  );
}

export default TitleBar;
