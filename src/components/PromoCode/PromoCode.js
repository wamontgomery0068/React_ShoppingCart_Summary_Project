import React, { Component } from 'react';
import { 
    Button, 
    Collapse, 
    Form, 
    Row, 
    Col, 
    FormGroup, 
    ControlLabel, 
    FormControl 
} from 'react-bootstrap';

class PromoCodeDiscount extends Component {
    constructor(props) {
        super (props);

        this.state = {
            open: false,
            value: ''
        };
    }

    render() {
        return(
            <div>
                <Button
                    className = "promo_code_button"
                    bsStyle="link"
                    onClick={() => this.setState({open: !this.state.open})}
                >

                {this.state.open === false ? `Apply ` : `Hide `}
                promo code
                {this.state.open === false ? `+` : `-`}

                </Button>
            </div>
        )
    }
}

export default PromoCodeDiscount;

