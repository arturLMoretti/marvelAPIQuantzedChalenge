import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import { apiRequest } from '../services/apiRequest';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Characters() {
  const [comics, setComics] = useState([]);
  useEffect(() => {
    apiRequest('comics').then((response) => setComics(response.data.data.results));
  }, []);
  return (
    <>
      <Header />
      <main>
        <h1>Quadrinhos</h1>
        {comics.length > 0 ? (
          <Row
            xs={1}
            md={2}
            className="g-4 h-100"
            style={{ margin: 'auto 0' }}
          >
            {comics.map((comic) => (
              <Card
                className="border-dark"
                key={comic.id}
                style={{
                  maxWidth: '250px',
                  margin: '10px',
                }}
              >
                <Card.Img variant="top" src={`${comic.thumbnail.path}/portrait_uncanny.${comic.thumbnail.extension}`} />
                <Card.Body>
                  <Card.Title>
                    <a
                      href={comic.urls[0].url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {comic.title}
                    </a>
                  </Card.Title>
                  <Card.Text>
                    {(!comic.description || (comic.description === '#N/A')) ? 'Descrição indisponível!' : comic.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            ))}
          </Row>
        )
          : <h1>Carregando...</h1>}
      </main>
      <Footer />
    </>
  );
}

export default Characters;
