// Class Component
import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

// Imported Components
import SubTotal from './components/Subtotal/Subtotal';
import PickupSavings from './components/PickupSavings/PickupSavings';
import TaxesFees from './components/TaxesFees/TaxesFees';
import EstimatedTotal from './components/EstimatedTotal/EstimatedTotal';
import ItemDetails from './components/ItemDetails/ItemDetails';
import PromoCode from './components/PromoCode/PromoCode';

import { connect } from 'react-redux';
import { handleChange} from './actions/promoCodeActions';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 120,
      pickupSavings: -3.85,
      taxes: 0,
      estimatedTotal: 0,
      disablePromoButton: false
    } 
  }

  componentDidMount = () => {
    this.setState({
      taxes: (this.state.total + this.state.pickupSavings) * 0.0875
      },
      function(){
        this.setState({
          estimatedTotal: this.state.total + this.state.pickupSavings + this.state.taxes
        });
      }
    
    );
  };

  giveDiscount = () => {
    if(this.props.promoCode === 'Discount') {
      this.setState({
        estimatedTotal: this.state.estimatedTotal * 0.9
      },
      function(){
        this.setState({
          disablePromoButton: true
        });
      }
    )
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
          <br/>
          <ItemDetails price={this.state.estimatedTotal.toFixed(2)}/>
          <hr />
          <PromoCode 
            giveDiscount={()=> this.giveDiscount()}
            isDisabled={this.state.disablePromoButton}
          />
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  promoCode: state.promoCode.value
})

export default connect(mapStateToProps,{handleChange})(App);
