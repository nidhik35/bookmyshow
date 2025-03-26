import { Container, Nav, Navbar, Form, Button } from 'react-bootstrap';

   function Navigation() {
     return (
       <Navbar bg="dark" variant="dark" expand="lg">
         <Container>
           <Navbar.Brand href="#home">BookMyShow</Navbar.Brand>
           <Navbar.Toggle aria-controls="basic-navbar-nav" />
           <Navbar.Collapse id="basic-navbar-nav">
             <Nav className="me-auto">
               <Nav.Link href="#movies">Movies</Nav.Link>
               <Nav.Link href="#events">Events</Nav.Link>
               <Nav.Link href="#sports">Sports</Nav.Link>
             </Nav>
             <Form className="d-flex">
               <Form.Control type="search" placeholder="Search movies..." />
               <Button variant="outline-light">Search</Button>
             </Form>
             <Nav.Link href="#login" className="ms-3">Sign In</Nav.Link>
           </Navbar.Collapse>
         </Container>
       </Navbar>
     );
   }
   export default Navigation