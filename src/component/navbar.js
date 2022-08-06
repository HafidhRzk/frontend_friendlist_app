import { Nav, Navbar, Container } from 'react-bootstrap';

export default function Navibar() {
    return(
        <Navbar bg="secondary" variant="dark">
            <Container>
                <Nav className="me-auto">
                    <Nav.Link href="/">Friend List</Nav.Link>
                    <Nav.Link href="/inputlist">Input List</Nav.Link>
                    <Nav.Link href="/chart">Chart</Nav.Link>
                </Nav>
                <Nav className="ms-auto">
                    <Nav.Link as={Link} to="/" className="text-navbar">Friend List</Nav.Link>
                    <Nav.Link as={Link} to="/inputlist" className="text-navbar">Input List</Nav.Link>
                    <Nav.Link as={Link} to="/chart" className="text-navbar">Chart</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}