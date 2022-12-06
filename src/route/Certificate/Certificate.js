import Menu from '../../component/Navbar/Menu';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import data from '../../data/certificate.json';

function Certificate() {  

    return (
        <>
            <Menu/>
            <Container>
            <Row>
                <Col className='col-12'>
                    <h1>
                        Сертификаты
                    </h1>
                </Col>
            </Row>
            <Row>
                {
                    data.map(e => (
                        <Card className='col-lg-5 col-12 mb-5 ms-3 me-3'>
                        <Card.Img variant="top" src={e.src} width="100" />
                        <Card.Body>
                            <Card.Title>{e.title}</Card.Title>
                            <Card.Text>
                            {e.description}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    ))
                }
            </Row>
        </Container>
        </>
    );
  }
  
export default Certificate;
  