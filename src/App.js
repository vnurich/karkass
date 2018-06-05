import React, { Component } from 'react';

import Head from './components/Head/Head';
import Master from './components/Master/Master';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div id="app">
        <Head />
        <Master />
        <Footer />
      </div>
    );
  }
}

export default App;
