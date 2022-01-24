import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import {
  Typography, Divider, Link as MuiLink, styled,
} from '@mui/material';
import { LinkedIn, Mail, Phone } from '@mui/icons-material';
import PrimaryButton, { SecondaryButton } from './Buttons';

const StyledDivider = styled(Divider)({
  backgroundColor: '#F39200',
  margin: '20px 0',
});

const useStyles = makeStyles({
  footer: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: 'black',
    paddingTop: '50px',
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
  },
  verticalDiv: {
    display: 'flex',
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
            <SecondaryButton sx={{ margin: '0', padding: '0' }} component={Link} to="/home">Accueil</SecondaryButton>
            <SecondaryButton sx={{ margin: '0', padding: '0' }} component={Link} to="/services">Prestations</SecondaryButton>
            <SecondaryButton sx={{ margin: '0', padding: '0' }} component={Link} to="/realizations">Réalisations</SecondaryButton>
            <SecondaryButton sx={{ margin: '0', padding: '0' }} component={Link} to="/contact">Contact</SecondaryButton>
          </div>
          <div className={classes.verticalDiv}>
            <div>
              <Typography className={classes.footerTextSubtitle}>Contactez-nous</Typography>
              <Typography sx={{ margin: '5px 0' }} className={classes.footerText}>
                <Phone sx={{ marginBottom: '-7px' }} />
                &nbsp;&nbsp;07 70 73 69 79
              </Typography>
              <Typography sx={{ margin: '5px 0' }} className={classes.footerText}>
                <Mail sx={{ marginBottom: '-7px' }} />
                &nbsp;&nbsp;mb.reno@orange.fr
              </Typography>
            </div>
            <div>
              <Typography sx={{ marginTop: '5px' }} className={classes.footerTextSubtitle}>Horaires</Typography>
              <Typography sx={{ margin: '5px 0' }} className={classes.footerText}>Du lundi au vendredi</Typography>
              <Typography sx={{ margin: '5px 0' }} className={classes.footerText}>De 8h à 19h</Typography>
            </div>
          </div>
          <div className={classes.verticalDiv}>
            <Typography className={classes.footerTextSubtitle}>Mentions légales</Typography>
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
