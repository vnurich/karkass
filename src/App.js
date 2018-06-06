import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

import Head from './components/Head/Head';
import Master from './components/Master/Master';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={ theme }>
        <React.Fragment>
          <Head />
          <Master />
          <Footer />
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

export default App;
