import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  
  const navigate = useNavigate()

  return (
    <Container fluid className='d-flex vh-100'>
      <Row className='m-auto'>
        <Col className='text-center'>
          <Button
            variant='warning'
            size='lg'
            className='m-2'
            onClick={() => navigate('/admin-signup')}
          >
            Signup as Admin
          </Button>
          <Button
            variant='secondary'
            size='lg'
            className='m-2'
            onClick={() => navigate('/admin-login')}
          >
            Login as Admin
          </Button>
          <Button
            variant='secondary'
            size='lg'
            className='m-2'
            onClick={() => navigate('/customer-signup')}
          >
            Signup as Customer
          </Button>
        </Col>
      </Row>
    </Container>
  )
}

export default Home;
