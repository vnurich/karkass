import React, { Component } from 'react';

import MasterHeader from './MasterHeader';
import MasterContainer from './MasterContainer';
import MasterService from './MasterService';
import MasterMain from './MasterMain';
import MasterAside from './MasterAside';
import MasterBlank from './MasterBlank';

class Master extends Component {
  render() {
    return (
      <div id="master">
        <MasterHeader>
          MasterHeader
        </MasterHeader>
        <MasterContainer>
          <MasterService>MasterService</MasterService>
          <MasterMain>MasterMain</MasterMain>
          <MasterAside>MasterAside</MasterAside>
          <MasterBlank>MasterBlank</MasterBlank>
        </MasterContainer>
      </div>
    );
  }
}

export default Master;
