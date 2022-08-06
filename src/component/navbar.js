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
            </Container>
        </Navbar>
    )
}