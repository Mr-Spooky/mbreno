import React from 'react';
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { ArrowRight } from '@mui/icons-material';

const useStyles = makeStyles({
  services: {
    margin: '10px 0 20px 0',
    padding: '0px 50px',
    textAlign: 'left',
    alignSelf: 'flex-start',
  },
  service: {
    display: 'flex',
  },
  serviceTypo: {
    fontWeight: 'bold !important',
  },
});

function SecondWork() {
  const classes = useStyles();

  return (
    <>
      <Typography sx={{ alignSelf: 'flex-start', textAlign: 'left', margin: '0 20px' }}>
        Enfin, MB réno propose des services d&apos;entretien, parmis lesquels :
      </Typography>
      <div className={classes.services}>
        <div className={classes.service}>
          <ArrowRight />
          <Typography className={classes.serviceTypo}>Nettoyer des façades</Typography>
        </div>
        <div className={classes.service}>
          <ArrowRight />
          <Typography className={classes.serviceTypo}>Entretenir / Nettoyer des toitures</Typography>
        </div>
        <div className={classes.service}>
          <ArrowRight />
          <Typography className={classes.serviceTypo}>Appliquer du produit anti-mousse</Typography>
        </div>
        <div className={classes.service}>
          <ArrowRight />
          <Typography className={classes.serviceTypo}>Remettre en état après des travaux ou sinistres</Typography>
        </div>
      </div>
      <Typography sx={{ alignSelf: 'flex-start', textAlign: 'left', margin: '0 20px 100px 20px' }}>
        Faites appel à un artisan polyvalent pour l&apos;entretien de votre habitation.
      </Typography>
    </>
  );
}

export default SecondWork;
