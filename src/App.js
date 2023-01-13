import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {

  return (
   
   <section>
    
            <Header />
      <div id='page-container'>
        <div id='content-wrap'>
        <Routes>
            <Route 
              exact
              path='/awestportfolio'
              element={<Home />}
              />
            <Route 
              exact
              path='/About'
              element={<About />}
              />
            <Route
              exact
              path='/Portfolio'
              element={<Portfolio />}
              />
            <Route
              exact
              path='/Resume'
              element={<Resume />}
              />
            <Route
              exact  
              path='/Contact' 
              element={<Contact />}
              />
          </Routes>
        </div>
        </div>  
         <Footer />
        
 </section>
  

  );
}

export default App;
