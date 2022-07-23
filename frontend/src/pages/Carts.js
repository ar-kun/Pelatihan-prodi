import { React } from 'react';
import Container from 'react-bootstrap/esm/Container';
import CartItem from '../components/CartItem';
import image from '../assets/logo512.png';
import { Navigate } from 'react-router-dom';

const dummyProduct = [
 {
  id: 1,
  title: 'Product A',
  price: 2100,
  descripsi: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Repudiandae',
  image: image,
  quantity: 2,
 },
 {
  id: 2,
  title: 'Product B',
  price: 2200,
  descripsi: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Repudiandae',
  image: image,
  quantity: 2,
 },
 {
  id: 3,
  title: 'Product C',
  price: 2300,
  descripsi: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Repudiandae',
  image: image,
  quantity: 2,
 },
 {
  id: 4,
  title: 'Product D',
  price: 2400,
  descripsi: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Repudiandae',
  image: image,
  quantity: 2,
 },
];

function Carts({ isLogedIn }) {
 if (!isLogedIn) {
  return <Navigate to="/auth/login" replace />;
 }
 return (
  <>
   <Container>
    <h1>Carts</h1>
    {dummyProduct.map((pro) => (
     <CartItem key={pro.id} item={pro} />
    ))}
   </Container>
  </>
 );
}

export default Carts;
