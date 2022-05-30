import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

const NavigationBar = ({css, logo, logoCss}) => {

  return (

    <Navbar bg="light" expand="lg" className={`${css}`}>
      <Container>
        <Navbar.Brand href="/">
          <img className={`${logoCss}`} src={require(`../assets/${logo}`)} />
          Home
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )

}


export default NavigationBar