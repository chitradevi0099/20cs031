

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AllTrainsPage from './pages/AllTrainsPage';
import SingleTrainPage from './pages/SingleTrainPage';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<AllTrainsPage />} />
          <Route path="/trains/:trainNumber" element={<SingleTrainPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
