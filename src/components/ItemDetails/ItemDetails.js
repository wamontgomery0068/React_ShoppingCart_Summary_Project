import React, { Component } from 'react';
import { Button, Collapse, Well, Media, Row, Col} from 'react-bootstrap';

export default class ItemDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false
            // The reason for the "open: false" is because we're going to be toggling with the open state of the collapse
        }
    }

    render(){
        return (
            <div>

                <Button
                    className = "item-details-button"
                    bsStyle="link"
                    onClick={() => this.setState({open: !this.state.open})}
                    // onClick is going to be a callback to this dot setState and it's toggling open between true and false
                >
                { this.state.open === false ? `See`: `Hide`} item details
                { this.state.open === false ? `+`: `-`}
                </Button>
                
            </div>
        )
    }
}