import { makeStyles } from '@mui/styles';
import React, { useState } from 'react';
import {
  BrowserRouter as Router, Routes, Route, Navigate,
} from 'react-router-dom';
import Header from './components/skeleton/Header';
import Footer from './components/skeleton/Footer';
import Realizations from './pages/Realizations';
import Services from './pages/Services';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Cgu from './pages/Cgu';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ScrollToTop from './components/skeleton/ScrollToTop';
import Cookies from './components/skeleton/Cookies';

const useStyles = makeStyles({
  root: {
    margin: '0',
  },
  body: {
    marginTop: '75px',
    display: 'flex',
    justifyContent: 'center',
  },
});

function App() {
  const classes = useStyles();
  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  window.addEventListener('resize', handleResize);

  return (
    <Router>
      <div className={classes.root}>
        <Header width={width} />
        <ScrollToTop />
        <div className={classes.body}>
          <Routes>
            <Route path="/cgu" element={<Cgu />} exact />
            <Route path="/politique-de-confidentialite" element={<PrivacyPolicy />} exact />
            <Route path="/realisations" element={<Realizations />} exact />
            <Route path="/realisations/*" element={<Navigate replace to="/realisations" />} />
            <Route path="/prestations" element={<Services />} exact />
            <Route path="/prestations/*" element={<Navigate replace to="/prestations" />} />
            <Route path="/contact" element={<Contact width={width} />} exact />
            <Route path="/contact/*" element={<Navigate replace to="/contact" />} />
            <Route path="/accueil" element={<Home width={width} />} />
            <Route path="*" element={<Navigate replace to="/accueil" />} />
          </Routes>
        </div>
        <Footer />
        <Cookies />
      </div>
    </Router>
  );
}

export default App;
