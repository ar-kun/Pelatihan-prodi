import React from 'react';
import { Badge, Button, Card } from 'react-bootstrap';
import { price } from '../utils';
import { MdShoppingCart } from 'react-icons/md';

const imageStyle = {
 width: '100%',
 objectFit: 'contain',
 padding: '5',
 maxHeight: 200,
};

function CardItem({ item }) {
 return (
  <Card style={{ width: '17rem' }}>
   <Card.Img style={imageStyle} variant="top" src={`https://eshop.reskimulud.my.id/products/image/${item.image}`} />
   <Card.Body>
    <Card.Title>{item.title}</Card.Title>
    <Card.Text>{item.description}</Card.Text>
    <div className="d-flex justify-content-between align-items-center">
     <h6>
      <Badge bg="secondary">{price(item.price)}</Badge>
     </h6>
     <Button className="btn btn-primary">
      <MdShoppingCart />
     </Button>
    </div>
   </Card.Body>
  </Card>
 );
}
export default CardItem;
