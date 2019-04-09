// Class Component

import React, { Component} from 'react';
import { Row, Col, Tooltip, OverlayTrigger } from 'react-bootstrap';


export default class PickupSavings extends Component {
    render() {

        const tooltip = (

            <Tooltip id = "Tooltip">
                <p>
                     If you pick up your order in the store, we will pass the savings to you. 
                </p>
            </Tooltip>
        )

        return(
            <Row className="show-grid">
                <Col md={6}>
                    <OverlayTrigger placement="bottom" overlay={tooltip}>
                        <div stylePickUp={StyleSheet.PickupSavings}> Pickup Savings </div>
                    </OverlayTrigger>
                </Col>
                <Col stylePrice={StyleSheet.totalSavings} md={6}>
                    {`${this.props.price}`}
                </Col>
            </Row>
        )
    }
}