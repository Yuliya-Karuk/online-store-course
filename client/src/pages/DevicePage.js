import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import bigStar from '../assets/big_star.png';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const DevicePage = () => {
  const device = {id: 1, name: 'Iphone 12 pro', price: 100000, rating: 5, img: 'https://ir.ozone.ru/s3/multimedia-c/wc1000/6765094956.jpg'};
  const description = [
    {id: 1, title: 'Random access memory', description: '5 G'},
    {id: 2, title: 'Camera', description: '12 Mn'},
    {id: 3, title: 'Processor', description: 'Exynos'},
    {id: 4, title: 'Number of Cores', description: '2'},
    {id: 5, title: 'Battery', description: '4000'},
  ]
  return (
    <Container className='mt-3'>
      <Row>
        <Col md={4}>
          <Image width={300} height={300} src={device.img} style={{objectFit: 'contain'}} />
        </Col>
        <Col md={4}>
          <Row className='d-flex flex-column align-items-center'>
            <h2 style={{textAlign: 'center'}}>{device.name}</h2>
            <div
              className='d-flex align-items-center justify-content-center'
              style={{background: `url(${bigStar}) no-repeat center center`, width: 240, height: 240, backgroundSize: 'cover', fontSize: 64}}
            >
              {device.rating}
            </div>
          </Row>
        </Col>
        <Col md={4}>
          <Card
            className='d-flex flex-column align-items-center justify-content-around'
            style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}
          >
            <h3>From {device.price} RUB</h3>
            <Button variant={'outline-dark'}>Add to card</Button>
          </Card>
        </Col>
      </Row>
      <Row className='d-flex flex-column m-3'>
        <h1>Specifications</h1>
        {description.map((info, index) =>
          <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
            {info.title}:{info.description}
          </Row>
        )}
      </Row>
    </Container>
  );
};

export default DevicePage;