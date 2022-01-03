import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Header from '../components/Header';
import { apiRequest } from '../services/apiRequest';

function Events() {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    apiRequest('events').then((response) => setEvents(response.data.data.results));
  }, []);
  return (
    <>
      <Header />
      <main>
        <Container>
          {events.length > 0 ? (
            events.map((event) => (
              <Card
                key={event.id}
                style={{ width: '20rem' }}
              >
                <Card.Img
                  variant="top"
                  src={`${event.thumbnail.path}/standard_fantastic.${event.thumbnail.extension}`}
                />
                <Card.Body>
                  <Card.Title>{event.title}</Card.Title>
                  <Card.Text>
                    {event.description.length === 0 ? 'Descrição indisponível!' : event.description}
                  </Card.Text>
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
            ))
          ) : <h1>Carregando...</h1>}
        </Container>
      </main>
      <footer>Rodapé</footer>
    </>
  );
}

export default Events;
