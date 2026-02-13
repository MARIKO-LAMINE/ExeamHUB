
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Explore } from './pages/Explore';
import { SubjectDetail } from './pages/SubjectDetail';
import { Preview } from './pages/Preview';
import { About } from './pages/About';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/subject/:id" element={<SubjectDetail />} />
      <Route path="/preview/:id" element={<Preview />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default App;
