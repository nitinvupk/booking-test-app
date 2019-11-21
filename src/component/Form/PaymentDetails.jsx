import React from 'react'
import Form from 'react-bootstrap/Form'

export default function PaymentDetails({ handleChange, formData, error }) {
  return (
    <div className="mt-5">
      <h5>Payment Information:</h5>
      <Form.Group controlId="cardDetails">
        <Form.Label>Card Details</Form.Label>
        <Form.Control
          onChange={handleChange}
          name="cardDetail"
          size="sm"
          type="text"
          placeholder="Enter your card number"
          value={formData.cardDetail}
        />
        {error.map((err, index) => (
          <span key={index} className="error">
            *{err.error}
          </span>
        ))}
      </Form.Group>
    </div>
  )
}
