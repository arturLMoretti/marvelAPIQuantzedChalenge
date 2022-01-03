import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Footer from '../components/Footer';
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
        <h1>Séries</h1>
        <Row
          xs={1}
          md={2}
          className="g-4 h-100"
          style={{ margin: 'auto 0' }}
        >
          {series.length > 0 ? (
            series.map((event) => (
              <Card
                className="border-dark"
                key={event.id}
                style={{
                  maxWidth: '250px',
                  margin: '10px',
                }}
              >
                <Card.Img
                  variant="top"
                  src={`${event.thumbnail.path}/standard_fantastic.${event.thumbnail.extension}`}
                />
                <Card.Body>
                  <Card.Title>
                    <a
                      href={event.urls[0].url}
                    >
                      {event.title}
                    </a>
                  </Card.Title>
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

export default Series;
