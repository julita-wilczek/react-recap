import { Container, ListGroup, Row, Col } from "react-bootstrap"
const Submitted = ({data}) => {
    return (
    <Container className="my-5">
        <Row className="justify-content-center">
        <Col sm={12} md={6}>
    <ListGroup>
  <h4>Here are your registration details:</h4>
  <ListGroup.Item><b>Name:</b> {data.name}</ListGroup.Item>
  <ListGroup.Item><b>Surname:</b> {data.surname}</ListGroup.Item>
  <ListGroup.Item><b>Email:</b> {data.email}</ListGroup.Item>
  <ListGroup.Item><b>Password:</b> {data.password}</ListGroup.Item>
</ListGroup>
</Col>
</Row>

</Container>



    
    )

}

export default Submitted