import React, { Component } from 'react';
import { Button, Collapse, Media, Row, Col} from 'react-bootstrap';

import './ItemDetails.css';

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
                
                <Collapse in={this.state.open}>
                    <div className = "Collapse_Container">
                        <img
                            className = "Item_Image" 
                            alt="jersey"
                            src="https://fanatics.frgimages.com/FFImage/thumb.aspx?i=/productimages/_3380000/altimages/ff_3380166-c0d9d0ff8978abbfe394alt1_full.jpg&w=900"
                        />
                        <div className = "Item_Details">
                            <p className = "Item_Name"> Ronald Acuña Jr Majestic Jersey </p>
                            <p className = "Item_Description"> It features bold Atlanta Braves graphics that are perfect for showing your team pride as well as Cool Base technology that wicks away moisture. </p>
                        </div>
                    </div>
                </Collapse>
                
            </div>
        )
    }
}

{/* <Media>
                            <img 
                                width={150}
                                height={150}
                                alt="jersey"
                                src="https://fanatics.frgimages.com/FFImage/thumb.aspx?i=/productimages/_3380000/altimages/ff_3380166-c0d9d0ff8978abbfe394alt1_full.jpg&w=900"
                            />
                        </Media>
                        <h5> Robert Acuna Baseball Jersey </h5> */}
