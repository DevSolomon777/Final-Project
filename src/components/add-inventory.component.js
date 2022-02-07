import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class AddInventory extends Component {

  constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeProductName = this.onChangeProductName.bind(this);
    this.onChangeProductSKU = this.onChangeProductSKU.bind(this);
    this.onChangeProductID = this.onChangeProductID.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      name: '',
      SKU: '',
      ID: ''
    }
  }

  onChangeProductName(e) {
    this.setState({ name: e.target.value })
  }

  onChangeProductSKU(e) {
    this.setState({ SKU: e.target.value })
  }

  onChangeProductID(e) {
    this.setState({ ID: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const productObject = {
      name: this.state.name,
      SKU: this.state.SKU,
      ID: this.state.ID
    };
    axios.post('http://localhost:4000/students/create-student', productObject)
      .then(res => console.log(res.data));

    this.setState({ name: '', SKU: '', ID: '' })
  }

  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={this.state.name} onChange={this.onChangeProductName} />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>SKU</Form.Label>
          <Form.Control type="text" value={this.state.SKU} onChange={this.onChangeProductSKU} />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>ID</Form.Label>
          <Form.Control type="text" value={this.state.ID} onChange={this.onChangeProductID} />
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit" className="mt-4">
          ADD Product
        </Button>
      </Form>
    </div>);
  }
}