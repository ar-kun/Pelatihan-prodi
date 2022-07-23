import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { MdHighlightOff } from 'react-icons/md';

function CartItem({ item }) {
 return (
  <Container>
   <Card className="m-3 p-3">
    <Row>
     <Col className="col-1">
      <Card.Img src={`https://eshop.reskimulud.my.id/products/image/${item.image}`} />
     </Col>
     <Col className="col-10">
      <Card.Title>{item.title}</Card.Title>
      <Card.Subtitle>{item.price}</Card.Subtitle>
      <Card.Text>Qty : {item.quantity}</Card.Text>
     </Col>
     <Col className="col-1 d-flex justify-content-between align-items-center">
      <Button>
       <MdHighlightOff />
      </Button>
     </Col>
    </Row>
   </Card>
  </Container>
 );
}
export default CartItem;
