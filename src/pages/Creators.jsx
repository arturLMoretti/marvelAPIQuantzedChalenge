import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Header from '../components/Header';
import { apiRequest } from '../services/apiRequest';

function Characters() {
  const [creators, setCreators] = useState([]);
  useEffect(() => {
    apiRequest('creators').then((response) => setCreators(response.data.data.results));
  }, []);
  return (
    <>
      <Header />
      <main>
        <Container>
          {creators.map((creator) => (
            <Card key={creator.id} style={{ width: '20rem' }}>
              <Card.Header>{creator.fullName}</Card.Header>
              {creator.urls.map((url) => <Card.Link target="_blank" href={url.url}>{url.type}</Card.Link>)}
            </Card>
          ))}
        </Container>
      </main>
      <footer>Rodapé</footer>
    </>
  );
}

export default Characters;
