import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import apiRequest from '../services/apiRequest';

function Characters() {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    apiRequest('characters').then((response) => setCharacters(response.data.data.results));
  }, []);
  return (
    characters.map((character) => (
      <Card key={character.name} style={{ width: '20rem' }}>
        <Card.Img variant="top" src={`${character.thumbnail.path}/standard_medium.${character.thumbnail.extension}`} />
        <Card.Body>
          <Card.Title>{character.name}</Card.Title>
          <Card.Text>
            {character.description.length === 0 ? 'Descrição indisponível!' : character.description}
          </Card.Text>
          <div className="button-container">
            <Button variant="primary">Revistas</Button>
            <Button variant="primary">Eventos</Button>
            <Button variant="primary">Séries</Button>
            <Button variant="primary">Histórias</Button>
          </div>
          {character.urls.map((url) => <Card.Link target="_blank" href={url.url}>{url.type}</Card.Link>)}
        </Card.Body>
      </Card>
    ))
  );
}

export default Characters;
