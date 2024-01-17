// App.js
import React from 'react';
import { Container } from 'reactstrap';
import { useLocation } from 'react-router-dom';
import Navbar from './components/navbar';
import About from './components/about';
import Work from './components/work';
import LoginForm from './components/loginform';
import Contact from './components/contact';
import AboutVersion2 from './components/aboutversion2';

const App = () => {
  const location = useLocation();

  return (
    <div>
      <Container>
        <Navbar />
        {location.pathname === '/contact' ? (
          <Contact />
        ) : location.pathname === '/aboutversion2' ? (
          <AboutVersion2 />
        ) : (
          <>
            <About />
            <Work />
            <LoginForm />
          </>
        )}
      </Container>
    </div>
  );
};

export default App;
