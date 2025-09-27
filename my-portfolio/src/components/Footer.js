import { Container, Nav, Navbar } from 'react-bootstrap';

function Footer({name}) {
  return (
    <footer className='bg-primary text-white' style={{ paddingBottom: "10px" }}>
        <Navbar data-bs-theme="dark">
          <Container fluid className='justify-content-center'>
            <Nav>
              <Nav.Item>
                <Nav.Link href='https://github.com/zzz276'>
                  Github
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href='https://www.linkedin.com/in/zeni-zuanda-09558a386/'>
                  LinkedIn
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Container>
        </Navbar>
        { name }
    </footer>
  );
}

export default Footer;
