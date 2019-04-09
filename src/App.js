// Class Component

// Imported Dependencies
import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

// Imported Components
import SubTotal from './components/Subtotal/Subtotal';
import PickupSavings from './components/PickupSavings/PickupSavings';

// 
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 120,
      pickupSavings: -3.85
    } 
  }

  render() {
    return (
      <div className = "Application_Container">
        <Container className = "Purchase_Card">
          <SubTotal price={this.state.total.toFixed(2)}/>
          <PickupSavings price={this.state.pickupSavings.toFixed(2)}/>
        </Container>
      </div>
    );
  }
}

export default App;
