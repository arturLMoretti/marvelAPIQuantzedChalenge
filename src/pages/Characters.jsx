import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Row } from 'react-bootstrap';
import { apiRequest } from '../services/apiRequest';
import Header from '../components/Header';

function Characters() {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    apiRequest('characters').then((response) => setCharacters(response.data.data.results));
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
          {characters.map((character) => (
            <Card
              className="d-flex align-items-stretch"
              key={character.name}
              style={{
                maxWidth: '250px',
                margin: '10px',
                display: 'flex',
              }}
            >
              <Card.Img
                variant="top"
                src={`${character.thumbnail.path}/standard_fantastic.${character.thumbnail.extension}`}
              />
              <Card.Body
                className="d-flex flex-column align-items-stretch"
              >
                <Card.Title>{character.name}</Card.Title>
                <Card.Text
                  style={{ textAlign: 'justify' }}
                >
                  {character.description.length === 0 ? 'Descrição indisponível!' : character.description}
                </Card.Text>
                <Card.Footer>
                  {character.urls.map((url) => (
                    <Card.Link
                      target="_blank"
                      href={url.url}
                    >
                      {url.type}
                    </Card.Link>
                  ))}
                </Card.Footer>
              </Card.Body>
            </Card>
          ))}
        </Row>
      </main>
      <footer>Rodapé</footer>
    </>
  );
}

export default Characters;
