import React from 'react';
import {HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {

  return (
   
      <Router>
        
      <Header />
      <div id='page-container'>
        <div id='content-wrap'>
        <Routes>
            <Route 
              path='/'
              element={<Home />}
              />
            <Route 
              path='/About'
              element={<About />}
              />
            <Route
              path='/Portfolio'
              element={<Portfolio />}
              />
            <Route
              path='/Resume'
              element={<Resume />}
              />
            <Route  
              path='/Contact' 
              element={<Contact />}
              />
          </Routes>
        </div>
        </div>  
         <Footer />
        
    </Router>
  

  );
}

export default App;
