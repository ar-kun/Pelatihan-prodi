import { React, useEffect, useState } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Profile({ isLogedIn, setIslogIn }) {
 const [name, setName] = useState('');
 const [email, setEmail] = useState('');

 const navigate = useNavigate();
 const token = localStorage.getItem('eshop_jtw');

 useEffect(() => {
  axios
   .get(`https://eshop.reskimulud.my.id/user`, {
    headers: {
     Authorization: `Bearer ${token}`,
    },
   })
   .then((res) => {
    const { name, email } = res.data.data.user;
    setName(name);
    setEmail(email);
   })
   .catch((err) => alert(err.response.data.message));
 }, [token]);

 if (!isLogedIn) {
  return <Navigate to="/auth/login" replace />;
 }

 const onLogout = () => {
  localStorage.clear();
  setIslogIn(false);
  navigate('/');
 };
 return (
  <>
   <Container>
    <h1>Profile</h1>
    <Card className="m-3 p-3">
     <Card.Title>Name : {name}</Card.Title>
     <Card.Subtitle>Email : {email}</Card.Subtitle>
     <Button onClick={onLogout} className="mt-2" variant="outline-danger">
      Logout
     </Button>
    </Card>
   </Container>
  </>
 );
}

export default Profile;

//  <Container>
//   <Card className="m-3 p-3">
//    <Card.Title>Name : {name}</Card.Title>
//    <Card.Subtitle>email : {email}</Card.Subtitle>
//    <Button onClick={onLogout} variant="danger">
//     Logout
//    </Button>
//   </Card>
//  </Container>;
