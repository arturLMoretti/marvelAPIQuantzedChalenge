import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Row } from 'react-bootstrap';
import { apiRequest } from '../services/apiRequest';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Characters() {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    apiRequest('characters').then((response) => setCharacters(response.data.data.results));
  }, []);
  return (
    <>
      <Header />
      <main>
        <h1>Personagens</h1>
        <Row
          xs={1}
          md={2}
          className="g-4 h-100"
          style={{ margin: 'auto 0' }}
        >
          {characters.length > 0 ? (
            characters.map((character) => (
              <Card
                className="border-dark d-flex align-items-stretch justify-content-between"
                key={character.name}
                style={{
                  maxWidth: '250px',
                  margin: '10px',
                }}
              >
                <Card.Img
                  variant="top"
                  src={`${character.thumbnail.path}/standard_fantastic.${character.thumbnail.extension}`}
                />
                <Card.Body
                  className="d-flex flex-column align-items-stretch justify-content-between"
                >
                  <Card.Title>
                    <a
                      href={character.urls[0].url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {character.name}
                    </a>
                  </Card.Title>
                  <Card.Text
                    style={{ textAlign: 'justify' }}
                  >
                    {character.description.length === 0 ? 'Descrição indisponível!' : character.description}
                  </Card.Text>
                  <Card.Footer
                    className="border-dark"
                    style={{ fontSize: '14px' }}
                  >
                    {character.urls.map((url, idx) => (
                      idx > 0 && (
                        <Card.Link
                          target="_blank"
                          href={url.url}
                        >
                          {url.type}
                        </Card.Link>
                      )
                    ))}
                  </Card.Footer>
                </Card.Body>
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
