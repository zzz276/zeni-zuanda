import { Container, Navbar } from 'react-bootstrap';

function Header() {
  return (
    <header className='bg-primary text-white'>
      <Navbar data-bs-theme="dark" sticky='top'>
        <Container>
          Portfolio
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
