import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Header from '../components/Header';
import { apiRequest } from '../services/apiRequest';

function Series() {
  const [series, setSeries] = useState([]);
  useEffect(() => {
    apiRequest('series').then((response) => setSeries(response.data.data.results));
  }, []);
  return (
    <>
      <Header />
      <main>
        <Container>
          {series.map((event) => (
            <Card
              key={event.id}
              style={{ width: '20rem' }}
            >
              <Card.Img
                variant="top"
                src={`${event.thumbnail.path}/standard_medium.${event.thumbnail.extension}`}
              />
              <Card.Body>
                <Card.Title>{event.title}</Card.Title>
                {event.urls.map((url) => (
                  <Card.Link
                    target="_blank"
                    href={url.url}
                  >
                    {url.type}
                  </Card.Link>
                ))}
              </Card.Body>
            </Card>
          ))}
        </Container>
      </main>
      <footer>Rodapé</footer>
    </>
  );
}

export default Series;
