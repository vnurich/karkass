import React from 'react';
import styled from 'styled-components';
import { media } from '../../theme';

const StyledHeadContainer = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  margin: 0 auto;
  ${media.phone`
    color: blue;
  `}
  ${media.tablet`
    color: navy;
  `}
  ${media.terminal`
    color: red;
  `}
  ${media.desktop`
    color: green;
  `}
`;

const HeadContainer = (props) => (
  <StyledHeadContainer>
    { props.children }
  </StyledHeadContainer>
);

export default HeadContainer;
