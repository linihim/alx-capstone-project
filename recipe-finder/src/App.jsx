import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Recipe from './pages/Recipe'

function App() {
  return (
    <Router>
       <div className="min-h-screen bg-gray-100 bg-cover bg-center bg-fixed" style={{backgroundImage: "url('https://assets.epicurious.com/photos/62d6c513077a952f4a8c338c/4:3/w_3668,h_2751,c_limit/PannaCotta_RECIPE_04142022_9822_final.jpg')"}}>
        <div className="min-h-screen bg-white bg-opacity-90">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipe/:id" element={<Recipe />} />
        </Routes>
        </div>
      </div>

    </Router>
  );
}

export default App;