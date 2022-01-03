import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import { apiRequest } from '../services/apiRequest';
import Header from '../components/Header';

function Characters() {
  const [comics, setComics] = useState([]);
  useEffect(() => {
    apiRequest('comics').then((response) => setComics(response.data.data.results));
  }, []);
  return (
    <>
      <Header />
      <main>
        {comics.length > 0 ? (
          <Container>
            {comics.map((comic) => (
              <Card key={comic.id} style={{ width: '20rem' }}>
                <Card.Img variant="top" src={`${comic.thumbnail.path}/portrait_uncanny.${comic.thumbnail.extension}`} />
                <Card.Body>
                  <Card.Title>{comic.title}</Card.Title>
                  <Card.Text>
                    {!comic.description ? 'Descrição indisponível!' : comic.description}
                  </Card.Text>
                  {comic.urls.map((url) => <Card.Link target="_blank" href={url.url}>{url.type}</Card.Link>)}
                </Card.Body>
              </Card>
            ))}
          </Container>
        )
          : <h1>Carregando...</h1>}
      </main>
      <footer>Rodapé</footer>
    </>
  );
}

export default Characters;
