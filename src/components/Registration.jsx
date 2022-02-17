import {Container, Form, Button, Row, Col, Alert} from 'react-bootstrap'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'


const Registration = ({setData}) => {

    const [validated, setValidated] = useState(false);
    const [buttonState, setButtonState] = useState(true)
    const navigate = useNavigate()
    const [wrong, setWrong] = useState(false)

    const formReady = () => {
        const name = document.getElementById("formName").value
        const surname = document.getElementById("formSurname").value
        const password = document.getElementById("formBasicPassword").value
        const passwordRepeat = document.getElementById("formPasswordConfirm").value
        const email = document.getElementById("formBasicEmail").value
        const correctEmail = (validateEmail(email))
        const correctPassword = password.length >=8 && validatePassword(password)

        if (password !== "") {
        console.log("This is password " + password)
        console.log("This is repeated-password " +passwordRepeat)
    }

        if ((name.length >=2) && (surname.length >=3) && correctPassword && (password === passwordRepeat) && correctEmail) {
            console.log("it's validated!")
            setValidated(true)
            setButtonState(false)
            setData({name: name, surname: surname, email: email, password: password,  })
        }
        else {
            setValidated(false)
            setButtonState(true)
        }

        if (name.length <2) {
            setWrong(true)
        } else {
            setWrong(false)
        }
    }
    
    
    function validateEmail(email) 
    {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    function validatePassword(password)
    {
    const upperCaseLetters = /[a-z][A-Z]/g;
    const lowerCaseLetters = /[a-z]/g;
    const numbers = /[0-9]/g;
    return (upperCaseLetters.test(password) || lowerCaseLetters.test(password)) && numbers.test(password)
          }


const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setTimeout(navigate('/submitted'), 3000)
}


    return (
<Container className="my-5">
<Row className="justify-content-center">
<Col sm={12} md={6}>
<Form noValidate validated={validated} onSubmit={(event) => handleSubmit(event)}>
<Form.Group className="mb-3" controlId="formName">
    <Form.Label>Name</Form.Label>
    <Form.Control required type="text" placeholder="Name" onChange={formReady}/>
    <Form.Text className="text-muted">
      Required, at least 2 characters
    </Form.Text>
    {wrong && (<Alert variant="danger">
    Too short
  </Alert>)}

  </Form.Group>
  <Form.Group className="mb-3" controlId="formSurname">
    <Form.Label>Surname</Form.Label>
    <Form.Control required type="text" placeholder="Surname" onChange={formReady} />
    <Form.Text className="text-muted">
    Required, at least 3 characters
    </Form.Text>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control required type="email" placeholder="Email" onChange={formReady} />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control required type="password" placeholder="Password" onKeyUp={formReady} />
    <Form.Text className="text-muted">
    Should contain at least 8 characters including 1 digit and 1 letter
    </Form.Text>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formPasswordConfirm">
    <Form.Label>Password</Form.Label>
    <Form.Control required type="password" placeholder="Confirm Password" onKeyUp={formReady}/>
    <Form.Text className="text-muted">
    Needs to be the same as Password
    </Form.Text>
  </Form.Group>
  <Button variant="primary" type="submit" disabled={buttonState}>
    Submit
  </Button>
</Form>
</Col>
</Row>
</Container>
    )
}

export default Registration
