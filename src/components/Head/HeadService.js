import React from 'react';
import styled from 'styled-components';

const StyledHeadService = styled.div`
  width: auto;
`;

const HeadService = (props) => (
  <StyledHeadService>
    { props.children }
  </StyledHeadService>
);

export default HeadService;
