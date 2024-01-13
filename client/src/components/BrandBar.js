import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '..';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

const BrandBar = observer(() => {
  const {device} = useContext(Context);

  return (
    // <Row className='d-flex'>
    //   {device.brands.map(brand =>
    //     <Col className='p-0' xs lg="2">
    //       <Card
    //         key={brand.id}
    //         style={{cursor: 'pointer'}}
    //         border={brand.id === device.selectedBrand.id ? 'danger' : '--bs-border-color'}
    //         onClick={() => device.setSelectedBrand(brand)}
    //         className='p-2'
    //       >
    //         {brand.name}
    //       </Card>
    //     </Col>
    //   )}
    // </Row>
    <Col className='d-flex gap-2'>
      {device.brands.map(brand =>
          <Card
            key={brand.id}
            style={{cursor: 'pointer'}}
            border={brand.id === device.selectedBrand.id ? 'danger' : '--bs-border-color'}
            onClick={() => device.setSelectedBrand(brand)}
            className='p-2 px-3'
          >
            {brand.name}
          </Card>
      )}
    </Col>
  );
});

export default BrandBar;