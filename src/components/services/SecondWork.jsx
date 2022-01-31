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
        MB réno accorde une importance particulière aux travaux de second œuvre et de finition, notamment :
      </Typography>
      <div className={classes.services}>
        <div className={classes.service}>
          <ArrowRight />
          <Typography className={classes.serviceTypo}>Poser du revêtement au sol</Typography>
        </div>
        <div className={classes.service}>
          <ArrowRight />
          <Typography className={classes.serviceTypo}>Poser du revêtement au mur</Typography>
        </div>
        <div className={classes.service}>
          <ArrowRight />
          <Typography className={classes.serviceTypo}>Enduit décoratif</Typography>
        </div>
        <div className={classes.service}>
          <ArrowRight />
          <Typography className={classes.serviceTypo}>Poser des pavés</Typography>
        </div>
        <div className={classes.service}>
          <ArrowRight />
          <Typography className={classes.serviceTypo}>Réaliser les finitions</Typography>
        </div>
      </div>
      <Typography sx={{ alignSelf: 'flex-start', textAlign: 'left', margin: '0 20px 100px 20px' }}>
        Faites appel à un artisan qualifié qui pourra vous conseiller et réaliser tous vos projets.
      </Typography>
    </>
  );
}

export default SecondWork;
