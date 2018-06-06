import React from 'react';

import HeadContainer from './HeadContainer';
import HeadNav from './HeadNav';
import HeadService from './HeadService';

const Head = (props) => (
  <div id="head">
    <HeadContainer>
      <HeadService>HeadService</HeadService>
      <HeadNav>HeadNav</HeadNav>
      <HeadService>HeadService</HeadService>
    </HeadContainer>
  </div>
);

export default Head;
