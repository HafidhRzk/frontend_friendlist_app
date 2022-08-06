import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from "react-router-dom"

export default function Navibar() {
    return(
        <Navbar bg="secondary" variant="dark">
            <Container>
                <Nav className="ms-auto">
                    <Nav.Link as={Link} to="/" className="text-navbar">Friend List</Nav.Link>
                    <Nav.Link as={Link} to="/inputlist" className="text-navbar">Input List</Nav.Link>
                    <Nav.Link as={Link} to="/chart" className="text-navbar">Chart</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}