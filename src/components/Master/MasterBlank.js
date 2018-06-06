import React from 'react';
import styled from 'styled-components';

const StyledMasterBlank = styled.div`
  width: auto;
`;

const MasterBlank = (props) => (
  <StyledMasterBlank>
    { props.children }
  </StyledMasterBlank>
);

export default MasterBlank;
