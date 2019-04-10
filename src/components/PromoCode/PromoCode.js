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

import './PromoCode.css';

class PromoCode extends Component {
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

                <Collapse in={this.state.open}>
                    <div>
                        <Row className="show-grid">
                            <Col md={12}>
                                <Form>
                                    <FormGroup controlID="formInlineName">
                                        <Form.Label className = "Promo_Text"> Promo Code </Form.Label>
                                        <Form.Control 
                                            type="text"
                                            placeholder="Enter promo code"
                                            value={this.props.PromoCode}
                                            onChange={this.handleChange}
                                        />
                                    </FormGroup>
                                    <Button
                                        block
                                        bsStyle="success"
                                        className="btn_round"
                                        disabled={this.props.isDisabled}
                                        onClick={this.props.giveDiscount}
                                    
                                    > 
                                    Apply
                                    </Button>
                                </Form>
                            </Col>
                        </Row>
                    </div>
                </Collapse>
            </div>
        )
    }
}

export default PromoCode;

