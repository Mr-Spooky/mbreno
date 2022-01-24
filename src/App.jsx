import { makeStyles } from '@mui/styles';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Realizations from './pages/Realizations';
import Services from './pages/Services';
import Home from './pages/Home';
import Contact from './pages/Contact';

const useStyles = makeStyles({
  root: {
    margin: '0',
  },
  body: {
    marginTop: '75px',
  },
});

function App() {
  const classes = useStyles();

  return (
    <Router>
      <div className={classes.root}>
        <Header />
        <div className={classes.body}>
          <Routes>
            <Route path="/realizations" element={<Realizations />} exact />
            <Route path="/services" element={<Services />} exact />
            <Route path="/contact" element={<Contact />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
