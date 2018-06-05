import React from 'react';

import HeadContainer from './HeadContainer';
import HeadLogo from './HeadLogo';
import HeadNav from './HeadNav';
import HeadService from './HeadNav';

const Head = (props) => (
  <div id="head">
    <HeadContainer>
      <HeadLogo>HeadLogo</HeadLogo>
      <HeadNav>HeadNav</HeadNav>
      <HeadService>HeadService</HeadService>
    </HeadContainer>
  </div>
);

export default Head;
