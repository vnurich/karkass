import React from 'react';
import styled from 'styled-components';

const StyledMasterMain = styled.div`
  flex: 1;
`;

const MasterMain = (props) => (
  <StyledMasterMain>
    { props.children }
  </StyledMasterMain>
);

export default MasterMain;
