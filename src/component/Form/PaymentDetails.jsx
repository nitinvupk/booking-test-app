import React from 'react'
import Form from 'react-bootstrap/Form'

export default function PaymentDetails() {
  return (
    <>
      <h5>Payment Information:</h5>
      <Form.Group controlId="cardDetails">
        <Form.Label>Card Details</Form.Label>
        <Form.Control type="text" placeholder="Enter your card number" />
      </Form.Group>
      <hr />
    </>
  )
}
