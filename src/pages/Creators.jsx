import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
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
        <Row
          xs={1}
          md={2}
          className="g-4 h-100"
          style={{ margin: 'auto 0' }}
        >
          {creators.length > 0 ? (
            creators.map((creator) => (
              <Card key={creator.id} style={{ width: '20rem' }}>
                <Card.Header><a href={creator.urls[0].url}>{creator.fullName}</a></Card.Header>
              </Card>
            ))
          ) : <h1>Carregando...</h1>}
        </Row>
      </main>
      <footer>Rodapé</footer>
    </>
  );
}

export default Characters;
