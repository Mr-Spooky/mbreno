import React from 'react';
import { Typography, Link as MuiLink } from '@mui/material';
import { makeStyles } from '@mui/styles';
import {
  Phone, Mail, Facebook, Instagram,
} from '@mui/icons-material';
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
    display: 'flex',
    minHeight: '75vh',
    maxWidth: '1000px',
    minWidth: '300px',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    textAlign: 'center',
  },
  title: {
    margin: '20px 0 10px 0 !important',
    fontWeight: 'bold !important',
    fontSize: '40px !important',
  },
  boxes: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginBottom: '50px',
  },
  box: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '40%',
    height: '400px',
    minWidth: '300px',
    margin: '10px',
    border: '1px solid black',
    borderRadius: '15px',
  },
  boxText: {
    color: 'black',
  },
  socialDiv: {
    display: 'flex',
    marginTop: '5px',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  icon: {
    color: 'black',
  },
  free: {
    margin: '10px !important',
    fontWeight: 'bold !important',
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

function Contact() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <Typography className={classes.title}>Contact</Typography>
        <div className={classes.boxes}>
          <div className={classes.box}>
            <div>
              <Typography className={classes.boxText}>Du lundi au vendredi</Typography>
              <Typography className={classes.boxText}>De 8h à 19h</Typography>
            </div>
            <div>
              <Typography className={classes.boxText}>
                <Phone sx={{ marginBottom: '-7px' }} />
                &nbsp;&nbsp;07 70 73 69 79
              </Typography>
              <Typography className={classes.boxText}>
                <Mail sx={{ marginBottom: '-7px' }} />
                &nbsp;&nbsp;mb.reno@orange.fr
              </Typography>
              <div className={classes.socialDiv}>
                <div>
                  <MuiLink href="https://www.facebook.com/MB-r%C3%A9no-108757878227209" target="_blank">
                    <Facebook className={classes.icon} fontSize="large" />
                  </MuiLink>
                  <Typography className={classes.boxText}>MB réno</Typography>
                </div>
                <div>
                  <MuiLink href="https://www.instagram.com/mb.reno/?hl=fr" target="_blank">
                    <Instagram className={classes.icon} fontSize="large" />
                  </MuiLink>
                  <Typography className={classes.boxText}>@mb.reno</Typography>
                </div>
              </div>
            </div>
            <Typography className={classes.free}>
              Les devis sont gratuits pour toute personne résidant dans un rayon d&apos;environ 30km autour de l&apos;entreprise
              (zone orange sur la carte ci-après),
              n&apos;hésitez pas à nous contacter par téléphone, par mail, sur les réseaux, ou en utilisant le formulaire ci-dessous.
            </Typography>
          </div>
          <div className={classes.box}>
            <Map />
            <Typography sx={{
              margin: '-25px 0 0 0', zIndex: 1, backgroundColor: 'white', borderRadius: '15px', padding: '0 23px',
            }}
            >
              Cliquez sur la carte pour connaître votre position
            </Typography>
          </div>
        </div>
        <ContactForm />
      </div>
      <div className={classes.background} />
    </div>
  );
}

export default Contact;
