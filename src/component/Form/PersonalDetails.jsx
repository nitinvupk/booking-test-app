import React from 'react'
import Form from 'react-bootstrap/Form'

export default function PersonalDetails() {
  return (
    <>
      <h5>Personal Details:</h5>
      <Form.Group controlId="Name">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" />
      </Form.Group>
      <Form.Group controlId="Email">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter your email" />
      </Form.Group>
      <hr />
    </>
  )
}
