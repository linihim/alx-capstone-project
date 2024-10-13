import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Recipe from './pages/Recipe'

function App() {
  return (
    <Router>
       <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Recipe/:id" element={<Recipe />} />
        </Routes>
      </div>

    </Router>
  );
}

export default App;