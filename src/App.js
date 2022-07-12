import logo from './logo.svg'
import './css/app.min.css'
import "./css/bootstrap.min.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import HomePage from './js/pages/HomePage';
import Navbar from './js/common/Navbar';
import React from 'react';
import BookDetails from './js/pages/BookDetails';
import CharacterDetails from './js/pages/CharacterDetails';

function App() {
  return (
      <BrowserRouter>
        <React.Fragment>
                <Navbar/>
                <div className="container mt-4">
                    <Routes>
                        <Route path="/characters/:id" element={<CharacterDetails />} />
                        <Route path="/books/:id" element={<BookDetails />} />
                        <Route path="/" exact  element={<HomePage />} />
                    </Routes>
                </div>
            </React.Fragment>
        </BrowserRouter>
  );
}

export default App;
