import React, { useState, useEffect } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import LoadingOverlay from 'react-loading-overlay'

import FormButton from './FormButton'
import PersonalDetails from './PersonalDetails'
import PaymentDetails from './PaymentDetails'
import BookingSuccess from './BookingSuccess'

export default function StepForm({ price, currency }) {
  const [quantity, setQuantity] = useState(1)
  const [formStep, setFormStep] = useState(1)
  const [isActive, setLoading] = useState(false)
  const [formData, setData] = useState({ cardDetail: '', name: '', email: '' })
  const [status, setStatus] = useState('')
  const [errors, setError] = useState([])
  const paymentStatus = ['success', 'failure']

  useEffect(() => {
    const step = parseInt(localStorage.getItem('formStep') || 1)
    const formValues = JSON.parse(
      localStorage.getItem('formData') || JSON.stringify(formData)
    )
    setFormStep(step)
    setData(formValues)
  },[])

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData))
  }, [formData])

  const onValidate = form => {
    const errors = []
    for (const formVal of Object.keys(form)) {
      switch (formVal) {
        case 'cardDetail':
          if (!form['cardDetail']) {
            errors.push({ name: formVal, error: 'Card Details are required' })
          }
          break
        case 'name':
          if (!form['name']) {
            errors.push({ name: formVal, error: 'Name is required' })
          }
          break
        case 'email':
          const regex = /\S+@\S+\.\S+/
          if (!form['email']) {
            errors.push({ name: formVal, error: 'Email is required' })
          } else if (!regex.test(form['email'])) {
            errors.push({
              name: formVal,
              error: 'Email should be in correct format'
            })
          }
          break
        default:
      }
    }
    setError(errors)
    return errors.length === 0
  }

  const handleButtonClick = event => {
    const step = formStep + 1
    if (
      event.target.innerText === 'Book' ||
      event.target.innerText === 'Retry'
    ) {
      if (onValidate(formData)) {
        setLoading(true)
        const status =
          paymentStatus[Math.floor(Math.random() * paymentStatus.length)]
        setTimeout(() => {
          setStatus(status)
          setLoading(false)
        }, 3000)
      }
    } else {
      setFormStep(step)
      localStorage.setItem('formStep', step)
    }
  }

  const setButtonName = () => {
    if (status === 'failure') {
      return 'Retry'
    } else if (formStep > 2) {
      return 'Book'
    } else {
      return 'Next'
    }
  }

  const handleChange = event => {
    setData({ ...formData, [event.target.name]: event.target.value })
  }

  return (
    <LoadingOverlay active={isActive} spinner text="Placing Booking">
      <Row>
        <Col lg={2} />
        <Col lg={8}>
          {status === 'success' ? (
            <BookingSuccess />
          ) : (
            <Form>
              <Card>
                <Card.Body>
                  <p>Booking storage at:</p>
                  <h6>Cody's Cookie Store</h6>
                  <div>
                    <span>Number of bags</span>{' '}
                    <Button
                      className="btn-xs"
                      disabled={quantity <= 1}
                      onClick={() => setQuantity(quantity - 1)}
                    >
                      -
                    </Button>{' '}
                    {quantity}{' '}
                    <Button
                      className="btn-xs"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      +
                    </Button>{' '}
                  </div>
                </Card.Body>
              </Card>
              {formStep > 1 && (
                <PersonalDetails
                  handleChange={handleChange}
                  errorName={errors.filter(k => k.name === 'name')}
                  errorEmail={errors.filter(k => k.name === 'email')}
                  formData={formData}
                />
              )}
              {formStep > 2 && (
                <PaymentDetails
                  handleChange={handleChange}
                  error={errors.filter(k => k.name === 'cardDetail')}
                  formData={formData}
                />
              )}
              <hr />
              <Row>
                <Col lg={6} className="text-left">
                  <p>{quantity} bags</p>
                  <p>
                    {(quantity * price).toFixed(2)}
                    {currency}
                  </p>
                </Col>
                <Col lg={6} className="text-right">
                  <FormButton
                    onStepChange={handleButtonClick}
                    variant={status === 'failure' ? 'danger' : 'primary'}
                    type={'button'}
                    name={setButtonName()}
                  />
                </Col>
              </Row>
            </Form>
          )}
        </Col>
        <Col lg={2} />
      </Row>
    </LoadingOverlay>
  )
}

StepForm.defaultProps = {
  price: 5.9,
  currency: '$'
}
