import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';
import StyledDivider from '../components/generic/MuiComponents';
import PrimaryButton, { DarkPrimaryButton } from '../components/generic/Buttons';
import BigWork from '../components/services/BigWork';
import SecondWork from '../components/services/SecondWork';
import Servicing from '../components/services/Servicing';

const useStyles = makeStyles({
  content: {
    marginTop: '50px',
    display: 'flex',
    width: '100%',
    minHeight: '75vh',
    maxWidth: '1200px',
    minWidth: '300px',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    textAlign: 'center',
  },
  title: {
    margin: '40px 0 -10px 10px !important',
    fontWeight: 'bold !important',
    fontSize: '20px !important',
    alignSelf: 'flex-start',
  },
  quote: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: '100px',
  },
});

function Services() {
  const classes = useStyles();

  return (
    <div className={classes.content}>
      <Typography sx={{ alignSelf: 'flex-start', margin: '0 0 -10px 10px', fontWeight: 'bold' }}>Devis gratuits</Typography>
      <StyledDivider flexItem />
      <div className={classes.quote}>
        <Typography sx={{ margin: '10px 20px' }}>
          MB réno propose un service de devis gratuit, dans un rayon d&apos;environ 30km autour de l&apos;entreprise.
        </Typography>
        <PrimaryButton component={Link} to="/contact" variant="filled">En savoir plus</PrimaryButton>
      </div>
      <Typography sx={{ alignSelf: 'flex-start', margin: '0 0 -10px 10px', fontWeight: 'bold' }}>Le gros œuvre</Typography>
      <StyledDivider flexItem />
      <BigWork />
      <Typography sx={{ alignSelf: 'flex-start', margin: '0 0 -10px 10px', fontWeight: 'bold' }}>Le second œuvre</Typography>
      <StyledDivider flexItem />
      <SecondWork />
      <Typography sx={{ alignSelf: 'flex-start', margin: '0 0 -10px 10px', fontWeight: 'bold' }}>L&apos;entretien</Typography>
      <StyledDivider flexItem />
      <Servicing />
      <PrimaryButton sx={{ marginBottom: '5px' }} component={Link} to="/contact" variant="filled">
        N&apos;hésitez plus, contactez-nous
      </PrimaryButton>
      <DarkPrimaryButton sx={{ margin: '0 20px 100px 20px' }} component={Link} to="/realisations" variant="filled">
        Vous hésitez encore ? Découvrez nos réalisations
      </DarkPrimaryButton>
    </div>
  );
}

export default Services;
