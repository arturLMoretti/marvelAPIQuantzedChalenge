import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Characters from './pages/Characters';
import Home from './pages/Home';
import Comics from './pages/Comics';
import Creators from './pages/Creators';
import Events from './pages/Events';
import Series from './pages/Series';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={<Home />}
        />
        <Route
          path="/characters"
          element={<Characters />}
        />
        <Route
          path="/comics"
          element={<Comics />}
        />
        <Route
          path="/creators"
          element={<Creators />}
        />
        <Route
          path="/events"
          element={<Events />}
        />
        <Route
          path="/series"
          element={<Series />}
        />
      </Routes>
    </Router>
  );
}
