import { Component } from 'react'
import { Navbar, Nav, Container, Form, Button, FormControl} from 'react-bootstrap'
import MyBadge from "./MyBadge"


class MyNavbar extends Component {
state = {
  searchQuery: ""
}

render() {
  return (
  <Navbar collapseOnSelect expand='md' bg='light' variant='light'>
    <Container fluid>
    <Navbar.Brand href='#' title="Home">Black Books <MyBadge content="New Stock!" color="black"/></Navbar.Brand>
    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
    <Navbar.Collapse id='responsive-navbar-nav'>
      <Nav className='me-auto'>
        <Nav.Link href='#'>About</Nav.Link>
        <Nav.Link href='#Latest'>Browse</Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          onChange={(e) => this.props.handleSearch(e.target.value)}
        />
      </Form>
    </Navbar.Collapse>
    </Container>
  </Navbar>
 
)
}
}

export default MyNavbar
