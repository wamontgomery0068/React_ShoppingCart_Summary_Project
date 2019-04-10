// Class Component
import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

// Imported Components
import SubTotal from './components/Subtotal/Subtotal';
import PickupSavings from './components/PickupSavings/PickupSavings';
import TaxesFees from './components/TaxesFees/TaxesFees';
import EstimatedTotal from './components/EstimatedTotal/EstimatedTotal';
import ItemDetails from './components/ItemDetails/ItemDetails';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 120,
      pickupSavings: -3.85,
      taxes: 0,
      estimatedTotal: 0
    } 
  }

  render() {
    return (
      <div className = "Application_Container">
        <Container className = "Purchase_Card">
          <SubTotal price={this.state.total.toFixed(2)}/>
          <PickupSavings price={this.state.pickupSavings.toFixed(2)}/>
          <TaxesFees taxes={this.state.taxes.toFixed(2)} />
          <hr />
          <EstimatedTotal price={this.state.estimatedTotal.toFixed(2)} />
          <ItemDetails />
        </Container>
      </div>
    );
  }
}

export default App;
