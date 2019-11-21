import React from 'react'
import Form from 'react-bootstrap/Form'

export default function PersonalDetails({
  handleChange,
  formData,
  errorName,
  errorEmail
}) {
  return (
    <div className="mt-5">
      <h5>Personal Details:</h5>
      <Form.Group controlId="Name">
        <Form.Label>Name</Form.Label>
        <Form.Control
          name="name"
          onChange={handleChange}
          size="sm"
          type="text"
          placeholder="Enter your name"
          value={formData.name}
        />
        {errorName.map((err, index) => (
          <span key={index} className="error">
            *{err.error}
          </span>
        ))}
      </Form.Group>
      <Form.Group controlId="Email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          name="email"
          onChange={handleChange}
          size="sm"
          type="email"
          placeholder="Enter your email"
          value={formData.email}
        />
        {errorEmail.map((err, index) => (
          <span key={index} className="error">
            *{err.error}
          </span>
        ))}
      </Form.Group>
      <hr />
    </div>
  )
}
