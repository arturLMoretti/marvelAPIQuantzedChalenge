import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Footer from '../components/Footer';
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
        <h1>Eventos</h1>
        <Row
          xs={1}
          md={2}
          className="g-4 h-100"
          style={{ margin: 'auto 0' }}
        >
          {events.length > 0 ? (
            events.map((event) => (
              <Card
                key={event.id}
                style={{
                  maxWidth: '250px',
                  margin: '10px',
                }}
                className="border-dark d-flex align-items-stretch justify-content-between"
              >
                <Card.Img
                  variant="top"
                  src={`${event.thumbnail.path}/standard_fantastic.${event.thumbnail.extension}`}
                />
                <Card.Body
                  className="d-flex flex-column align-items-stretch justify-content-between"
                >
                  <Card.Title>
                    <a
                      href={event.urls[0].url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {event.title}
                    </a>
                  </Card.Title>
                  <Card.Text>
                    {event.description.length === 0 ? 'Descrição indisponível!' : event.description}
                  </Card.Text>
                  <Card.Footer
                    className="border-dark"
                  >
                    {event.urls.map((url, idx) => (
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

export default Events;
