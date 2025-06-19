// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import JobDetails from './pages/JobDetails';
import Tracker from './pages/Tracker';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />

        <main className="flex-grow px-4 py-6">
          <div className="max-w-7xl mx-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/job/:id" element={<JobDetails />} />
              <Route path="/tracker" element={<Tracker />} />
              {/* Optional: fallback route */}
              <Route path="*" element={<p className="text-center text-red-600 text-lg">Page not found</p>} />
            </Routes>
          </div>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
