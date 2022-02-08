import React, { useState } from 'react';
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import PrimaryButton from '../generic/Buttons';

const useStyles = makeStyles({
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'fixed',
    bottom: '0',
    backgroundColor: 'black',
    padding: '10px',
    zIndex: 1000,
  },
  button: {
    height: '40px',
    marginRight: '20px !important',
  },
});

function Cookies() {
  const classes = useStyles();
  const [open, setOpen] = useState(true);

  if (!open) return null;

  return (
    <div className={classes.root}>
      <div>
        <Typography sx={{ color: 'white' }}>Ce site n&apos;utilise que des cookies obligatoires à son bon fonctionnement.</Typography>
        <Typography sx={{ color: 'white' }}>
          Vous pouvez tout de même les bloquer depuis les réglages de votre navigateur, mais cela pourrait causer
          des effets potentiellements négatifs pour le bon fonctionnement du site.
        </Typography>
      </div>
      <PrimaryButton className={classes.button} variant="filled" onClick={() => setOpen(false)}>OK</PrimaryButton>
    </div>
  );
}

export default Cookies;
