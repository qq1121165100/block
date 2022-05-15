import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './app.css';
import Home from './pages/home';
import About from './pages/about';
import Block from './pages/block';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/block" element={<Block />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

const WrappedApp = App;

export default () => {
  // While the blocklet is deploy to a sub path, this will be work properly.
  const basename = window?.blocklet?.prefix || '/';

  return (
    <Router basename={basename}>
      <WrappedApp />
    </Router>
  );
};
