import React, { Component } from 'react';
import Layout from './components/Layout'
import BurgerBuilder from './containers/BurgerBuilder/index'

class App extends Component {
  render() {
    return (
        <Layout>
            <BurgerBuilder />
        </Layout>
    );
  }
}

export default App;
