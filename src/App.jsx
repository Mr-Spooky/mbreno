import { makeStyles } from '@mui/styles';
import React from 'react';
import {
  BrowserRouter as Router, Routes, Route, Navigate,
} from 'react-router-dom';
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
            <Route path="/realizations/*" element={<Navigate replace to="/realizations" />} />
            <Route path="/services" element={<Services />} exact />
            <Route path="/services/*" element={<Navigate replace to="/services" />} />
            <Route path="/contact" element={<Contact />} exact />
            <Route path="/contact/*" element={<Navigate replace to="/contact" />} />
            <Route path="/home" element={<Home />} />
            <Route path="*" element={<Navigate replace to="/home" />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
