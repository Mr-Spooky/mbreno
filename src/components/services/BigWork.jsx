import React from 'react';
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { ArrowRight } from '@mui/icons-material';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '75px',
    flexWrap: 'wrap',
  },
  left: {
    width: '60%',
    minWidth: '350px',
    marginTop: '10px',
  },
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
  img: {
    width: '40%',
    minWidth: '300px',
    height: 'auto',
    borderRadius: '15px',
  },
});

function BigWork() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.left}>
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
        <Typography sx={{ alignSelf: 'flex-start', textAlign: 'left', margin: '0 20px 10px 20px' }}>
          La liste ci-dessus n&apos;est pas exhaustive, MB réno est en mesure de vous apporter bien plus de services de maçonnerie,
          nous vous conseillons et nous adaptons à tous vos projets !
        </Typography>
      </div>
      <img className={classes.img} src="./images/realizations/1/1.jpg" alt="Renovation maison" />
    </div>
  );
}

export default BigWork;
