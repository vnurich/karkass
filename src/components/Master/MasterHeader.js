import React from 'react';
import styled from 'styled-components';
import { media } from '../../theme';

const StyledMasterHeader = styled.div`
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

const MasterHeader = (props) => (
  <StyledMasterHeader>
    { props.children }
  </StyledMasterHeader>
);

export default MasterHeader;
