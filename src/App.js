import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Layout from './components/Layout';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {

 
  return (
   
   <>    
            <Header/>
      <div id='page-container'>
        <div id='content-wrap'>
        <Routes>
            <Route 
              path='/'
              element={<Layout />}
              />
              <Route index element={<Home />}/>
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
            <Route path="*" element={<Home/>} />
          </Routes>
          
        </div>
        </div> 
       
         <Footer />
         </> 
 
  

  );
}

export default App;
