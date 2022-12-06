import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom";


function Menu() {
  return (
    <Navbar>
      <Container className='mt-4 mb-4'>
        <Link className="nav-link" to="/" title="Главная"><Navbar.Brand className='h1'>Главная</Navbar.Brand></Link>
        <Link className="nav-link" to="/education" title="Образование"><Navbar.Brand className='h1'>Образование</Navbar.Brand></Link>
        <Link className="nav-link" to="/experience" title="Опыт работы"><Navbar.Brand className='h1'>Опыт работы</Navbar.Brand></Link>
        <Link className="nav-link" to="/certificate" title="Электронные сертификаты"><Navbar.Brand className='h1'>Электронные сертификаты</Navbar.Brand></Link>
      </Container>
    </Navbar>
  );
}

export default Menu;