import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className = "Application_Container">
        <Container className = "Purchase_Card">
          <h1> Hakuna Matata </h1>
        </Container>
      </div>
    );
  }
}

export default App;
