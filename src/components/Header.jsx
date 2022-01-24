import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
import { Link as MuiLink } from '@mui/material';
import PrimaryButton, { SecondaryButton } from './Buttons';
import MobileHeader from './MobileHeader';

const useStyles = makeStyles({
  header: {
    position: 'fixed',
    display: 'flex',
    alignItems: 'center',
    top: '0',
    width: '100%',
    height: '75px',
    backgroundColor: 'black',
  },
  headerWeb: {
    justifyContent: 'space-around',
  },
  headerMobile: {
    justifyContent: 'space-between',
  },
  logo: {
    height: '60px',
    width: 'auto',
  },
  logoMobile: {
    marginLeft: '10px',
  },
  logoLink: {
    height: '60px',
  },
});

export default function Header() {
  const classes = useStyles();
  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  window.addEventListener('resize', handleResize);

  return (
    <div className={`${classes.header} ${width < 800 ? classes.headerMobile : classes.headerWeb}`}>
      <MuiLink className={classes.logoLink} component={Link} to="/home">
        <img className={`${classes.logo} ${width < 800 && classes.logoMobile}`} src="/logo.png" alt="logo" />
      </MuiLink>
      {
        width < 800 ? <MobileHeader />
          : (
            <>
              <div>
                <SecondaryButton component={Link} to="/home">Accueil</SecondaryButton>
                <SecondaryButton component={Link} to="/services">Prestations</SecondaryButton>
                <SecondaryButton component={Link} to="/realizations">Réalisations</SecondaryButton>
              </div>
              <PrimaryButton component={Link} to="/contact" variant="filled">Contactez-nous</PrimaryButton>
            </>
          )
      }
    </div>
  );
}
