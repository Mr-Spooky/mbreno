import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import {
  Typography, Link as MuiLink,
} from '@mui/material';
import {
  Facebook, Instagram, LinkedIn, Mail, Phone,
} from '@mui/icons-material';
import PrimaryButton, { SecondaryButton } from './Buttons';
import StyledDivider from './MuiComponents';

const useStyles = makeStyles({
  footer: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: 'black',
    paddingTop: '30px',
  },
  footerContent: {
    width: '100%',
    maxWidth: '900px',
    padding: '0 20px',
  },
  footerText: {
    color: 'lightgrey',
  },
  footerTextSubtitle: {
    color: 'lightgrey',
    fontWeight: 'bold !important',
  },
  links: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  verticalDiv: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginTop: '20px',
  },
  verticalDivContent: {
    display: 'flex',
    paddingLeft: '10px',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  devis: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  me: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '50px',
  },
  linkedIn: {
    color: 'lightgrey',
    '&:hover': {
      cursor: 'pointer',
      color: 'grey',
    },
  },
});

function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <div className={classes.footerContent}>
        <div className={classes.links}>
          <div className={classes.verticalDiv}>
            <Typography className={classes.footerTextSubtitle}>Accès rapide</Typography>
            <div className={classes.verticalDivContent}>
              <SecondaryButton sx={{ margin: '0', padding: '0', justifyContent: 'flex-start' }} component={Link} to="/accueil">
                Accueil
              </SecondaryButton>
              <SecondaryButton sx={{ margin: '0', padding: '0', justifyContent: 'flex-start' }} component={Link} to="/prestations">
                Prestations
              </SecondaryButton>
              <SecondaryButton sx={{ margin: '0', padding: '0', justifyContent: 'flex-start' }} component={Link} to="/realisations">
                Réalisations
              </SecondaryButton>
              <SecondaryButton sx={{ margin: '0', padding: '0', justifyContent: 'flex-start' }} component={Link} to="/contact">
                Contact
              </SecondaryButton>
            </div>
          </div>
          <div className={classes.verticalDiv}>
            <div>
              <Typography className={classes.footerTextSubtitle}>Contactez-nous</Typography>
              <div className={classes.verticalDivContent}>
                <Typography className={classes.footerText}>
                  <Phone sx={{ marginBottom: '-7px' }} />
                  &nbsp;&nbsp;07 70 73 69 79
                </Typography>
                <Typography className={classes.footerText}>
                  <Mail sx={{ marginBottom: '-7px' }} />
                  &nbsp;&nbsp;mb.reno@orange.fr
                </Typography>
              </div>
            </div>
            <div>
              <Typography sx={{ marginTop: '5px' }} className={classes.footerTextSubtitle}>Horaires</Typography>
              <div className={classes.verticalDivContent}>
                <Typography className={classes.footerText}>Du lundi au vendredi</Typography>
                <Typography className={classes.footerText}>De 8h à 19h</Typography>
              </div>
            </div>
          </div>
          <div className={classes.verticalDiv}>
            <Typography className={classes.footerTextSubtitle}>Réseaux Sociaux</Typography>
            <div>
              <MuiLink href="https://www.facebook.com/MB-r%C3%A9no-108757878227209" target="_blank">
                <Facebook className={classes.linkedIn} fontSize="large" />
              </MuiLink>
              <MuiLink href="https://www.instagram.com/mb.reno/?hl=fr" target="_blank">
                <Instagram className={classes.linkedIn} fontSize="large" />
              </MuiLink>
            </div>
          </div>
          <div className={classes.verticalDiv}>
            <Typography className={classes.footerTextSubtitle}>Mentions légales</Typography>
            <div className={classes.verticalDivContent}>
              <SecondaryButton sx={{ margin: '0', padding: '0', justifyContent: 'flex-start' }} component={Link} to="/cgu">CGU</SecondaryButton>
              <SecondaryButton sx={{ margin: '0', padding: '0', justifyContent: 'flex-start' }} component={Link} to="/politique-de-confidentialite">
                Confidentialité
              </SecondaryButton>
            </div>
          </div>
        </div>
        <StyledDivider flexItem />
        <div className={classes.devis}>
          <Typography className={classes.footerText}>Demande de devis gratuite dans un rayon de 30km autour de l&apos;entreprise.</Typography>
          <PrimaryButton style={{ minWidth: '140px' }} component={Link} to="/contact">En savoir plus</PrimaryButton>
        </div>
        <StyledDivider flexItem />
        <div className={classes.me}>
          <Typography className={classes.footerText}>
            {`© ${new Date().getFullYear()} Créé et développé par Alexandre Girard - Tous droits réservés.`}
          </Typography>
          <MuiLink href="https://www.linkedin.com/in/alexandre-girard-314232199/" target="_blank">
            <LinkedIn className={classes.linkedIn} fontSize="large" />
          </MuiLink>
        </div>
      </div>
    </div>
  );
}

export default Footer;
