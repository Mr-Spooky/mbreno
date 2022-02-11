import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { ArrowRight } from '@mui/icons-material';
import Map from '../contact/Map';
import PrimaryButton, { DarkPrimaryButton } from '../generic/Buttons';

const useStyles = makeStyles({
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    textAlign: 'left',
    marginBottom: '150px',
    flexWrap: 'wrap',
  },
  rootMobile: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: '100px',
  },
  map: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    textAlign: 'center',
    width: '40%',
    height: '400px',
    minWidth: '300px',
    margin: '10px',
    borderRadius: '15px',
  },
  right: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '45%',
    minWidth: '300px',
  },
  services: {
    margin: '10px 0 20px 0',
    paddingLeft: '30px',
    textAlign: 'left',
  },
  service: {
    display: 'flex',
  },
  serviceTypo: {
    fontWeight: 'bold !important',
  },
});

function Advantages({ width }) {
  const classes = useStyles();

  return (
    <div className={width < 727 ? classes.rootMobile : classes.root}>
      <div className={classes.map}>
        <Map />
        <Typography sx={{
          margin: '-23px 0 0 0', zIndex: 1, backgroundColor: 'white', padding: '0 10px', width: '100%',
        }}
        >
          Cliquez sur la carte pour connaître votre position
        </Typography>
      </div>
      <div className={classes.right}>
        <div style={{ marginBottom: '10px' }}>
          <Typography display="inline">Située à </Typography>
          <Typography display="inline" sx={{ fontWeight: 'bold' }}>Coulon (79510)</Typography>
          <Typography display="inline">, en Nouvelle-Aquitaine, l&apos;entreprise propose des </Typography>
          <Typography display="inline" sx={{ fontWeight: 'bold' }}>devis gratuits</Typography>
          <Typography display="inline"> pour toute personne résidant dans un&nbsp;rayon d&apos;environ </Typography>
          <Typography display="inline" sx={{ fontWeight: 'bold' }}>30km</Typography>
          <Typography display="inline"> autour de sa position (zone orange sur la carte).</Typography>
        </div>
        <Typography>
          Vous souhaitez :
        </Typography>
        <div className={classes.services}>
          <div className={classes.service}>
            <ArrowRight />
            <Typography className={classes.serviceTypo}>Agencer votre intérieur différemment</Typography>
          </div>
          <div className={classes.service}>
            <ArrowRight />
            <Typography className={classes.serviceTypo}>Poser des cloisons</Typography>
          </div>
          <div className={classes.service}>
            <ArrowRight />
            <Typography className={classes.serviceTypo}>Changer le revêtement du sol</Typography>
          </div>
          <div className={classes.service}>
            <ArrowRight />
            <Typography className={classes.serviceTypo}>Agrandir une pièce ou une fenêtre</Typography>
          </div>
          <div className={classes.service}>
            <ArrowRight />
            <Typography className={classes.serviceTypo}>Réaliser un mur de clôture</Typography>
          </div>
          <div className={classes.service}>
            <ArrowRight />
            <Typography className={classes.serviceTypo}>Aménager votre cours</Typography>
          </div>
          <div className={classes.service}>
            <ArrowRight />
            <Typography className={classes.serviceTypo}>Autre chose ?</Typography>
          </div>
        </div>
        <PrimaryButton sx={{ marginBottom: '5px' }} component={Link} to="/contact" variant="filled">
          N&apos;hésitez plus, contactez-nous
        </PrimaryButton>
        <DarkPrimaryButton component={Link} to="/realisations" variant="filled">Vous hésitez encore ? Découvrez nos réalisations</DarkPrimaryButton>
      </div>
    </div>
  );
}

Advantages.propTypes = {
  width: PropTypes.number.isRequired,
};

export default Advantages;
