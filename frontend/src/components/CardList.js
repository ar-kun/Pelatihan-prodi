import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import CardItem from './CardItem';
import axios from 'axios';

function CardList() {
 const [products, setProducts] = useState([]);

 useEffect(() => {
  axios.get('https://eshop.reskimulud.my.id/products').then((res) => setProducts(res.data.data.products));
 }, []);
 return (
  <Row xs={1} xl={4} sm={2} lg={3} md={3}>
   {products.map((pro) => (
    <Col className="mt-3" key={pro.id}>
     <CardItem item={pro} />
    </Col>
   ))}
  </Row>
 );
}
export default CardList;
