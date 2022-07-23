import { React } from 'react';
import CardList from '../components/CardList';
import Container from 'react-bootstrap/esm/Container';

function Home() {
 return (
  <>
   <Container>
    <h1>Home</h1>
    <CardList />
   </Container>
  </>
 );
}

export default Home;
