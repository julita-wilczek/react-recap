
import { Navbar, Nav, Container, Form, Button, FormControl} from 'react-bootstrap'
import MyBadge from "./MyBadge"
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


const MyNavbar = (props) => {

const location = useLocation()
const navigate = useNavigate()

  return (
  <Navbar collapseOnSelect expand='md' bg='light' variant='light'>
    <Container fluid>
    <Navbar.Brand onClick={() => {
              navigate('/')
            }} className={
                location.pathname === "/" ? " active" : ""} title="Home" style={{ cursor: 'pointer' }}>Black Books <MyBadge content="New Stock!" color="black"/></Navbar.Brand>
    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
    <Navbar.Collapse id='responsive-navbar-nav'>
      <Nav className='me-auto'>
        <Nav.Link >About</Nav.Link>
        <Nav.Link>Browse</Nav.Link>
        <Nav.Link onClick={() => {
              navigate('/registration')
            }} className={
                location.pathname === "/registration" ? " active" : ""} style={{ cursor: 'pointer' }}>Registration</Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          onChange={(e) => props.handleSearch(e.target.value)}
        />
      </Form>
    </Navbar.Collapse>
    </Container>
  </Navbar>
 
)
}

export default MyNavbar
