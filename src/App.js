import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SignUp from "./components/SignUp";
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import EditStudent from './components/edit-student.component'
import InventoryList from './components/inventory-list.component'
import AddInventory from './components/add-inventory.component'
import SignIn from './components/SignIn' 

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to={'/add-inventory'} className="nav-link">
                  Inventorium
                </Link>
              </Navbar.Brand>

              <Nav className="justify-content-end">
              <Nav>
                  <Link to={'/signin'} className="nav-link">
                    SignIn
                  </Link>
                </Nav>
                <Nav>
                  <Link to={'/signup'} className="nav-link">
                    SignUp
                  </Link>
                </Nav>
                <Nav>
                  <Link to={'/add-inventory'} className="nav-link">
                    Add Inventory
                  </Link>
                </Nav>

                <Nav>
                  <Link to={'/inventory-list'} className="nav-link">
                    Inventory List
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
        </header>

        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Switch>
                  <Route
                    exact
                    path="/"
                    component={(props) => <AddInventory {...props} />}
                  />
                  <Route
                    exact
                    path="/signup"
                    component={(props) => <SignUp {...props} />}
                  />
                  <Route
                    exact
                    path="/signin"
                    component={(props) => <SignIn {...props} />}
                    />
                  <Route
                    exact
                    path="/add-inventory"
                    component={(props) => <AddInventory {...props} />}
                  />
                  <Route
                    exact
                    path="/edit-student/:id"
                    component={(props) => <EditStudent {...props} />}
                  />
                  <Route
                    exact
                    path="/inventory-list"
                    component={(props) => <InventoryList {...props} />}
                  />
                </Switch>
              </div>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  )
}

export default App
