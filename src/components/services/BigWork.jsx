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

function BigWork() {
  const classes = useStyles();

  return (
    <>
      <Typography sx={{ alignSelf: 'flex-start', textAlign: 'left', margin: '0 20px' }}>
        L&apos;entreprise réalise des travaux de gros œuvre, entre autres :
      </Typography>
      <div className={classes.services}>
        <div className={classes.service}>
          <ArrowRight />
          <Typography className={classes.serviceTypo}>Couler des dalles</Typography>
        </div>
        <div className={classes.service}>
          <ArrowRight />
          <Typography className={classes.serviceTypo}>Créer des murs de clôture</Typography>
        </div>
        <div className={classes.service}>
          <ArrowRight />
          <Typography className={classes.serviceTypo}>Ouvrir des murs porteurs</Typography>
        </div>
        <div className={classes.service}>
          <ArrowRight />
          <Typography className={classes.serviceTypo}>Agrandir des fenêtres</Typography>
        </div>
        <div className={classes.service}>
          <ArrowRight />
          <Typography className={classes.serviceTypo}>Poser des cloisons (plaques de plâtre ou autres matériaux)</Typography>
        </div>
      </div>
      <Typography sx={{ alignSelf: 'flex-start', textAlign: 'left', margin: '0 20px 100px 20px' }}>
        La liste ci-dessus n&apos;est pas exhaustive, MB réno est en mesure de vous apporter bien plus de services de maçonnerie,
        nous vous conseillons et nous adaptons à tous vos projets !
      </Typography>
    </>
  );
}

export default BigWork;
