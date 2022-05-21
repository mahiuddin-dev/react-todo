import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

import Todos from "./todos/index";
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Container className="my-3 center">
          <Row>
            <Col>
              <Todos />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
