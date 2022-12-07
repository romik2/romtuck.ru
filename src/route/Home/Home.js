import './Home.css';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Menu from '../../component/Navbar/Menu';
import Container from 'react-bootstrap/Container';
import { Github, Telegram } from 'react-bootstrap-icons';
import works from '../../data/work.json';

function Home({data}) {

    return (
        <>
        <Menu/>
        <Container className='container_title'>
            <Row>
                <Col className='col-12 col-lg-6'>
                    <h1>
                        Привет 👋
                        Я Romtuck - Любопытный разработчик,
                        это моё портфолио
                    </h1>
                </Col>
            </Row>
        </Container>
        <Container>
            <Row>
                <Col className='col-12 col-lg-6'>
                    <a href="https://github.com/romik2" className='me-2'>
                        <Github color="black" size={35} />
                    </a>
                    <a href="tg://resolve?domain=romtuck">
                        <Telegram color="#0088cc" size={35} />
                    </a>
                </Col>
            </Row>
        </Container>
        {
            Object.keys(works).length !== 0 ? 
            <Container className='container_title'>
                <Row>
                    <Col className='col-12'>
                        <h1>
                            Работы
                        </h1>
                    </Col>
                </Row>
                <Row>
                    {
                        works.map(e => (
                            <Card className='col-lg-5 col-12 mb-5 ms-3 me-3'>
                                <Card.Img variant="top" src={e.src} />
                                <Card.Body>
                                    <Card.Title>{e.title}</Card.Title>
                                    <Card.Text>
                                        {e.description}
                                    </Card.Text>
                                    <a href={e.github} className='me-2 float-end'>
                                        <Github color="black" size={35} />
                                    </a>
                                </Card.Body>
                            </Card>
                        ))
                    }
                </Row>
            </Container> : ""
        }
    </>
  );
}

export default Home;