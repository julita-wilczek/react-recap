import {Container, Form, Button} from 'react-bootstrap'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

const Registration = ({setData}) => {

    const [validated, setValidated] = useState(false);
    const [buttonState, setButtonState] = useState(true)
    const navigate = useNavigate()

    const formReady = (event) => {
        const name = document.getElementById("formName").value
        const surname = document.getElementById("formSurname").value
        const password = document.getElementById("formBasicPassword").value
        const passwordRepeat = document.getElementById("formPasswordConfirm").value
        const email = document.getElementById("formBasicEmail").value
        console.log()
        const correctEmail = (validateEmail(email))
        const correctPassword = password.length >=8 && validatePassword(password)
        console.log("This is password " + password)
        console.log("This is repeated-password " +passwordRepeat)

        if ((name.length >=2) && (surname.length >=3) && (password !== "") && correctPassword && (password === passwordRepeat) && correctEmail) {
            console.log("it's validated!")
            setValidated(true)
            setButtonState(false)
            setData({name: name, surname: surname, email: email, password: password,  })
        }
        else {
            setValidated(false)
            setButtonState(true)
        }

        if (name.length >=2) {

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
    alert("All done!")
    setTimeout(navigate('/submitted'), 3000)
}


    return (
<Container>
<Form noValidate validated={validated} onSubmit={(event) => handleSubmit(event)}>
<Form.Group className="mb-3" controlId="formName">
    <Form.Label>Name</Form.Label>
    <Form.Control required type="text" placeholder="Name" onChange={formReady}/>
    <Form.Text className="text-muted">
      Required, at least 2 chars
    </Form.Text>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formSurname">
    <Form.Label>Surname</Form.Label>
    <Form.Control required type="text" placeholder="Surname" onChange={formReady} />
    <Form.Text className="text-muted">
    Required, at least 3 chars
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
    <Form.Control required type="password" placeholder="Password" onChange={formReady} />
    <Form.Text className="text-muted">
    Should contain at least 8 chars, 1 digit, 1 letter
    </Form.Text>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formPasswordConfirm">
    <Form.Label>Password</Form.Label>
    <Form.Control required type="password" placeholder="Confirm Password" onChange={formReady}/>
    <Form.Text className="text-muted">
    Needs to be the same as Password
    </Form.Text>
  </Form.Group>
  <Button variant="primary" type="submit" disabled={buttonState}>
    Submit
  </Button>
</Form>
</Container>
    )
}

export default Registration
