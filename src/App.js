import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent';
import HomePage from './pages/HomePage';
import StudentsPage from './pages/StudentsPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <HeaderComponent />
        <main className="App-main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/students" element={<StudentsPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
