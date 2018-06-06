import React from 'react';
import styled from 'styled-components';

const StyledHeadNav = styled.div`
  flex: 1;
`;

const HeadNav = (props) => (
  <StyledHeadNav>
    { props.children }
  </StyledHeadNav>
);

export default HeadNav;
