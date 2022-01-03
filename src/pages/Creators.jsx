import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Footer from '../components/Footer';
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
        <h1>Criadores</h1>
        <Row
          xs={1}
          md={2}
          className="g-4 h-100"
          style={{ margin: 'auto 0' }}
        >
          {creators.length > 0 ? (
            creators.map((creator) => (
              <Card
                className="border-dark"
                key={creator.id}
                style={{
                  maxWidth: '250px',
                  margin: '10px',
                }}
              >
                <Card.Header>
                  <a
                    href={creator.urls[0].url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {creator.fullName}

                  </a>
                </Card.Header>
              </Card>
            ))
          ) : <h1>Carregando...</h1>}
        </Row>
      </main>
      <Footer />
    </>
  );
}

export default Characters;
