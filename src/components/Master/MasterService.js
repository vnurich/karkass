import React from 'react';
import styled from 'styled-components';

const StyledMasterService = styled.div`
  width: auto;
`;

const MasterService = (props) => (
  <StyledMasterService>
    { props.children }
  </StyledMasterService>
);

export default MasterService;
