import {Container, Form, Button} from 'react-bootstrap'


const Registration = () => {
    return (
<Container>
<Form>
<Form.Group className="mb-3" controlId="formName">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Name" />
    <Form.Text className="text-muted">
      Required, at least 2 chars
    </Form.Text>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formSurname">
    <Form.Label>Surname</Form.Label>
    <Form.Control type="text" placeholder="Surname" />
    <Form.Text className="text-muted">
    Required, at least 3 chars
    </Form.Text>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
    <Form.Text className="text-muted">
    Should contain at least 8 chars, 1 digit, 1 letter
    </Form.Text>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formPasswordConfirm">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Confirm Password" />
    <Form.Text className="text-muted">
    Needs to be the same as Password
    </Form.Text>
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</Container>
    )
}

export default Registration
