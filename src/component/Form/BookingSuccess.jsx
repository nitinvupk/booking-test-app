import React, { useEffect } from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'

export default function BookingSuccess() {
  useEffect(() => {
    localStorage.clear()
  }, [])

  return (
    <Jumbotron>
      <h1>Booking</h1>
      <h1>Placed!</h1>
    </Jumbotron>
  )
}
