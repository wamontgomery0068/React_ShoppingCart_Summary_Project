import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

import SubTotal from './components/Subtotal/Subtotal';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 120
    }
  }

  render() {
    return (
      <div className = "Application_Container">
        <Container className = "Purchase_Card">
          <SubTotal price={this.state.total.toFixed(2)}/>
        </Container>
      </div>
    );
  }
}

export default App;
