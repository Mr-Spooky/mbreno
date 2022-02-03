import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Map from '../components/contact/Map';
import ContactForm from '../components/contact/ContactForm';

const useStyles = makeStyles({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  content: {
    paddingTop: '20px',
    display: 'flex',
    minHeight: '75vh',
    maxWidth: '1000px',
    minWidth: '300px',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    textAlign: 'center',
  },
  topDiv: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginBottom: '50px',
    textAlign: 'left',
  },
  topDivMobile: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: '30px',
  },
  titleDiv: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    width: '40%',
    minWidth: '300px',
    margin: '10px',
  },
  title: {
    fontWeight: 'bold !important',
    fontSize: '40px !important',
    color: '#F39200',
  },
  title2: {
    fontWeight: 'bold !important',
    fontSize: '30px !important',
  },
  mapDiv: {
    marginTop: '30px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '40%',
    height: '400px',
    minWidth: '300px',
    margin: '10px',
    borderRadius: '15px',
  },
  free: {
    fontSize: '16px !important',
  },
  background: {
    position: 'relative',
    width: '100%',
    backgroundColor: 'black',
    height: '350px',
    zIndex: -1,
  },
});

function Contact({ width }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <div className={width < 727 ? classes.topDivMobile : classes.topDiv}>
          <div className={classes.titleDiv}>
            <Typography className={classes.title}>Nous sommes à votre écoute</Typography>
            <div style={width < 727 ? { width: '100%' } : {}}>
              <Typography className={classes.title2}>Du lundi au vendredi</Typography>
              <Typography className={classes.title2} sx={{ marginBottom: '10px' }}>De 8h à 19h</Typography>
            </div>
            <Typography className={classes.free}>
              Les devis sont gratuits pour toute personne résidant dans un rayon d&apos;environ 30km autour de l&apos;entreprise (voir carte).
            </Typography>
            <Typography className={classes.free}>
              N&apos;hésitez pas à nous contacter par téléphone, par mail, sur les réseaux, ou en utilisant le formulaire ci-dessous.
            </Typography>
          </div>
          <div className={classes.mapDiv}>
            <Map />
            <Typography sx={{
              margin: '-25px 0 0 0', zIndex: 1, backgroundColor: 'white', padding: '0 10px', width: '100%', textAlign: 'center',
            }}
            >
              Cliquez sur la carte pour connaître votre position
            </Typography>
          </div>
        </div>
        <ContactForm width={width} />
      </div>
      <div className={classes.background} />
    </div>
  );
}

Contact.propTypes = {
  width: PropTypes.number.isRequired,
};

export default Contact;
