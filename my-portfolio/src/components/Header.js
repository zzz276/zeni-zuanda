import { Container, Navbar } from 'react-bootstrap';
import monogram from '../assets/zen-monogram.svg';

function Header() {
  return (
    <header className='cs-header text-white'>
      <Navbar data-bs-theme='dark' sticky='top' variant='dark'>
        <Container className='justify-content-between align-items-center'>
          <Navbar.Brand className='cs-brand d-flex align-items-center gap-2'>
            <img src={monogram} alt='Zeni Zuanda monogram' className='cs-logo' />
            <span>{'<ZeniZuanda />'}</span>
          </Navbar.Brand>
          <Navbar.Text className='cs-tagline'>
            Computer Science · Mobile Tech · Creative Coding
          </Navbar.Text>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
