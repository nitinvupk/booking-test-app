import React from 'react'
import Button from 'react-bootstrap/Button'

export default function FormButton({ onStepChange, type, name, variant }) {
  return (
    <Button onClick={onStepChange} variant={variant} type={type}>
      {name}
    </Button>
  )
}
