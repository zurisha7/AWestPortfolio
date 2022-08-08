import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import ProjectList from './components/ProjectList';
import Resume from './components/Resume';
import ContactForm from './components/Contact';
import Footer from './components/Footer';


function App() {

  const [aboutSelected, setAboutSelected] = useState(false);
  const [portfolioSelected, setPortfolioSelected]= useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);
  const [contactSelected, setContactSelected] = useState(false);
  return (
    <div>
      <Header
      // add these states to the header....all will be used at the end
        aboutSelected={aboutSelected}
        setAboutSelected={setAboutSelected}
        portfolioSelected={portfolioSelected}
        setPortfolioSelected={setPortfolioSelected}
        resumeSelected={resumeSelected}
        setResumeSelected={setResumeSelected}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      > </Header>
      
      <main>
{/* if contact is not selected show these component...need to update to only show one component at a time */}
        {!contactSelected ? (
          <>
          <About></About>
          <ProjectList></ProjectList>
          <Resume></Resume>
          
          </>
        ) : (
          <ContactForm></ContactForm>
        )}

      </main>
      {/* add footer component */}
      <Footer></Footer>
    </div>
  );
}

export default App;
