import React from 'react';
import styled from 'styled-components';

const StyledMasterAside = styled.div`
  width: 300px;
`;

const MasterAside = (props) => (
  <StyledMasterAside>
    { props.children }
  </StyledMasterAside>
);

export default MasterAside;
